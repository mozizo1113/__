export interface FirstAidTip {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  stepsEn: string[];
  stepsAr: string[];
  category?: string;
}

export const firstAidTips: FirstAidTip[] = [
  {
    id: 1,
    titleEn: "CPR (Cardiopulmonary Resuscitation)",
    titleAr: "الإنعاش القلبي الرئوي",
    descriptionEn: "Life-saving technique for cardiac arrest victims",
    descriptionAr: "تقنية منقذة للحياة لضحايا السكتة القلبية",
    stepsEn: [
      "Call emergency services (123) immediately",
      "Place person on firm surface, check breathing",
      "Position hands on center of chest",
      "Push hard and fast at 100-120 compressions/minute",
      "Continue until help arrives"
    ],
    stepsAr: [
      "اتصل بالإسعاف (123) فوراً",
      "ضع الشخص على سطح صلب وتحقق من التنفس",
      "ضع يديك على منتصف الصدر",
      "اضغط بقوة وسرعة 100-120 ضغطة/دقيقة",
      "استمر حتى وصول المساعدة"
    ]
  },
  {
    id: 2,
    titleEn: "Choking Emergency",
    titleAr: "الاختناق",
    descriptionEn: "Heimlich maneuver for airway obstruction",
    descriptionAr: "مناورة هيمليك لانسداد مجرى الهواء",
    stepsEn: [
      "Stand behind the person",
      "Make a fist above navel, below ribcage",
      "Grasp fist with other hand",
      "Give quick upward thrusts",
      "Repeat until object is expelled"
    ],
    stepsAr: [
      "قف خلف الشخص",
      "اصنع قبضة فوق السرة تحت القفص الصدري",
      "امسك القبضة باليد الأخرى",
      "قم بدفعات سريعة للأعلى",
      "كرر حتى خروج الجسم الغريب"
    ]
  },
  {
    id: 3,
    titleEn: "Severe Bleeding Control",
    titleAr: "السيطرة على النزيف الشديد",
    descriptionEn: "Stop life-threatening bleeding",
    descriptionAr: "إيقاف النزيف المهدد للحياة",
    stepsEn: [
      "Apply direct pressure with clean cloth",
      "Maintain pressure for 10-15 minutes",
      "Add more cloth if blood soaks through",
      "Elevate injured area above heart if possible",
      "Call emergency services if bleeding doesn't stop"
    ],
    stepsAr: [
      "اضغط مباشرة بقماش نظيف",
      "حافظ على الضغط لمدة 10-15 دقيقة",
      "أضف قماش آخر إذا تشرب الدم",
      "ارفع المنطقة المصابة فوق القلب إن أمكن",
      "اتصل بالإسعاف إذا لم يتوقف النزيف"
    ]
  },
  {
    id: 4,
    titleEn: "Burns Treatment",
    titleAr: "علاج الحروق",
    descriptionEn: "First aid for thermal burns",
    descriptionAr: "الإسعافات الأولية للحروق الحرارية",
    stepsEn: [
      "Remove from heat source immediately",
      "Cool burn with running water for 10-20 minutes",
      "Remove jewelry/tight items before swelling",
      "Cover with sterile, non-stick dressing",
      "Seek medical help for serious burns"
    ],
    stepsAr: [
      "أبعد عن مصدر الحرارة فوراً",
      "برّد الحرق بالماء الجاري لمدة 10-20 دقيقة",
      "أزل المجوهرات والأشياء الضيقة قبل التورم",
      "غطِّ بضمادة معقمة غير لاصقة",
      "اطلب المساعدة الطبية للحروق الخطيرة"
    ]
  },
  {
    id: 5,
    titleEn: "Fracture Management",
    titleAr: "التعامل مع الكسور",
    descriptionEn: "Immobilize suspected bone fractures",
    descriptionAr: "تثبيت الكسور المشتبه بها",
    stepsEn: [
      "Don't move injured area",
      "Apply ice pack to reduce swelling",
      "Immobilize with splint if trained",
      "Support injured limb",
      "Get immediate medical attention"
    ],
    stepsAr: [
      "لا تحرك المنطقة المصابة",
      "ضع كمادة ثلج لتقليل التورم",
      "ثبّت بجبيرة إذا كنت مدرباً",
      "ادعم الطرف المصاب",
      "احصل على عناية طبية فورية"
    ]
  },
  {
    id: 6,
    titleEn: "Shock Management",
    titleAr: "التعامل مع الصدمة",
    descriptionEn: "Recognize and treat medical shock",
    descriptionAr: "التعرف على الصدمة الطبية وعلاجها",
    stepsEn: [
      "Lay person down, elevate legs",
      "Keep warm with blanket",
      "Don't give food or water",
      "Monitor breathing and pulse",
      "Call emergency services immediately"
    ],
    stepsAr: [
      "أضجع الشخص وارفع ساقيه",
      "حافظ على الدفء ببطانية",
      "لا تعطِ طعاماً أو ماءً",
      "راقب التنفس والنبض",
      "اتصل بالإسعاف فوراً"
    ]
  },
  {
    id: 7,
    titleEn: "Stroke Recognition (FAST)",
    titleAr: "التعرف على السكتة الدماغية",
    descriptionEn: "Quick stroke assessment",
    descriptionAr: "التقييم السريع للسكتة الدماغية",
    stepsEn: [
      "Face: Ask to smile, check for drooping",
      "Arms: Raise both arms, watch for drift",
      "Speech: Check for slurred speech",
      "Time: Call 123 immediately if any signs",
      "Note time symptoms started"
    ],
    stepsAr: [
      "الوجه: اطلب الابتسام، تحقق من الترهل",
      "الذراعان: ارفع كلا الذراعين، راقب الانجراف",
      "الكلام: تحقق من تداخل الكلام",
      "الوقت: اتصل بـ 123 فوراً عند أي علامة",
      "سجل وقت بدء الأعراض"
    ]
  },
  {
    id: 8,
    titleEn: "Seizure Response",
    titleAr: "التعامل مع النوبات",
    descriptionEn: "Protect person during seizure",
    descriptionAr: "حماية الشخص أثناء النوبة",
    stepsEn: [
      "Clear area of hard/sharp objects",
      "Cushion head with soft material",
      "Time the seizure",
      "Don't restrain or put anything in mouth",
      "Turn on side after seizure ends"
    ],
    stepsAr: [
      "أزل الأشياء الصلبة والحادة من المنطقة",
      "ضع وسادة تحت الرأس",
      "احسب مدة النوبة",
      "لا تمسك الشخص أو تضع شيئاً في فمه",
      "اقلب الشخص على جانبه بعد انتهاء النوبة"
    ]
  },
  {
    id: 9,
    titleEn: "Nosebleed Control",
    titleAr: "إيقاف نزيف الأنف",
    descriptionEn: "Stop nasal bleeding safely",
    descriptionAr: "إيقاف نزيف الأنف بأمان",
    stepsEn: [
      "Sit upright, lean slightly forward",
      "Pinch soft part of nose for 10 minutes",
      "Breathe through mouth",
      "Apply cold compress to bridge of nose",
      "Seek help if bleeding continues over 20 minutes"
    ],
    stepsAr: [
      "اجلس منتصباً ومِل قليلاً للأمام",
      "اضغط على الجزء اللين من الأنف لمدة 10 دقائق",
      "تنفس من الفم",
      "ضع كمادة باردة على جسر الأنف",
      "اطلب المساعدة إذا استمر النزيف أكثر من 20 دقيقة"
    ]
  },
  {
    id: 10,
    titleEn: "Eye Injury Care",
    titleAr: "العناية بإصابات العين",
    descriptionEn: "Protect injured eyes",
    descriptionAr: "حماية العيون المصابة",
    stepsEn: [
      "Don't rub or touch the eye",
      "Flush with clean water for chemicals",
      "Cover both eyes with clean cloth",
      "Don't remove embedded objects",
      "Get immediate medical attention"
    ],
    stepsAr: [
      "لا تفرك أو تلمس العين",
      "اغسل بالماء النظيف للمواد الكيميائية",
      "غطِّ كلتا العينين بقماش نظيف",
      "لا تزل الأجسام الغريبة العالقة",
      "احصل على عناية طبية فورية"
    ]
  },
  {
    id: 11,
    titleEn: "Diabetic Emergency",
    titleAr: "طوارئ السكري",
    descriptionEn: "Low blood sugar response",
    descriptionAr: "التعامل مع انخفاض السكر",
    stepsEn: [
      "Give conscious person sugar/juice",
      "15 grams fast-acting carbohydrates",
      "Recheck blood sugar in 15 minutes",
      "Call 123 if unconscious",
      "Don't give insulin during low sugar"
    ],
    stepsAr: [
      "أعطِ الشخص الواعي سكراً أو عصيراً",
      "15 جرام كربوهيدرات سريعة المفعول",
      "أعد فحص السكر بعد 15 دقيقة",
      "اتصل بـ 123 إذا كان فاقداً للوعي",
      "لا تعطِ الإنسولين عند انخفاض السكر"
    ]
  },
  {
    id: 12,
    titleEn: "Heat Stroke",
    titleAr: "ضربة الشمس",
    descriptionEn: "Cool overheated body rapidly",
    descriptionAr: "تبريد الجسم المحموم بسرعة",
    stepsEn: [
      "Move to cool, shaded area",
      "Remove excess clothing",
      "Cool with water/ice packs",
      "Fan to increase cooling",
      "Call 123 if symptoms worsen"
    ],
    stepsAr: [
      "انقل إلى منطقة باردة ومظللة",
      "أزل الملابس الزائدة",
      "برّد بالماء وكمادات الثلج",
      "استخدم مروحة لزيادة التبريد",
      "اتصل بـ 123 إذا ساءت الأعراض"
    ]
  },
  {
    id: 13,
    titleEn: "Hypothermia Treatment",
    titleAr: "علاج انخفاض حرارة الجسم",
    descriptionEn: "Warm cold body gradually",
    descriptionAr: "تدفئة الجسم البارد تدريجياً",
    stepsEn: [
      "Move to warm location",
      "Remove wet clothing",
      "Wrap in warm blankets",
      "Give warm non-alcoholic drinks",
      "Seek medical help immediately"
    ],
    stepsAr: [
      "انقل إلى مكان دافئ",
      "أزل الملابس المبللة",
      "غطِّ ببطانيات دافئة",
      "أعطِ مشروبات دافئة غير كحولية",
      "اطلب المساعدة الطبية فوراً"
    ]
  },
  {
    id: 14,
    titleEn: "Allergic Reaction",
    titleAr: "رد الفعل التحسسي",
    descriptionEn: "Respond to severe allergies",
    descriptionAr: "الاستجابة للحساسية الشديدة",
    stepsEn: [
      "Use epinephrine auto-injector if available",
      "Call emergency services immediately",
      "Help person lie down",
      "Monitor breathing carefully",
      "Be prepared to perform CPR"
    ],
    stepsAr: [
      "استخدم حقنة الإبينفرين الذاتية إن توفرت",
      "اتصل بالإسعاف فوراً",
      "ساعد الشخص على الاستلقاء",
      "راقب التنفس بعناية",
      "كن مستعداً لإجراء الإنعاش القلبي"
    ]
  },
  {
    id: 15,
    titleEn: "Poisoning Emergency",
    titleAr: "طوارئ التسمم",
    descriptionEn: "First response to poisoning",
    descriptionAr: "الاستجابة الأولى للتسمم",
    stepsEn: [
      "Call poison control immediately",
      "Don't induce vomiting unless instructed",
      "Keep poison container for reference",
      "Monitor breathing and consciousness",
      "Follow poison control instructions exactly"
    ],
    stepsAr: [
      "اتصل بمركز السموم فوراً",
      "لا تحث على التقيؤ إلا بتعليمات",
      "احتفظ بعبوة السم للمرجعية",
      "راقب التنفس والوعي",
      "اتبع تعليمات مركز السموم تماماً"
    ]
  },
  {
    id: 16,
    titleEn: "Sprain/Strain Care (RICE)",
    titleAr: "علاج الالتواء والشد",
    descriptionEn: "Reduce swelling and pain",
    descriptionAr: "تقليل التورم والألم",
    stepsEn: [
      "Rest: Avoid using injured area",
      "Ice: Apply for 20 minutes every 2 hours",
      "Compression: Wrap with elastic bandage",
      "Elevation: Raise above heart level",
      "Seek medical care if severe"
    ],
    stepsAr: [
      "راحة: تجنب استخدام المنطقة المصابة",
      "ثلج: ضع لمدة 20 دقيقة كل ساعتين",
      "ضغط: لف بضمادة مرنة",
      "رفع: ارفع فوق مستوى القلب",
      "اطلب الرعاية الطبية إذا كان شديداً"
    ]
  },
  {
    id: 17,
    titleEn: "Asthma Attack",
    titleAr: "نوبة الربو",
    descriptionEn: "Help during breathing difficulty",
    descriptionAr: "المساعدة أثناء صعوبة التنفس",
    stepsEn: [
      "Help use rescue inhaler",
      "Sit upright, loosen tight clothing",
      "Stay calm, breathe slowly",
      "Call 123 if no improvement in 5-10 minutes",
      "Don't leave person alone"
    ],
    stepsAr: [
      "ساعد في استخدام البخاخ",
      "اجلس منتصباً، فك الملابس الضيقة",
      "ابقَ هادئاً، تنفس ببطء",
      "اتصل بـ 123 إذا لم يتحسن في 5-10 دقائق",
      "لا تترك الشخص وحده"
    ]
  },
  {
    id: 18,
    titleEn: "Head Injury Care",
    titleAr: "العناية بإصابات الرأس",
    descriptionEn: "Monitor head trauma carefully",
    descriptionAr: "مراقبة صدمات الرأس بعناية",
    stepsEn: [
      "Apply ice to reduce swelling",
      "Keep person still and calm",
      "Watch for confusion, vomiting, drowsiness",
      "Don't give medication without doctor approval",
      "Call 123 for severe symptoms"
    ],
    stepsAr: [
      "ضع ثلجاً لتقليل التورم",
      "أبقِ الشخص ساكناً وهادئاً",
      "راقب الارتباك والقيء والنعاس",
      "لا تعطِ دواء دون موافقة طبيب",
      "اتصل بـ 123 للأعراض الشديدة"
    ]
  },
  {
    id: 19,
    titleEn: "Insect Sting/Bite",
    titleAr: "لدغة ولسعة الحشرات",
    descriptionEn: "Treat insect reactions",
    descriptionAr: "علاج ردود فعل الحشرات",
    stepsEn: [
      "Remove stinger by scraping (don't pinch)",
      "Wash with soap and water",
      "Apply cold compress",
      "Take antihistamine if needed",
      "Watch for allergic reaction signs"
    ],
    stepsAr: [
      "أزل الإبرة بالكشط (لا تضغط)",
      "اغسل بالصابون والماء",
      "ضع كمادة باردة",
      "تناول مضاد هيستامين إذا لزم",
      "راقب علامات رد الفعل التحسسي"
    ]
  },
  {
    id: 20,
    titleEn: "Dehydration Prevention",
    titleAr: "الوقاية من الجفاف",
    descriptionEn: "Recognize and treat dehydration",
    descriptionAr: "التعرف على الجفاف وعلاجه",
    stepsEn: [
      "Drink water regularly, especially in heat",
      "Watch for dry mouth, dark urine, dizziness",
      "Sip electrolyte drinks for severe cases",
      "Rest in cool place",
      "Seek medical help if symptoms persist"
    ],
    stepsAr: [
      "اشرب الماء بانتظام، خاصة في الحر",
      "راقب جفاف الفم والبول الداكن والدوار",
      "ارتشف مشروبات الإلكتروليت للحالات الشديدة",
      "استرح في مكان بارد",
      "اطلب المساعدة الطبية إذا استمرت الأعراض"
    ]
  },
  {
    id: 21,
    titleEn: "Electric Shock",
    titleAr: "الصعقة الكهربائية",
    descriptionEn: "Respond to electrical injuries safely",
    descriptionAr: "الاستجابة لإصابات الكهرباء بأمان",
    stepsEn: [
      "Don't touch person if still in contact with electricity",
      "Turn off power source if possible",
      "Call emergency services (123)",
      "Check breathing and pulse",
      "Perform CPR if needed"
    ],
    stepsAr: [
      "لا تلمس الشخص إذا كان لا يزال متصلاً بالكهرباء",
      "أطفئ مصدر الطاقة إن أمكن",
      "اتصل بالإسعاف (123)",
      "تحقق من التنفس والنبض",
      "أجرِ الإنعاش القلبي إذا لزم"
    ],
    category: "injuries"
  },
  {
    id: 22,
    titleEn: "Drowning Rescue",
    titleAr: "إنقاذ الغرق",
    descriptionEn: "Help drowning victim safely",
    descriptionAr: "مساعدة ضحية الغرق بأمان",
    stepsEn: [
      "Call for help immediately",
      "Throw flotation device if available",
      "Pull victim to safety",
      "Check breathing and start CPR if needed",
      "Keep warm and monitor until help arrives"
    ],
    stepsAr: [
      "اطلب المساعدة فوراً",
      "ارمِ جهاز طفو إن توفر",
      "اسحب الضحية للأمان",
      "تحقق من التنفس وابدأ الإنعاش إذا لزم",
      "حافظ على الدفء وراقب حتى وصول المساعدة"
    ],
    category: "breathing"
  },
  {
    id: 23,
    titleEn: "Fainting",
    titleAr: "الإغماء",
    descriptionEn: "Help someone who fainted",
    descriptionAr: "مساعدة شخص أغمي عليه",
    stepsEn: [
      "Catch person if possible to prevent fall",
      "Lay person flat on back",
      "Elevate legs above heart level",
      "Loosen tight clothing",
      "Check breathing and call 123 if unconscious over 1 minute"
    ],
    stepsAr: [
      "أمسك الشخص إن أمكن لمنع السقوط",
      "أضجع الشخص على ظهره",
      "ارفع الساقين فوق مستوى القلب",
      "فك الملابس الضيقة",
      "تحقق من التنفس واتصل بـ 123 إذا استمر فقدان الوعي أكثر من دقيقة"
    ],
    category: "general"
  },
  {
    id: 24,
    titleEn: "Chemical Burns",
    titleAr: "الحروق الكيميائية",
    descriptionEn: "Treat chemical skin exposure",
    descriptionAr: "علاج تعرض الجلد للمواد الكيميائية",
    stepsEn: [
      "Remove contaminated clothing",
      "Flush with large amounts of water for 20+ minutes",
      "Don't neutralize chemical with other chemicals",
      "Cover with sterile dressing",
      "Seek immediate medical attention"
    ],
    stepsAr: [
      "أزل الملابس الملوثة",
      "اغسل بكميات كبيرة من الماء لمدة 20+ دقيقة",
      "لا تحيّد المادة الكيميائية بمواد أخرى",
      "غطِّ بضمادة معقمة",
      "اطلب العناية الطبية فوراً"
    ],
    category: "burns"
  },
  {
    id: 25,
    titleEn: "Tooth Knocked Out",
    titleAr: "سقوط السن",
    descriptionEn: "Save and preserve knocked out tooth",
    descriptionAr: "حفظ السن المخلوع",
    stepsEn: [
      "Handle tooth by crown only, not root",
      "Rinse gently with milk or water",
      "Try to reinsert in socket if possible",
      "If not possible, store in milk",
      "See dentist within 30 minutes"
    ],
    stepsAr: [
      "أمسك السن من التاج فقط وليس الجذر",
      "اشطفه برفق بالحليب أو الماء",
      "حاول إعادته للتجويف إن أمكن",
      "إذا لم يمكن، احفظه في الحليب",
      "راجع طبيب الأسنان خلال 30 دقيقة"
    ],
    category: "injuries"
  },
  {
    id: 26,
    titleEn: "Panic Attack",
    titleAr: "نوبة الهلع",
    descriptionEn: "Help during panic attack",
    descriptionAr: "المساعدة أثناء نوبة الهلع",
    stepsEn: [
      "Stay calm and speak reassuringly",
      "Guide slow, deep breathing",
      "Move to quiet, safe space",
      "Ask what helps them",
      "Stay with person until attack passes"
    ],
    stepsAr: [
      "ابقَ هادئاً وتحدث بطريقة مطمئنة",
      "أرشد للتنفس البطيء والعميق",
      "انتقل لمكان هادئ وآمن",
      "اسأل ما الذي يساعدهم",
      "ابقَ مع الشخص حتى تمر النوبة"
    ],
    category: "general"
  },
  {
    id: 27,
    titleEn: "Broken Tooth",
    titleAr: "كسر السن",
    descriptionEn: "Care for broken or chipped tooth",
    descriptionAr: "العناية بالسن المكسور",
    stepsEn: [
      "Rinse mouth with warm water",
      "Apply cold compress to reduce swelling",
      "Save any tooth fragments",
      "Cover sharp edges with dental wax if available",
      "See dentist as soon as possible"
    ],
    stepsAr: [
      "اشطف الفم بماء دافئ",
      "ضع كمادة باردة لتقليل التورم",
      "احفظ أي شظايا من السن",
      "غطِّ الحواف الحادة بالشمع السني إن توفر",
      "راجع طبيب الأسنان في أقرب وقت"
    ],
    category: "injuries"
  },
  {
    id: 28,
    titleEn: "Animal Bite",
    titleAr: "عضة حيوان",
    descriptionEn: "Treat animal bites properly",
    descriptionAr: "علاج عضات الحيوانات بشكل صحيح",
    stepsEn: [
      "Wash wound with soap and water for 5 minutes",
      "Apply pressure to stop bleeding",
      "Apply antibiotic cream",
      "Cover with sterile bandage",
      "Seek medical attention for tetanus and rabies evaluation"
    ],
    stepsAr: [
      "اغسل الجرح بالصابون والماء لمدة 5 دقائق",
      "اضغط لإيقاف النزيف",
      "ضع كريم مضاد حيوي",
      "غطِّ بضمادة معقمة",
      "اطلب العناية الطبية لتقييم الكزاز وداء الكلب"
    ],
    category: "injuries"
  },
  {
    id: 29,
    titleEn: "Foreign Object in Nose",
    titleAr: "جسم غريب في الأنف",
    descriptionEn: "Remove object from nose safely",
    descriptionAr: "إزالة الجسم الغريب من الأنف بأمان",
    stepsEn: [
      "Keep calm and don't panic",
      "Try gentle nose blowing while closing other nostril",
      "Don't push object deeper",
      "Don't use tweezers or other tools",
      "See doctor if object won't come out"
    ],
    stepsAr: [
      "ابقَ هادئاً ولا تفزع",
      "حاول النفخ برفق مع إغلاق الفتحة الأخرى",
      "لا تدفع الجسم للداخل",
      "لا تستخدم ملاقط أو أدوات أخرى",
      "راجع الطبيب إذا لم يخرج الجسم"
    ],
    category: "general"
  },
  {
    id: 30,
    titleEn: "Back Injury",
    titleAr: "إصابة الظهر",
    descriptionEn: "Care for suspected back or spine injury",
    descriptionAr: "العناية بإصابة الظهر أو العمود الفقري المشتبه بها",
    stepsEn: [
      "Don't move the person",
      "Call emergency services (123)",
      "Keep person still and calm",
      "Support head and neck in current position",
      "Wait for professional medical help"
    ],
    stepsAr: [
      "لا تحرك الشخص",
      "اتصل بالإسعاف (123)",
      "أبقِ الشخص ساكناً وهادئاً",
      "ادعم الرأس والرقبة في الوضع الحالي",
      "انتظر المساعدة الطبية المتخصصة"
    ],
    category: "injuries"
  },
  {
    id: 31,
    titleEn: "Sunburn Treatment",
    titleAr: "علاج حروق الشمس",
    descriptionEn: "Soothe and treat sunburn",
    descriptionAr: "تهدئة وعلاج حروق الشمس",
    stepsEn: [
      "Get out of the sun immediately",
      "Apply cool water or cool compresses",
      "Apply aloe vera or moisturizer",
      "Drink plenty of water",
      "Take pain reliever if needed"
    ],
    stepsAr: [
      "ابتعد عن الشمس فوراً",
      "ضع ماء بارد أو كمادات باردة",
      "ضع الصبار أو مرطب",
      "اشرب الكثير من الماء",
      "تناول مسكن ألم إذا لزم"
    ],
    category: "burns"
  },
  {
    id: 32,
    titleEn: "Muscle Cramp",
    titleAr: "تشنج العضلات",
    descriptionEn: "Relieve painful muscle cramps",
    descriptionAr: "تخفيف تشنجات العضلات المؤلمة",
    stepsEn: [
      "Gently stretch the cramped muscle",
      "Massage the area",
      "Apply heat to tense muscles",
      "Apply ice for tender muscles",
      "Drink water or electrolyte beverages"
    ],
    stepsAr: [
      "مدد العضلة المتشنجة برفق",
      "دلّك المنطقة",
      "ضع حرارة للعضلات المتوترة",
      "ضع ثلج للعضلات الحساسة",
      "اشرب ماء أو مشروبات إلكتروليت"
    ],
    category: "injuries"
  },
  {
    id: 33,
    titleEn: "Foreign Object in Eye",
    titleAr: "جسم غريب في العين",
    descriptionEn: "Remove small objects from eye",
    descriptionAr: "إزالة الأجسام الصغيرة من العين",
    stepsEn: [
      "Don't rub the eye",
      "Let tears flow naturally",
      "Try to flush with clean water",
      "Pull upper lid over lower lid",
      "Seek medical help if object remains"
    ],
    stepsAr: [
      "لا تفرك العين",
      "دع الدموع تتدفق طبيعياً",
      "حاول الغسل بماء نظيف",
      "اسحب الجفن العلوي فوق السفلي",
      "اطلب المساعدة الطبية إذا بقي الجسم"
    ],
    category: "general"
  },
  {
    id: 34,
    titleEn: "Hyperventilation",
    titleAr: "فرط التنفس",
    descriptionEn: "Help with rapid breathing",
    descriptionAr: "المساعدة في التنفس السريع",
    stepsEn: [
      "Stay calm and reassuring",
      "Encourage slow breathing",
      "Breathe through pursed lips",
      "Cup hands over mouth and nose",
      "Focus on exhaling slowly"
    ],
    stepsAr: [
      "ابقَ هادئاً ومطمئناً",
      "شجع التنفس البطيء",
      "تنفس من خلال الشفاه المضمومة",
      "ضع اليدين على الفم والأنف",
      "ركز على الزفير البطيء"
    ],
    category: "breathing"
  },
  {
    id: 35,
    titleEn: "Heart Attack Warning",
    titleAr: "تحذير النوبة القلبية",
    descriptionEn: "Recognize and respond to heart attack",
    descriptionAr: "التعرف على النوبة القلبية والاستجابة لها",
    stepsEn: [
      "Call 123 immediately",
      "Chew aspirin if not allergic",
      "Loosen tight clothing",
      "Help person sit or lie down",
      "Be prepared for CPR"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "امضغ أسبرين إذا لم يكن هناك حساسية",
      "فك الملابس الضيقة",
      "ساعد الشخص على الجلوس أو الاستلقاء",
      "كن مستعداً للإنعاش القلبي"
    ],
    category: "breathing"
  },
  {
    id: 36,
    titleEn: "Chest Pain Response",
    titleAr: "التعامل مع ألم الصدر",
    descriptionEn: "Respond to chest pain emergencies",
    descriptionAr: "الاستجابة لحالات ألم الصدر الطارئة",
    stepsEn: [
      "Call 123 immediately",
      "Help person sit in comfortable position",
      "Loosen tight clothing",
      "Give aspirin if not allergic",
      "Monitor breathing and be ready for CPR"
    ],
    stepsAr: [
      "اتصل بـ 123 فوراً",
      "ساعد الشخص على الجلوس بوضع مريح",
      "فك الملابس الضيقة",
      "أعطِ أسبرين إذا لم يكن هناك حساسية",
      "راقب التنفس وكن مستعداً للإنعاش"
    ],
    category: "cardiac"
  },
  {
    id: 37,
    titleEn: "Tooth Knocked Out",
    titleAr: "سقوط الأسنان",
    descriptionEn: "Save knocked out permanent tooth",
    descriptionAr: "إنقاذ السن الدائم المخلوع",
    stepsEn: [
      "Pick up tooth by crown, not root",
      "Rinse gently with water if dirty",
      "Try to reinsert in socket",
      "If not possible, keep in milk",
      "See dentist within 30 minutes"
    ],
    stepsAr: [
      "امسك السن من التاج لا الجذر",
      "اشطف برفق بالماء إذا كان متسخاً",
      "حاول إعادته في مكانه",
      "إذا لم يمكن، احفظه في الحليب",
      "راجع طبيب الأسنان خلال 30 دقيقة"
    ],
    category: "injuries"
  },
  {
    id: 38,
    titleEn: "Foreign Object in Ear",
    titleAr: "جسم غريب في الأذن",
    descriptionEn: "Remove foreign objects from ear safely",
    descriptionAr: "إزالة الأجسام الغريبة من الأذن بأمان",
    stepsEn: [
      "Do not insert anything into ear",
      "Tilt head to affected side",
      "Gently pull earlobe",
      "For insects, use flashlight to lure out",
      "Seek medical help if object remains"
    ],
    stepsAr: [
      "لا تدخل أي شيء في الأذن",
      "أمِل الرأس للجانب المصاب",
      "اسحب شحمة الأذن برفق",
      "للحشرات، استخدم ضوء لجذبها",
      "اطلب المساعدة الطبية إذا بقي الجسم"
    ],
    category: "injuries"
  },
  {
    id: 39,
    titleEn: "Foreign Object in Nose",
    titleAr: "جسم غريب في الأنف",
    descriptionEn: "Handle foreign objects in nose",
    descriptionAr: "التعامل مع الأجسام الغريبة في الأنف",
    stepsEn: [
      "Stay calm, breathe through mouth",
      "Do not push object further",
      "Close unaffected nostril",
      "Blow gently through affected nostril",
      "Seek medical help if unsuccessful"
    ],
    stepsAr: [
      "ابقَ هادئاً، تنفس من الفم",
      "لا تدفع الجسم للداخل",
      "أغلق فتحة الأنف السليمة",
      "انفخ برفق من الفتحة المصابة",
      "اطلب المساعدة الطبية إذا لم تنجح"
    ],
    category: "injuries"
  },
  {
    id: 40,
    titleEn: "Abdominal Pain Emergency",
    titleAr: "طوارئ ألم البطن",
    descriptionEn: "Respond to severe abdominal pain",
    descriptionAr: "الاستجابة لألم البطن الشديد",
    stepsEn: [
      "Help person lie in comfortable position",
      "Do not give food or water",
      "Apply warm compress if not appendicitis",
      "Note location and type of pain",
      "Call 123 if pain is severe"
    ],
    stepsAr: [
      "ساعد الشخص على الاستلقاء بوضع مريح",
      "لا تعطِ طعاماً أو ماءً",
      "ضع كمادة دافئة إذا لم تكن الزائدة",
      "لاحظ موقع ونوع الألم",
      "اتصل بـ 123 إذا كان الألم شديداً"
    ],
    category: "medical"
  },
  {
    id: 41,
    titleEn: "Frostbite Treatment",
    titleAr: "علاج عضة الصقيع",
    descriptionEn: "Treat cold-related tissue damage",
    descriptionAr: "علاج تلف الأنسجة الناتج عن البرد",
    stepsEn: [
      "Move to warm area",
      "Remove wet clothing",
      "Warm affected area in warm water 37-39°C",
      "Do not rub or massage",
      "Seek medical attention"
    ],
    stepsAr: [
      "انتقل إلى منطقة دافئة",
      "أزل الملابس المبللة",
      "دفئ المنطقة في ماء دافئ 37-39 درجة",
      "لا تفرك أو تدلك",
      "اطلب الرعاية الطبية"
    ],
    category: "environmental"
  },
  {
    id: 42,
    titleEn: "Snake Bite Response",
    titleAr: "التعامل مع لدغة الثعبان",
    descriptionEn: "First aid for snake bites",
    descriptionAr: "الإسعافات الأولية للدغات الثعابين",
    stepsEn: [
      "Move away from snake",
      "Keep victim calm and still",
      "Immobilize bitten limb",
      "Remove jewelry before swelling",
      "Call 123 immediately"
    ],
    stepsAr: [
      "ابتعد عن الثعبان",
      "أبقِ الضحية هادئاً وساكناً",
      "ثبت الطرف الملدوغ",
      "أزل المجوهرات قبل التورم",
      "اتصل بـ 123 فوراً"
    ],
    category: "bites"
  },
  {
    id: 43,
    titleEn: "Dog Bite Treatment",
    titleAr: "علاج عضة الكلب",
    descriptionEn: "First aid for dog bites",
    descriptionAr: "الإسعافات الأولية لعضات الكلاب",
    stepsEn: [
      "Clean wound with soap and water",
      "Apply pressure to stop bleeding",
      "Apply antibiotic ointment",
      "Cover with sterile bandage",
      "Seek medical care for rabies evaluation"
    ],
    stepsAr: [
      "نظف الجرح بالصابون والماء",
      "اضغط لإيقاف النزيف",
      "ضع مرهم مضاد حيوي",
      "غطِّ بضمادة معقمة",
      "اطلب رعاية طبية لتقييم داء الكلب"
    ],
    category: "bites"
  },
  {
    id: 44,
    titleEn: "Jellyfish Sting",
    titleAr: "لسعة قنديل البحر",
    descriptionEn: "Treat jellyfish stings",
    descriptionAr: "علاج لسعات قناديل البحر",
    stepsEn: [
      "Rinse with seawater, not fresh water",
      "Remove tentacles with tweezers",
      "Apply vinegar for 30 seconds",
      "Immerse in hot water 40-45°C",
      "Seek medical help for severe reactions"
    ],
    stepsAr: [
      "اشطف بماء البحر لا الماء العذب",
      "أزل المجسات بملقط",
      "ضع الخل لمدة 30 ثانية",
      "اغمر في ماء ساخن 40-45 درجة",
      "اطلب المساعدة الطبية للتفاعلات الشديدة"
    ],
    category: "bites"
  },
  {
    id: 45,
    titleEn: "Muscle Cramp Relief",
    titleAr: "تخفيف تشنج العضلات",
    descriptionEn: "Relieve painful muscle cramps",
    descriptionAr: "تخفيف تشنجات العضلات المؤلمة",
    stepsEn: [
      "Stop activity and rest",
      "Gently stretch the muscle",
      "Massage the cramped area",
      "Apply heat or cold",
      "Drink water or electrolyte drinks"
    ],
    stepsAr: [
      "أوقف النشاط واسترح",
      "مدد العضلة برفق",
      "دلك المنطقة المتشنجة",
      "ضع حرارة أو برودة",
      "اشرب ماء أو مشروبات إلكتروليت"
    ],
    category: "medical"
  }
];
