import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, Trash2, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  text: string;
  isBot: boolean;
}

const SUGGESTED_QUESTIONS = [
  'ما هي أعراض الإنفلونزا؟',
  'كيف أتعامل مع الحروق؟',
  'ما هي أرقام الطوارئ في مصر؟',
  'ما هي أعراض الاكتئاب؟',
  'كيف أحسب مؤشر كتلة الجسم؟'
];

const STORAGE_KEY = 'es3efny_chat_history';

export const SiteGuideBot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      {
        text: 'مرحباً! أنا مساعدك الذكي في موقع إسعفني 🏥\n\nيمكنني مساعدتك في:\n• البحث عن الأمراض والأعراض\n• معرفة العلاجات والأدوية\n• الإسعافات الأولية\n• أرقام الطوارئ\n• الصحة النفسية\n\nاسألني أي سؤال طبي!',
        isBot: true
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isProcessing) return;

    const userMessage: Message = { text: textToSend, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { message: textToSend }
      });

      if (error) {
        console.error('Error calling AI:', error);
        throw new Error(error.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      const botMessage: Message = { 
        text: data?.response || 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.', 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'حدث خطأ غير متوقع';
      
      toast({
        title: "خطأ",
        description: errorMessage,
        variant: "destructive",
      });

      const botMessage: Message = { 
        text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.', 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    const initialMessage: Message = {
      text: 'مرحباً! أنا مساعدك الذكي في موقع إسعفني 🏥\n\nيمكنني مساعدتك في:\n• البحث عن الأمراض والأعراض\n• معرفة العلاجات والأدوية\n• الإسعافات الأولية\n• أرقام الطوارئ\n• الصحة النفسية\n\nاسألني أي سؤال طبي!',
      isBot: true
    };
    setMessages([initialMessage]);
    toast({
      title: "تم مسح المحادثة",
      description: "تم حذف سجل المحادثة بنجاح",
    });
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg z-50 bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-96 h-[550px] shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-primary/20">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="h-6 w-6" />
                <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold">المساعد الذكي</h3>
                <span className="text-xs opacity-80">مدعوم بالذكاء الاصطناعي</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={clearHistory}
                className="hover:bg-primary-foreground/20 text-primary-foreground"
                title="مسح المحادثة"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-accent/10">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-md ${
                    message.isBot
                      ? 'bg-card text-card-foreground rounded-tr-sm border border-border'
                      : 'bg-primary text-primary-foreground rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-2xl rounded-tr-sm bg-card text-card-foreground border border-border shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">يفكر...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="p-3 border-t bg-accent/5">
            <div className="flex items-center gap-2 mb-2">
              <History className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">أسئلة مقترحة</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  disabled={isProcessing}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب سؤالك الطبي..."
                className="flex-1 rounded-full"
                disabled={isProcessing}
              />
              <Button 
                onClick={() => handleSend()} 
                size="icon" 
                className="rounded-full"
                disabled={isProcessing || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};