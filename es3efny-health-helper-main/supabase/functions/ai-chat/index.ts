import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received message:", message);

    const systemPrompt = `أنت مساعد طبي ذكي لموقع "إسعفني" المصري. مهمتك هي:

1. الإجابة على الأسئلة الطبية العامة بشكل مفيد ودقيق
2. توجيه المستخدمين لأقسام الموقع المناسبة:
   - قسم البحث عن الأمراض والأعراض
   - قسم العلاجات والأدوية مع الأسعار
   - قسم الإسعافات الأولية
   - قسم أرقام الطوارئ (الإسعاف 123، الشرطة 122، الإطفاء 180)
   - قسم الصحة النفسية
   - قسم النظام الغذائي وحاسبة BMI
   - البحث عن أقرب مستشفى أو صيدلية

3. تقديم نصائح صحية عامة
4. التأكيد دائماً على ضرورة استشارة الطبيب للحالات الخطيرة

أجب باللغة العربية فقط وبأسلوب ودود ومختصر. لا تقدم تشخيصات طبية قاطعة.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "يرجى إضافة رصيد للمتابعة." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "حدث خطأ في الاتصال" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "عذراً، لم أستطع معالجة طلبك.";
    
    console.log("AI response:", aiResponse);

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in ai-chat function:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "خطأ غير معروف" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
