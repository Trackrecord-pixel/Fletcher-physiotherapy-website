export type BlogSection = { h2: string; body: string[]; list?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  excerpt: string;
  sections: BlogSection[];
  /** Date the article was last clinically reviewed/updated (YYYY-MM-DD). */
  updated?: string;
  /** Short Q&As shown at the end of the article and emitted as FAQPage schema. */
  faqs?: { q: string; a: string }[];
  /** Reputable references the article draws on. */
  sources?: { label: string; url: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "prehabilitation-preparing-for-surgery",
    title: "Prehabilitation: How to Prepare Your Body Before Surgery",
    description:
      "What prehabilitation is and why preparing your body before hip, knee or other surgery can lead to a faster, smoother recovery — and how physiotherapy helps.",
    date: "2026-08-05",
    readMins: 6,
    excerpt:
      "The fitter you go into surgery, the better you tend to come out. Here's how 'prehab' can set you up for a smoother recovery.",
    sections: [
      {
        h2: "What is prehabilitation?",
        body: [
          "Prehabilitation — or 'prehab' — is the physiotherapy you do before an operation to get your body as strong and ready as possible. It is the mirror image of rehabilitation, and for planned surgery such as a hip or knee replacement, it can make a real difference to your recovery.",
          "The principle is simple: the fitter, stronger and more prepared you are going into surgery, the better placed you are to recover well afterwards.",
        ],
      },
      {
        h2: "Why it helps",
        body: [
          "Surgery and the rest that follows can quickly reduce strength and fitness. Building a buffer beforehand means you have more to draw on during recovery, and often regain your independence sooner.",
          "Prehab also gives you a head start on the exercises you will need afterwards, so they are already familiar when it counts.",
        ],
      },
      {
        h2: "What prehab involves",
        body: [
          "A prehab program is tailored to you and your planned surgery. It typically includes strengthening the muscles around the affected joint, general conditioning, and practising the movements and techniques you will use during recovery — such as using a walking aid or getting in and out of bed safely.",
          "It is also a chance to prepare your home and plan ahead, so everything is set up for a smooth return.",
        ],
      },
      {
        h2: "Preparing your home and mind",
        body: [
          "Simple changes — a firm chair, a clear path to the bathroom, items within easy reach — make the early recovery days much easier. Knowing what to expect also reduces anxiety, which itself supports a better recovery.",
          "A physiotherapist can help you plan all of this in advance, so nothing is left to the last minute.",
        ],
      },
      {
        h2: "How home physiotherapy helps",
        body: [
          "Home visit prehab is convenient and practical — your physiotherapist can prepare you and your home at the same time, in the environment you will actually recover in. It is especially valuable if travelling is already difficult before surgery.",
          "Fletcher Physiotherapy provides prehabilitation and post-operative rehabilitation across Newcastle and Lake Macquarie. To prepare for upcoming surgery, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-for-dizziness-and-vertigo",
    title: "Physiotherapy for Dizziness and Vertigo",
    description:
      "How physiotherapy helps with dizziness and vertigo, including common causes like BPPV, and why treatment can bring fast relief for many people.",
    date: "2026-08-04",
    readMins: 6,
    excerpt:
      "Dizziness and vertigo are unsettling and increase falls risk — but many causes respond quickly to the right physiotherapy. Here's how.",
    sections: [
      {
        h2: "Dizziness is common — and often treatable",
        body: [
          "Dizziness and vertigo — the sensation that you or the room is spinning — are common, especially with age, and they can be frightening. They also increase the risk of falls, so they are worth taking seriously.",
          "The encouraging news is that many causes of dizziness respond very well to physiotherapy, sometimes with rapid improvement.",
        ],
      },
      {
        h2: "A common cause: BPPV",
        body: [
          "One of the most common causes of vertigo is a condition called BPPV, where tiny crystals in the inner ear move out of place and confuse your balance system, triggering brief bouts of spinning — often when rolling over in bed or looking up.",
          "BPPV can usually be assessed and treated with specific, gentle head-position techniques that reposition the crystals — many people notice a marked improvement quickly.",
        ],
      },
      {
        h2: "Other causes and vestibular rehabilitation",
        body: [
          "Not all dizziness is BPPV. Some people have ongoing balance or inner-ear issues that benefit from vestibular rehabilitation — a program of specific exercises that retrains the balance system over time.",
          "A physiotherapist assesses which type of dizziness you have and tailors treatment accordingly, rather than applying a one-size-fits-all approach.",
        ],
      },
      {
        h2: "Why it matters for falls",
        body: [
          "Dizziness makes falls more likely, and the fear it creates can lead people to move less and lose strength. Treating the dizziness, and rebuilding steady confident movement, tackles both the cause and its knock-on effects.",
          "If dizziness is new, severe, or comes with other symptoms such as weakness or trouble speaking, seek medical attention promptly to rule out other causes.",
        ],
      },
      {
        h2: "Care in your own home",
        body: [
          "For people whose dizziness makes travel difficult, home visit physiotherapy is ideal — assessment and treatment come to you, safely, in your own space.",
          "Fletcher Physiotherapy assesses and treats dizziness and balance problems across Newcastle and Lake Macquarie. To arrange a visit, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-for-neck-pain-and-posture",
    title: "What Helps Neck Pain? A Physiotherapist's Guide to Relief and Posture",
    description:
      "What helps with neck pain? Simple, evidence-informed steps that ease most neck pain, when to get it checked, and how physiotherapy and posture habits help.",
    date: "2026-08-03",
    readMins: 5,
    excerpt:
      "Neck pain is common and often linked to posture and daily habits. Here's how physiotherapy helps you find lasting relief.",
    updated: "2026-10-03",
    faqs: [
      { q: "How long does neck pain usually last?", a: "Most neck pain improves within a few weeks. If it is severe, getting worse, not easing after a few weeks, or affecting your sleep and daily life, see your GP or a physiotherapist." },
      { q: "Should I wear a neck brace or collar?", a: "Generally no. Neck supports aren't considered useful for most neck pain and should only be used briefly if a health professional has advised it." },
      { q: "When is neck pain an emergency?", a: "Call 000 if neck pain follows a traumatic accident or comes with chest pain, shortness of breath or sweating. Seek urgent care if it comes with fever, changes in vision or hearing, pins and needles, numbness or weakness in the arms or legs, dizziness, confusion, or bladder or bowel problems." },
      { q: "Can physiotherapy help neck pain?", a: "Treatment from a physiotherapist may help you recover more quickly. A physio can assess what's driving your pain, give you targeted exercises and practical advice, and check for less common causes that need medical review." },
    ],
    sources: [
      { label: "Healthdirect — Neck pain", url: "https://www.healthdirect.gov.au/neck-pain" },
    ],
    sections: [
      {
        h2: "Quick answer: what helps with neck pain?",
        body: [
          "Most neck pain is not serious and settles within a few weeks. Things that commonly help:",
        ],
        list: [
          "Keep your neck moving gently and naturally — avoid things that clearly make it worse",
          "Change position often and take regular breaks from screens, reading and driving",
          "Heat packs or ice packs for short-term relief of stiffness and pain",
          "A pillow that keeps your head and neck in a natural position (not too high)",
          "Setting your screen at eye level and adjusting your chair or car seat",
          "Simple exercises from a physiotherapist or GP",
          "Managing stress, which often shows up as neck and shoulder tension",
          "Asking your pharmacist or GP about suitable pain relief",
        ],
      },
      {
        h2: "Why the neck is so often sore",
        body: [
          "Neck pain is one of the most common complaints people bring to physiotherapy. It can come on gradually or suddenly, and is often linked to posture, muscle tension, and long periods in one position — such as reading, screen time or sleeping awkwardly.",
          "Most neck pain is not serious and settles well with the right approach, though understanding what is driving it helps you address it for good.",
        ],
      },
      {
        h2: "The role of posture",
        body: [
          "Posture matters, but not in the way many people think. There is no single 'perfect' posture — the real problem is usually staying in any one position for too long. The best posture is often simply your next one.",
          "Building in regular movement breaks, and setting up your chair, screen and bed to support a relaxed position, takes strain off the neck through the day.",
        ],
      },
      {
        h2: "How physiotherapy helps",
        body: [
          "Physiotherapy for neck pain typically combines hands-on treatment to ease symptoms, gentle exercises to restore movement and strength, and practical advice on posture and daily habits. Keeping the neck moving, rather than protecting it rigidly, is usually key.",
          "A physiotherapist also checks for the less common causes of neck pain, so you can be reassured about what is and isn't going on.",
        ],
      },
      {
        h2: "Simple things that help",
        body: [
          "Gentle range-of-movement exercises, regular position changes, a supportive pillow, and managing stress — which often shows up as neck tension — can all make a real difference between appointments.",
          "If neck pain is severe, follows an injury, or comes with pins and needles, weakness or dizziness, have it assessed promptly.",
        ],
      },
      {
        h2: "Care that comes to you",
        body: [
          "Home visit physiotherapy lets your physiotherapist see your actual chair, desk and sleeping set-up, and tailor advice to your real environment — something a clinic visit can't offer.",
          "Fletcher Physiotherapy treats neck pain and posture-related problems across Newcastle and Lake Macquarie. To book an assessment, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "staying-motivated-with-home-exercises",
    title: "How to Stay Motivated with Your Home Exercise Program",
    description:
      "Practical, realistic strategies to stay motivated and consistent with your home exercise program — and actually get the results you're after.",
    date: "2026-08-02",
    readMins: 5,
    excerpt:
      "The best exercise program only works if you do it. Here are realistic ways to stay motivated and make your exercises a lasting habit.",
    sections: [
      {
        h2: "Consistency beats intensity",
        body: [
          "The most effective exercise program is not the hardest one — it is the one you actually keep doing. A little, done regularly, achieves far more than occasional bursts of effort followed by long gaps.",
          "So the real skill is not willpower on any single day, but building exercise into your life in a way that sticks.",
        ],
      },
      {
        h2: "Make it easy to start",
        body: [
          "Attach your exercises to something you already do — after breakfast, before your morning tea, during the ads on television. Linking a new habit to an existing routine is one of the most reliable ways to make it stick.",
          "Keep any equipment out and visible, and start with a version so easy you can't say no. Momentum builds from there.",
        ],
      },
      {
        h2: "Track it and celebrate progress",
        body: [
          "Ticking off a simple calendar or chart is surprisingly motivating — it makes your effort visible and builds a streak you won't want to break. Notice and celebrate the everyday wins, like rising from a chair more easily or walking further.",
          "Progress in strength and balance is often gradual, so having a record helps you see how far you have come.",
        ],
      },
      {
        h2: "Plan for the off days",
        body: [
          "Everyone misses days — the key is not to let one missed day become a missed week. Have a shorter 'minimum' version of your program for busy or low-energy days, so you keep the habit alive even when life gets in the way.",
          "Be kind to yourself; consistency over months matters far more than any single day.",
        ],
      },
      {
        h2: "How a physiotherapist keeps you on track",
        body: [
          "A physiotherapist builds a program suited to your goals and ability, progresses it as you improve, and provides the accountability and encouragement that make a real difference. Regular check-ins keep exercises effective and interesting.",
          "Fletcher Physiotherapy supports people to stay strong and independent at home across Newcastle and Lake Macquarie. To get started, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "staying-active-with-arthritis",
    title: "Staying Active with Arthritis",
    description:
      "How to stay active and manage arthritis pain through movement — why exercise helps, what kind is best, and how physiotherapy keeps you moving.",
    date: "2026-08-02",
    readMins: 6,
    excerpt:
      "It feels natural to rest a sore, stiff joint — but with arthritis, the right movement is often the best medicine. Here's how to stay active safely.",
    sections: [
      {
        h2: "Movement, not rest, is the key",
        body: [
          "When a joint is sore and stiff, resting it feels like the sensible thing to do. But with arthritis, prolonged rest usually makes things worse — joints get stiffer, muscles weaken, and everyday tasks become harder.",
          "The evidence is clear that appropriate, regular movement reduces arthritis pain, improves function and helps you stay independent. The trick is finding the right type and amount for you.",
        ],
      },
      {
        h2: "Why exercise helps arthritic joints",
        body: [
          "Movement nourishes the joint, keeps the surrounding muscles strong enough to support and cushion it, and maintains the range of movement you need for daily life. Strong muscles around a joint act like shock absorbers, easing the load the joint has to carry.",
          "Exercise also helps with weight management, mood and sleep — all of which influence how much pain you feel day to day.",
        ],
      },
      {
        h2: "What kind of exercise is best",
        body: [
          "A good arthritis program usually blends gentle strengthening, movement to maintain flexibility, and low-impact activity such as walking, cycling or water-based exercise. The best program is one tailored to your joints, your ability and the activities you want to keep doing.",
          "Start gently and build up gradually. Some mild discomfort during and after exercise is normal; sharp or lasting pain is a sign to adjust — which is where guidance helps.",
        ],
      },
      {
        h2: "Managing flare-ups",
        body: [
          "Arthritis symptoms come and go. During a flare, it is fine to reduce the intensity of your activity, but try not to stop moving altogether — gentle movement often helps settle things faster than complete rest.",
          "Having a plan for flare-ups, worked out in advance with your physiotherapist, takes the worry out of the bad days.",
        ],
      },
      {
        h2: "How physiotherapy helps",
        body: [
          "A physiotherapist assesses your joints and builds a program that strengthens and mobilises safely, without overloading painful joints. They also provide hands-on treatment, advice on pacing and activity, and reassurance about what is safe.",
          "Fletcher Physiotherapy helps people manage arthritis and stay active in their own homes across Newcastle and Lake Macquarie. To arrange a visit, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-for-parkinsons-staying-mobile",
    title: "Physiotherapy for Parkinson's: Staying Mobile and Steady",
    description:
      "How physiotherapy helps people with Parkinson's disease stay mobile, balanced and confident — including exercise, walking and falls prevention.",
    date: "2026-07-30",
    readMins: 6,
    excerpt:
      "Physiotherapy plays a central role in living well with Parkinson's — helping maintain movement, balance and confidence. Here's how.",
    sections: [
      {
        h2: "Why movement matters in Parkinson's",
        body: [
          "Parkinson's disease affects movement, balance and coordination, and its impact can change over time. Alongside medical management, physiotherapy plays a central role in helping people stay mobile, steady and independent for as long as possible.",
          "Research consistently shows that regular, targeted exercise helps maintain function and quality of life in Parkinson's — it is one of the most valuable things a person can do.",
        ],
      },
      {
        h2: "Keeping movement big and confident",
        body: [
          "Parkinson's tends to make movements smaller and slower over time. Physiotherapy uses specific strategies and exercises to keep movements large, deliberate and confident — from walking with fuller steps to turning safely.",
          "Practising these regularly helps them carry over into everyday tasks like getting dressed, standing up and moving around the home.",
        ],
      },
      {
        h2: "Walking and freezing",
        body: [
          "Many people with Parkinson's experience changes in their walking, and some have episodes of 'freezing', where the feet feel stuck. Physiotherapists teach practical cueing strategies — using rhythm, visual targets or counting — that can help get moving again safely.",
          "Working on walking in the real environment where it happens, such as doorways and hallways at home, makes these strategies especially useful.",
        ],
      },
      {
        h2: "Balance and falls prevention",
        body: [
          "Balance changes and an increased risk of falls are common in Parkinson's. A physiotherapist assesses your balance, builds a tailored program to improve it, and reviews hazards in your home to reduce risk.",
          "Just as importantly, this work rebuilds confidence, so fear of falling does not lead to doing less and losing more.",
        ],
      },
      {
        h2: "Care in your own home",
        body: [
          "Home visit physiotherapy is particularly helpful in Parkinson's, because therapy happens in the exact setting where movement challenges occur, and there is no tiring travel involved. Programs can be adjusted as needs change over time.",
          "Fletcher Physiotherapy supports people living with Parkinson's across Newcastle and Lake Macquarie. To arrange a home visit, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "understanding-chronic-pain",
    title: "Understanding Chronic Pain: Why It Persists and What Helps",
    description:
      "A clear, reassuring guide to chronic pain — why pain can persist after healing, and how an active, evidence-based approach helps you move and live better.",
    date: "2026-07-24",
    readMins: 7,
    excerpt:
      "Chronic pain is real, common and treatable — but it works differently from short-term pain. Understanding it is the first step to managing it well.",
    sections: [
      {
        h2: "Pain that outlasts healing",
        body: [
          "Most pain is short-lived: you are injured, it hurts, you heal, and the pain fades. Chronic pain is different — it persists beyond the normal healing time, sometimes for months or years, and does not always reflect ongoing damage.",
          "This does not mean the pain is imagined. Chronic pain is very real. But understanding that persistent pain and tissue damage are not the same thing is often the first step towards managing it well.",
        ],
      },
      {
        h2: "Why pain can persist",
        body: [
          "Over time, the nervous system can become more sensitive, so it produces pain more easily — a bit like an alarm system set to be over-protective. Stress, poor sleep, worry and long periods of inactivity can all turn that sensitivity up.",
          "The encouraging side of this is that a sensitised system can also be gradually calmed, which is exactly what a good pain-management approach aims to do.",
        ],
      },
      {
        h2: "Why movement helps",
        body: [
          "It is natural to avoid movement that hurts, but with chronic pain, too much avoidance usually makes things worse — the body becomes weaker and more sensitive. Gentle, graded activity helps retrain the system, rebuild capacity and restore confidence.",
          "The aim is not to push through severe pain, but to build up steadily at a manageable level — a process known as pacing.",
        ],
      },
      {
        h2: "A whole-person approach",
        body: [
          "Because chronic pain is influenced by sleep, stress, mood and activity, the most effective care addresses more than the sore area alone. Education, graded exercise, pacing and simple lifestyle strategies together tend to work far better than any single treatment.",
          "Understanding your own pain — what is happening and why — is itself a powerful part of treatment, reducing fear and putting you back in control.",
        ],
      },
      {
        h2: "How a pain physiotherapist can help",
        body: [
          "A physiotherapist with pain-management training helps you understand your pain, build a graded plan to move and do more, and address the factors keeping the system sensitive. The goal is a life less limited by pain, not just a short-term fix.",
          "Fletcher Physiotherapy is led by an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management), providing this care in your own home across Newcastle and Lake Macquarie. To arrange a visit, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "knee-replacement-recovery-what-to-expect",
    title: "What to Expect After a Knee Replacement: Recovery Timeline & Rehab",
    description:
      "What to expect after knee replacement surgery — your hospital stay, the first weeks, walking aids, swelling, warning signs and how physiotherapy helps you recover.",
    date: "2026-08-03",
    readMins: 7,
    excerpt:
      "A knee replacement can help you get back to a more comfortable, active life — but the result depends on your rehab. Here's what to expect, and how to recover well.",
    updated: "2026-10-03",
    faqs: [
      { q: "How long does it take to recover from a knee replacement?", a: "Most people's strength and flexibility recover gradually over about 12 months, with the biggest changes in the first few months. Doing your exercises consistently helps your recovery." },
      { q: "How long will I need a walking aid after knee replacement?", a: "Most people need a cane, crutches or a walking frame for the first few weeks. Your physiotherapist will guide when it's safe to reduce or stop using it." },
      { q: "Is it normal for my knee to be swollen weeks after surgery?", a: "Some swelling is expected and can last for weeks. Elevation, gentle movement and your team's advice help. If swelling is sudden, worsening, or your calf is red and painful, seek urgent medical review." },
      { q: "Can I do knee replacement rehab at home?", a: "Yes. Home visit physiotherapy is a practical option when travel is uncomfortable. See also our article on physiotherapy after a knee replacement for what a rehab program involves." },
    ],
    sources: [
      { label: "Healthdirect — Knee replacement", url: "https://www.healthdirect.gov.au/knee-replacement" },
    ],
    sections: [
      {
        h2: "Quick answer: what to expect after a knee replacement",
        body: [
          "Everyone recovers at their own pace, and your surgeon's instructions come first. As a general guide:",
        ],
        list: [
          "Most people leave hospital 1–4 days after surgery",
          "You'll probably use a walking frame, crutches or a stick for the first few weeks",
          "You'll be given an exercise and physiotherapy program — doing it consistently matters",
          "Swelling and stiffness are normal and can last for weeks",
          "Strength and flexibility usually keep improving gradually over about 12 months",
          "Go to the emergency department if your calf becomes red, swollen or painful, or you become short of breath or have chest pain — these can be signs of a blood clot",
        ],
      },
      {
        h2: "The operation is only half the job",
        body: [
          "A knee replacement can relieve years of pain and restore your ability to walk, garden and get out and about. But the quality of that outcome depends heavily on the rehabilitation you do afterwards — especially regaining movement and strength in the first few months.",
          "Recovery follows broad stages, though everyone heals at their own pace. Use this as a guide, and always follow your surgeon and physiotherapist's specific advice.",
        ],
      },
      {
        h2: "The first two weeks",
        body: [
          "Early on, the priorities are managing pain and swelling, moving safely with your walking aid, and beginning gentle exercises to restore the knee's bend and straighten it fully. Regaining that range of movement early is one of the most important parts of the whole recovery.",
          "Swelling is expected and can persist for weeks. Elevation, gentle movement and following your team's advice all help keep it under control.",
        ],
      },
      {
        h2: "Weeks 2 to 6",
        body: [
          "As pain eases, you progress your exercises, build strength in the thigh and hip muscles that support the knee, and gradually walk further. Many people reduce their reliance on a walking aid during this stage, guided by their physiotherapist.",
          "Consistency matters here more than intensity — little and often, done well, beats occasional hard sessions.",
        ],
      },
      {
        h2: "Weeks 6 to 12 and beyond",
        body: [
          "Over the following weeks, the focus shifts to full strength, balance and returning to the activities you value. Many people continue to see improvement in comfort and function for up to a year after surgery.",
          "The single biggest mistake is stopping your program once the knee feels better. Continuing to strengthen through this phase is what secures a strong, lasting result.",
        ],
      },
      {
        h2: "Regaining your knee bend",
        body: [
          "Restoring how far your knee can bend and straighten is a key goal, because it affects everything from walking to climbing stairs to getting in and out of a car. Gentle, regular movement — guided so you push at the right rate without overdoing it — is the way to achieve it.",
          "If your movement seems to be stalling, tell your physiotherapist early; it is far easier to address sooner than later.",
        ],
      },
      {
        h2: "How home physiotherapy helps",
        body: [
          "Getting to a clinic after knee surgery is tiring and sometimes painful, which is why home visit physiotherapy is so valuable. Your physiotherapist can guide your exercises, check your progress and help you regain confidence with stairs and daily tasks — all in your own home.",
          "Fletcher Physiotherapy supports knee replacement recovery across Newcastle and Lake Macquarie. To arrange in-home rehabilitation, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "sciatica-how-physiotherapy-can-help",
    title: "Sciatica: How Physiotherapy Can Help",
    description:
      "What sciatica is, what causes it, and how physiotherapy helps relieve the pain and get you moving again — plus when to seek further help.",
    date: "2026-07-31",
    readMins: 6,
    excerpt:
      "Sciatica can be painful and worrying, but most cases settle well with the right approach. Here's how physiotherapy helps.",
    sections: [
      {
        h2: "What sciatica actually is",
        body: [
          "Sciatica describes pain that travels along the path of the sciatic nerve — from the lower back, through the buttock and down the leg. It is a symptom rather than a diagnosis, usually caused by irritation or compression of the nerve where it leaves the spine.",
          "The pain can be sharp, burning or shooting, and is sometimes accompanied by pins and needles or numbness in the leg. Understandably it can be alarming, but the reassuring news is that most cases improve well over time with the right approach.",
        ],
      },
      {
        h2: "Common causes",
        body: [
          "Sciatica is often related to changes in the lower back, such as a disc bulge or age-related narrowing that irritates the nerve. Prolonged sitting, sudden loading or a period of low activity can all contribute to a flare-up.",
          "Because the causes vary, a proper assessment matters — it guides which movements and treatments will help you specifically, rather than a one-size-fits-all approach.",
        ],
      },
      {
        h2: "How physiotherapy helps",
        body: [
          "Physiotherapy for sciatica typically combines hands-on treatment to ease symptoms, specific movements and exercises to reduce nerve irritation, and a graded return to activity. Staying gently active — rather than resting completely — is usually one of the most helpful things you can do.",
          "Just as important is education: understanding what is happening, what is safe, and how to manage a flare-up reduces fear and helps you recover with confidence.",
        ],
      },
      {
        h2: "Movement is medicine",
        body: [
          "It is natural to want to rest when your leg hurts, but too much rest often prolongs sciatica. A physiotherapist helps you find the movements that settle your symptoms and gradually rebuild your tolerance for sitting, walking and daily tasks.",
          "Progress is not always linear — some days are better than others — but a clear plan keeps you moving in the right direction.",
        ],
      },
      {
        h2: "When to seek further help",
        body: [
          "Most sciatica settles, but certain symptoms warrant prompt medical review — including severe or rapidly worsening weakness in the leg, or any changes to bladder or bowel control. If you experience these, seek medical attention without delay.",
          "For ongoing or recurrent sciatica, a physiotherapy assessment is a sound first step to understand your particular case and get moving again.",
        ],
      },
      {
        h2: "Care in your own home",
        body: [
          "For people whose sciatica makes travelling and sitting in a waiting room difficult, home visit physiotherapy is a practical option — assessment and treatment come to you, in the setting where your symptoms actually occur.",
          "Fletcher Physiotherapy treats sciatica and lower back pain across Newcastle and Lake Macquarie. To book an assessment, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prevent-falls-at-home-room-by-room",
    title: "How to Prevent Falls at Home: A Physio's Room-by-Room Guide",
    description:
      "How to prevent falls at home: a physiotherapist's room-by-room checklist for older adults, plus the strength and balance work that lowers falls risk.",
    date: "2026-08-04",
    readMins: 7,
    excerpt:
      "Most falls at home are preventable. Here's a practical, room-by-room guide to making your home safer — and staying steady on your feet.",
    updated: "2026-10-03",
    faqs: [
      { q: "What is the most common cause of falls at home?", a: "There is rarely a single cause. Falls usually come from a mix of factors — weaker muscles or balance, medicines, eyesight, dizziness on standing — combined with hazards such as poor lighting, slippery floors, rugs and clutter. That's why the best prevention addresses both your home and your body." },
      { q: "Which room is the most dangerous for falls?", a: "The bathroom is often the highest-risk room because of wet, slippery surfaces and the need to step in and out of the shower or bath. Stairs and the night-time route from bed to toilet are also common trouble spots." },
      { q: "Can exercise really reduce falls?", a: "Yes. There is evidence that exercises which improve balance and the ability to move can help prevent harm from falls. A physiotherapist can tailor a strength and balance program to your level so it is both safe and challenging enough to help." },
      { q: "Should I see a doctor after a fall if I'm not hurt?", a: "Yes. Speak with your GP after any fall, even if you feel fine — a fall can be a sign of a new medical problem, a medicine side effect, balance problems or muscle weakness." },
    ],
    sources: [
      { label: "Healthdirect — Older people and falls", url: "https://www.healthdirect.gov.au/falls" },
    ],
    sections: [
      {
        h2: "Quick answer: how to prevent falls at home",
        body: [
          "Most falls in older people happen during everyday activities, and around half happen in and around the home. The most effective approach combines a safer home with keeping your body strong and steady. In short:",
        ],
        list: [
          "Remove trip hazards — loose rugs, clutter and cords — and keep walkways clear",
          "Improve lighting, especially hallways, stairs and the route to the toilet at night",
          "Use non-slip mats and grab rails in the bathroom and handrails on stairs",
          "Wear well-fitting, supportive shoes rather than loose slippers or socks",
          "Stand up slowly to avoid light-headedness",
          "Keep active and do regular strength and balance exercises",
          "Ask your GP or pharmacist to review medicines that cause drowsiness or dizziness",
          "Have your eyesight checked regularly",
          "See your GP after any fall, even if you weren't hurt",
        ],
      },
      {
        h2: "Why home falls matter so much",
        body: [
          "Falls are the number one cause of accidental injury in older Australians, and around half of all falls happen in and around the home. A single fall can undermine confidence, reduce activity and start a cycle that quietly erodes independence.",
          "The good news is that there is a lot you can do. A combination of small changes around the home and targeted strength and balance work can lower your risk — and help rebuild the confidence to keep moving.",
        ],
      },
      {
        h2: "Entrance, hallways and stairs",
        body: [
          "Clear walkways of clutter, cords and loose mats, and make sure every hallway and stairwell is well lit — a bright, easily reached light switch at both ends of the stairs makes a real difference at night.",
          "Sturdy handrails on both sides of any stairs give you something reliable to hold. If steps are hard to see, a strip of contrasting colour on the edge helps your eyes judge the depth.",
        ],
      },
      {
        h2: "The bathroom",
        body: [
          "The bathroom is one of the highest-risk rooms because of wet, slippery surfaces. Non-slip mats inside and outside the shower, and grab rails near the toilet and in the shower, provide secure support at the moments you need it most.",
          "A shower chair and a hand-held shower head let you wash safely while seated, and raising a low toilet with a raised seat makes standing up far easier on the knees and hips.",
        ],
      },
      {
        h2: "The kitchen and living areas",
        body: [
          "Keep everyday items — cups, plates, the kettle — within easy reach so you are not stretching or climbing. Wipe up spills straight away, and avoid walking in socks on smooth floors.",
          "In living areas, arrange furniture so there is a clear, wide path to walk through, and choose a chair with armrests and a firm seat that is easy to rise from. Remove or secure rugs that can slide or curl at the edges.",
        ],
      },
      {
        h2: "The bedroom",
        body: [
          "A lamp within arm's reach of the bed means you never have to cross a dark room. Keep a clear path to the bathroom, and consider a nightlight along the route.",
          "Sit on the edge of the bed for a moment before standing, especially at night — this gives your body time to adjust and reduces the dizziness that can come from standing up quickly.",
        ],
      },
      {
        h2: "The part a checklist can't fix: strength and balance",
        body: [
          "Home safety changes remove hazards, but they can't rebuild the strength and balance that keep you steady in the first place. That is where physiotherapy makes the biggest difference — through a balance assessment, a tailored strength and balance program, and gait and confidence training.",
          "At Fletcher Physiotherapy we assess falls risk in your own home, where the hazards actually are, and build a practical plan around your goals. If you or a loved one has had a fall, or simply feels less steady than before, a home visit is a simple, effective first step. Call us on 0404 791 756 to arrange one.",
        ],
      },
    ],
  },
  {
    slug: "hip-replacement-recovery-week-by-week",
    title: "Hip Replacement Recovery: A Week-by-Week Guide",
    description:
      "What to expect after a hip replacement, week by week — from the first days home to returning to normal activity — and how home physiotherapy supports each stage.",
    date: "2026-08-01",
    readMins: 8,
    excerpt:
      "Recovering from a hip replacement is a journey with clear stages. Here's what to expect week by week, and how to rebuild strength safely at home.",
    sections: [
      {
        h2: "Recovery is a process, not an event",
        body: [
          "A hip replacement can transform your quality of life, but the operation is only the beginning. The strength, movement and confidence you regain afterwards depend heavily on your rehabilitation — and most of that happens at home.",
          "Everyone recovers at a slightly different pace, so use the timeline below as a general guide rather than a fixed schedule. Always follow the specific advice of your surgeon and treating team.",
        ],
      },
      {
        h2: "The first days home",
        body: [
          "In the first days after discharge, the focus is on moving safely, managing swelling and pain, and getting in and out of bed and chairs without straining the new hip. Gentle, frequent movement is encouraged — short, regular walks with your aid are better than long ones.",
          "This is also when setting up your home matters most: a firm chair with armrests, a raised toilet seat, and clear walkways all make everyday movement safer while your hip is healing.",
        ],
      },
      {
        h2: "Weeks 1 to 2",
        body: [
          "Over the first fortnight, the goal is to restore basic movement and reduce reliance on your walking aid as your surgeon allows. Gentle exercises to activate the hip and thigh muscles help reduce stiffness and rebuild control.",
          "Swelling is normal at this stage. Elevating the leg and following your team's advice on ice and activity helps manage it, while regular gentle movement keeps circulation healthy.",
        ],
      },
      {
        h2: "Weeks 3 to 6",
        body: [
          "As pain settles, you can usually begin more purposeful strengthening and progress your walking distance. Many people move from a frame to a stick around this time, though always at the pace your surgeon and physiotherapist advise.",
          "This is the stage where guided physiotherapy pays off most — progressing your exercises at the right rate keeps you moving forward without overloading the healing joint.",
        ],
      },
      {
        h2: "Weeks 6 to 12",
        body: [
          "By six to twelve weeks, most people are walking more freely and returning to everyday activities. The emphasis shifts to rebuilding full strength, balance and endurance so you can return to the things you enjoy with confidence.",
          "Continuing your exercise program through this phase — rather than stopping once you feel better — is what locks in a strong, lasting result.",
        ],
      },
      {
        h2: "Precautions worth remembering",
        body: [
          "Depending on your surgical approach, your surgeon may ask you to avoid certain movements in the early weeks, such as bending the hip too far or crossing your legs. Follow this advice carefully, and check before returning to driving, or to more demanding activity.",
          "If anything feels wrong — increasing pain, redness, heat or swelling — contact your surgical team promptly.",
        ],
      },
      {
        h2: "How home physiotherapy supports your recovery",
        body: [
          "Home visit physiotherapy is especially valuable after a hip replacement, when travelling to a clinic is difficult and tiring. Your physiotherapist can assess how you move in your own home, progress your program safely, and help you regain independence with everyday tasks.",
          "At Fletcher Physiotherapy we support people through hip replacement recovery across Newcastle and Lake Macquarie. To arrange in-home rehabilitation, call 0404 791 756.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-walking-aid",
    title: "Cane or Walker? How to Choose the Right Walking Aid",
    description:
      "Do you need a cane, walking frame or rollator? A physio's guide to choosing the right walking aid, who assesses you for one, correct height and safe use.",
    date: "2026-07-28",
    readMins: 6,
    excerpt:
      "The right walking aid can restore confidence and independence — the wrong one can increase your falls risk. Here's how to choose well.",
    updated: "2026-10-03",
    faqs: [
      { q: "Who assesses whether someone needs a walker or rollator?", a: "Walking aids can be assessed for and prescribed by physiotherapists, occupational therapists, registered nurses, GPs and specialists. A physiotherapist typically checks your strength, balance, walking pattern and home environment, then recommends the type and sets the correct height." },
      { q: "How do I know what height my walking aid should be?", a: "As a rule of thumb, with your arms relaxed by your sides the handle should sit around the crease of your wrist, giving a slight bend at the elbow when you hold it. Because the right height and type depend on you, it's best checked in person." },
      { q: "Is a rollator or a walking frame safer?", a: "Neither is safer for everyone. A frame gives more stability because you lift and place it, while a rollator is easier for continuous walking but offers less bracing support and relies on using the brakes well. The safest aid is the one matched to your balance and needs." },
      { q: "Can I get help paying for a walking aid?", a: "Possibly. Depending on your situation, walking aids may be funded through Support at Home's Assistive Technology and Home Modifications scheme, the NDIS, or DVA's Rehabilitation Appliances Program. You can also buy or hire aids. Ask your health professional or provider about what applies to you." },
    ],
    sources: [
      { label: "Healthdirect — Mobility aids", url: "https://www.healthdirect.gov.au/mobility-aids" },
      { label: "My Aged Care — Support at Home program", url: "https://www.myagedcare.gov.au/support-home-program" },
    ],
    sections: [
      {
        h2: "Quick answer: do I need a cane or a walker?",
        body: [
          "As a general guide — but get assessed before you buy:",
        ],
        list: [
          "Walking stick or cane: you need a little extra balance or support and have reasonable strength",
          "Quad (four-point) cane: you need more support than a single stick on one side",
          "Walking frame (no wheels): you need significant support, often for shorter distances indoors",
          "Rollator (wheeled walker with brakes and seat): you have reasonable balance, want to walk further, and can manage the brakes reliably",
          "Not sure, or you've had a fall? Ask a physiotherapist, occupational therapist or your GP to assess you first",
        ],
      },
      {
        h2: "The right aid helps; the wrong one hurts",
        body: [
          "A well-chosen, well-fitted walking aid can restore confidence, reduce falls risk and keep you active and independent. But an aid that is the wrong type or the wrong height can actually make walking less safe.",
          "That is why the choice is worth getting right — ideally with guidance from a physiotherapist who can match the aid to your strength, balance and daily needs.",
        ],
      },
      {
        h2: "When a walking aid might help",
        body: [
          "You might benefit from a walking aid if you feel unsteady, tire quickly, have had a fall or a near-fall, or are recovering from surgery or illness. An aid is not a sign of decline — it is a tool that keeps you moving safely and doing more, not less.",
          "The best aid depends on how much support you need and where you use it, so it is worth considering your whole day rather than a single situation.",
        ],
      },
      {
        h2: "Walking sticks and canes",
        body: [
          "A single-point stick suits people who need a little extra stability and balance but have reasonable strength. A four-point (quad) cane offers more support and can stand on its own.",
          "Used correctly, a stick is held in the hand opposite your weaker or sorer leg, and moves forward with that leg. Getting this pattern right makes a surprising difference to how much it helps.",
        ],
      },
      {
        h2: "Walking frames",
        body: [
          "A standard walking frame (no wheels) gives the most stability, because it is lifted and placed with each step. It suits people who need significant support and are walking shorter distances, often indoors.",
          "Because it must be lifted, a frame requires reasonable arm strength and a slower, deliberate pace — which is exactly what some people need while they rebuild confidence.",
        ],
      },
      {
        h2: "Rollators (wheeled walkers)",
        body: [
          "A rollator has wheels, hand brakes and usually a seat, making it easier to move continuously and to rest when needed. It suits people with reasonable balance who want to walk further, including outdoors.",
          "The trade-off is that a rollator offers less bracing support than a frame, so it is not right for everyone — the seat and brakes are only safe if you can manage them reliably.",
        ],
      },
      {
        h2: "Height, technique and getting it right",
        body: [
          "Whatever the aid, height matters: as a general guide, the handle should sit at wrist height when you stand tall with your arms relaxed, giving a slight, comfortable bend at the elbow. An aid set too high or too low changes your posture and reduces its benefit.",
          "A physiotherapist can assess which aid suits you, set it to the correct height, and teach you to use it safely on stairs, kerbs and different surfaces. At Fletcher Physiotherapy we do this in your own home across Newcastle and Lake Macquarie — call 0404 791 756 to arrange an assessment.",
        ],
      },
    ],
  },
  {
    slug: "how-physiotherapy-helps-older-adults-stay-independent-at-home",
    title: "How Physiotherapy Helps Older Adults Stay Independent at Home",
    description:
      "Discover how home-based physiotherapy helps older adults maintain strength, balance and mobility so they can stay safely independent at home.",
    date: "2026-05-20",
    readMins: 6,
    excerpt:
      "Staying independent at home is one of the most common wishes of older Australians. Here's how physiotherapy makes it possible.",
    sections: [
      {
        h2: "Why independence matters",
        body: [
          "For most older adults, staying in their own home is about far more than convenience — it is about dignity, identity and quality of life. Yet the gradual loss of strength, balance and mobility that can come with age often threatens that independence long before anyone realises.",
          "The encouraging news is that these changes are not inevitable, and they respond remarkably well to physiotherapy. With the right support, most older adults can maintain, and often regain, the physical capacity that independent living depends on.",
        ],
      },
      {
        h2: "Building and maintaining strength",
        body: [
          "Muscle strength is the foundation of independence. It is what allows you to rise from a chair, climb stairs, carry shopping and get up safely if you do fall. Strength naturally declines with age, but progressive exercise can slow, halt and even reverse that decline at any stage of life.",
          "A physiotherapist designs a strengthening program suited to your ability and goals, using simple equipment and everyday movements — no gym required. Delivered at home, these programs fit naturally into your routine and target the exact tasks you want to keep doing.",
        ],
      },
      {
        h2: "Improving balance and preventing falls",
        body: [
          "Falls are the number one cause of accidental injury in older Australians. Physiotherapy addresses this directly through balance training, strengthening and a review of hazards in the home — an approach can help reduce falls risk.",
          "Just as importantly, physiotherapy rebuilds the confidence to keep moving, breaking the cycle where fear of falling leads to inactivity, which then weakens the body further.",
        ],
      },
      {
        h2: "Care that comes to you",
        body: [
          "Home visit physiotherapy removes the barriers of travel, parking and waiting rooms, and allows treatment in the environment where your challenges actually happen. That makes it especially valuable for older adults, and means the gains you make translate directly into real, everyday independence.",
          "If you or a loved one wants to stay strong, steady and independent at home, home-based physiotherapy is one of the most effective steps you can take.",
        ],
      },
    ],
  },
  {
    slug: "home-care-package-physiotherapy-explained",
    title: "Home Care Package Physiotherapy Explained (Now Support at Home)",
    description:
      "Home Care Packages were replaced by Support at Home on 1 November 2025. How physiotherapy is funded now, what it can include and how to arrange it at home.",
    date: "2026-05-12",
    readMins: 5,
    excerpt:
      "Home Care Packages have become Support at Home. Here's a plain-language explanation of how physiotherapy fits in now.",
    sections: [
      {
        h2: "Home Care Packages are now Support at Home",
        body: [
          "On 1 November 2025 the Australian Government's Support at Home program replaced the Home Care Packages (HCP) Program and the Short-Term Restorative Care Programme. If you already had a Home Care Package, you moved across to Support at Home without needing a new assessment, and your provider will have contacted you about a new agreement.",
          "Under Support at Home, clinical care such as physiotherapy is one of the services available when it meets your assessed needs and goals — for example improving mobility, building strength, managing pain or reducing falls risk. Support at Home also includes a Restorative Care Pathway focused on maintaining and improving independence through allied health.",
        ],
      },
      {
        h2: "How it works",
        body: [
          "Your Support at Home services are arranged by a registered provider who works with you to decide how your budget is used. If you would like physiotherapy included, you can discuss it with your provider or care manager, who can arrange it as part of your plan.",
          "A mobile physiotherapy service like Fletcher Physiotherapy coordinates directly with your provider, delivers care aligned to your goals, and supplies any documentation required — making the process simple for you and your family.",
        ],
      },
      {
        h2: "What physiotherapy can include",
        body: [
          "Under Support at Home, physiotherapy typically focuses on the things that keep you safe and independent at home.",
        ],
        list: [
          "Strength and mobility programs",
          "Balance training and falls prevention",
          "Home exercise programs",
          "Post-hospital rehabilitation",
          "Pain management",
          "Advice on equipment and home safety",
        ],
      },
      {
        h2: "Getting started",
        body: [
          "If you receive Support at Home (or previously had a Home Care Package) and would like physiotherapy at home, contact us and we will help you understand your options and coordinate with your provider. If you are still waiting for an assessment or services to start, private physiotherapy is also available in the meantime. For official program details, see My Aged Care.",
        ],
      },
    ],
  },
  {
    slug: "ndis-physiotherapy-complete-guide",
    title: "NDIS Physiotherapy: A Complete Guide",
    description:
      "Everything NDIS participants and support coordinators need to know about physiotherapy under the NDIS — funding, goals, reports and in-home care.",
    date: "2026-05-04",
    readMins: 7,
    excerpt:
      "A complete guide to physiotherapy under the NDIS — how it's funded, what it involves and how to get started.",
    sections: [
      {
        h2: "Is physiotherapy covered by the NDIS?",
        body: [
          "Yes. Physiotherapy is commonly funded under the NDIS through Capacity Building – Improved Daily Living, for participants whose goals include improving movement, function and independence.",
          "Physiotherapy can be accessed by self-managed, plan-managed and agency-managed participants, and delivered in the participant's own home.",
        ],
      },
      {
        h2: "Working toward functional goals",
        body: [
          "NDIS physiotherapy is centred on function — improving your ability to do the everyday things that matter to you. That might mean walking further, transferring more safely, building strength, managing pain or participating more fully in your community.",
          "A physiotherapist assesses your current abilities and goals, then builds a program that steadily works toward greater capacity and independence, with regular review to track progress.",
        ],
      },
      {
        h2: "Reports and communication",
        body: [
          "Good NDIS physiotherapy is backed by clear documentation. Functional assessments and progress reports support plan reviews and funding requests, and give participants and their teams confidence that goals are being met.",
          "For support coordinators and plan managers, reliable communication is essential — timely responses, easy referrals and reports that are genuinely useful.",
        ],
      },
      {
        h2: "How to get started",
        body: [
          "If you are an NDIS participant, family member or support coordinator, getting started is simple: contact a provider like Fletcher Physiotherapy, share the participant's goals and funding details, and arrange an initial home assessment.",
        ],
      },
    ],
  },
  {
    slug: "5-exercises-to-reduce-falls-risk-in-seniors",
    title: "5 Exercises to Reduce Falls Risk in Seniors",
    description:
      "Five safe, effective exercises physiotherapists recommend to improve balance and strength and reduce falls risk in older adults.",
    date: "2026-04-26",
    readMins: 6,
    excerpt:
      "Simple balance and strength exercises can help reduce falls risk. Here are five physiotherapists often recommend.",
    sections: [
      {
        h2: "Why exercise prevents falls",
        body: [
          "Research is clear: progressive strength and balance exercise is one of the most effective ways to reduce falls in older adults. The exercises below are commonly recommended by physiotherapists, but always check with a professional before starting, and have support nearby for safety.",
        ],
      },
      {
        h2: "The five exercises",
        body: [
          "These exercises target the leg strength and balance that keep you steady on your feet. Start gently and build up gradually.",
        ],
        list: [
          "Sit-to-stand: rise from a sturdy chair without using your hands, then sit slowly. Builds vital leg strength.",
          "Heel-to-toe walking: walk in a straight line placing one foot directly in front of the other. Improves dynamic balance.",
          "Standing on one leg: hold a bench and balance on one foot, building up your hold time. Improves stability.",
          "Heel and toe raises: rise onto your toes, then rock back onto your heels, holding support. Strengthens ankles and calves.",
          "Side leg raises: standing and holding support, lift one leg out to the side. Strengthens the hip muscles that steady you.",
        ],
      },
      {
        h2: "Making it safe and effective",
        body: [
          "The key to falls prevention is doing the right exercises, at the right level, consistently. A physiotherapist can assess your individual risk, tailor these exercises to your ability, and progress them safely over time.",
          "For older adults, home visit physiotherapy makes this especially easy — your program is designed and supervised in the very environment where you move each day.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-during-a-home-physiotherapy-visit",
    title: "What Happens During a Home Physiotherapy Visit?",
    description:
      "Know what to expect from an in-home physiotherapy visit — from the first assessment to your personalised treatment and exercise program.",
    date: "2026-04-18",
    readMins: 5,
    excerpt:
      "Curious what a home physio visit actually involves? Here's a step-by-step look at what to expect.",
    sections: [
      {
        h2: "Before the visit",
        body: [
          "Arranging a home visit is simple. After you get in touch, we confirm a time that suits you and ask about your goals, health history and any funding such as NDIS or Support at Home. There is nothing you need to prepare beyond a comfortable space to move.",
        ],
      },
      {
        h2: "The first assessment",
        body: [
          "Your first visit begins with a thorough assessment. Your physiotherapist listens to your story, discusses your goals, and examines your movement, strength, balance and any pain or difficulty you are experiencing.",
          "Being at home is a real advantage here — your physiotherapist can see the actual stairs, chairs, rugs and spaces you use every day, and factor them into your plan.",
        ],
      },
      {
        h2: "Your treatment and program",
        body: [
          "Based on the assessment, your physiotherapist provides hands-on treatment where appropriate and begins building a personalised program. This usually combines exercises to improve strength, balance and mobility with practical strategies you can use between visits.",
          "You will finish the visit knowing exactly what to work on, and your program is reviewed and progressed over time as you improve.",
        ],
      },
      {
        h2: "Ongoing care",
        body: [
          "Follow-up visits build on your progress, adjust your program and keep you moving toward your goals. Throughout, we keep families, carers and referrers informed, so everyone supporting you is on the same page.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-after-hospital-discharge",
    title: "Rehab After Hospital Discharge: Your Options and How Home Physio Helps",
    description:
      "Coming home from hospital? The main rehabilitation options after discharge — inpatient, outpatient and home-based — and how home physiotherapy supports recovery.",
    date: "2026-04-10",
    readMins: 5,
    excerpt:
      "Coming home from hospital is a vulnerable time. Here are your rehab options after discharge, and how physiotherapy at home helps you recover safely.",
    updated: "2026-10-03",
    faqs: [
      { q: "How do I choose the best rehab after leaving hospital?", a: "Start by asking your hospital team or discharge planner what they recommend for your situation. Consider how intensive your therapy needs to be, whether you can travel safely, and what support you have at home. There's no single best option — the right one is the one that fits your needs." },
      { q: "Can I have physiotherapy at home after leaving hospital?", a: "Yes. Home-based physiotherapy is one option after discharge. It can be privately funded, or funded through programs such as the NDIS or Support at Home where eligible." },
      { q: "How soon should rehab start after discharge?", a: "Follow your hospital team's advice. In general, keeping up the exercises and activity you started in hospital and getting rehabilitation organised early helps you avoid losing strength once you're home." },
      { q: "Who can refer me for physiotherapy after hospital?", a: "You don't need a referral to see a physiotherapist privately. Hospital discharge teams, GPs, Support at Home providers, NDIS support coordinators and families can also refer to us directly." },
    ],
    sources: [
      { label: "Healthdirect — Physiotherapy", url: "https://www.healthdirect.gov.au/physiotherapy" },
      { label: "My Aged Care — Support at Home program", url: "https://www.myagedcare.gov.au/support-home-program" },
    ],
    sections: [
      {
        h2: "Quick answer: what are the rehab options after hospital discharge?",
        body: [
          "The right option depends on your needs, your health and what your hospital team recommends. The main pathways are:",
        ],
        list: [
          "Inpatient rehabilitation — a stay in a rehabilitation ward or unit, usually arranged by the hospital team when you need intensive daily therapy",
          "Outpatient or day rehabilitation — attending a hospital or community program for therapy sessions",
          "Community and home-based rehabilitation — therapy delivered at home, including home visit physiotherapy",
          "Support at Home's Restorative Care Pathway — for eligible older people, focused on maintaining and improving independence through allied health",
          "Private physiotherapy — at a clinic or at home, with no referral needed",
        ],
      },
      {
        h2: "A vulnerable time",
        body: [
          "Returning home after a hospital stay — whether after surgery, illness or a fall — is a critical period. Strength and confidence are often reduced, and without the right support the risk of setbacks, further falls or readmission rises.",
          "Home-based physiotherapy bridges this gap, providing structured, supported rehabilitation exactly when and where it is needed most.",
        ],
      },
      {
        h2: "Rebuilding strength and function",
        body: [
          "After time in hospital, muscles weaken quickly and everyday tasks can feel harder than before. A physiotherapist designs a graded program to rebuild strength, restore mobility and safely return you to the activities of daily life.",
          "Because it happens at home, your rehabilitation is grounded in your real environment, making it directly relevant to getting back to normal.",
        ],
      },
      {
        h2: "Lowering the risk of setbacks",
        body: [
          "Well-planned rehabilitation after discharge can help lower the risk of complications, falls and setbacks. Physiotherapists also coordinate with your broader care team and provide practical advice on safety and equipment at home.",
        ],
      },
      {
        h2: "Getting support quickly",
        body: [
          "The sooner rehabilitation begins after discharge, the better the outcomes tend to be. If you or a loved one is coming home from hospital, contact us to arrange prompt home visit physiotherapy and recover with confidence.",
        ],
      },
    ],
  },
{
    slug: "support-at-home-physiotherapy-explained",
    title: "Support at Home Physiotherapy Explained",
    description:
      "What the Support at Home program means for physiotherapy in Australia \u2014 what's covered, who's eligible and how in-home physio helps older adults stay independent.",
    date: "2026-05-28",
    readMins: 6,
    excerpt:
      "The new Support at Home program is changing aged care. Here's what it means for physiotherapy and staying independent at home.",
    sections: [
      {
        h2: "What is Support at Home?",
        body: [
          "Support at Home is the Australian Government program designed to help older people live independently in their own homes for longer, with services tailored to their needs. It brings together the kind of support previously delivered through Home Care Packages and Short-Term Restorative Care, which it replaced on 1 November 2025.",
          "Physiotherapy sits within the allied health and reablement side of this support, because staying mobile, strong and safe on your feet is fundamental to remaining at home.",
        ],
      },
      {
        h2: "How physiotherapy fits in",
        body: [
          "Under Support at Home, physiotherapy focuses on reablement \u2014 helping you regain and maintain function rather than simply managing decline. That means targeted programs to improve strength, balance, mobility and confidence, delivered in your own home.",
          "A mobile physiotherapist coordinates with your provider and care plan, delivers care aligned to your goals, and provides any documentation required, making the process simple for you and your family.",
        ],
        list: [
          "Strength and mobility programs",
          "Balance training and falls prevention",
          "Reablement after illness or hospital",
          "Home exercise programs",
          "Advice on equipment and home safety",
          "Support to stay independent at home",
        ],
      },
      {
        h2: "Why in-home matters",
        body: [
          "Delivering physiotherapy at home means your program is built around your real environment \u2014 your stairs, your chair, your bathroom \u2014 so the gains translate directly into everyday independence. It also removes the barriers of travel and waiting rooms that can make attending a clinic so hard.",
          "If you or a loved one is accessing Support at Home, physiotherapy is one of the most valuable services you can include.",
        ],
      },
    ],
  },
  {
    slug: "best-balance-exercises-for-seniors",
    title: "Best Balance Exercises for Seniors",
    description:
      "Physiotherapist-recommended balance exercises for older adults to improve stability, reduce falls risk and build confidence \u2014 safe to practise at home.",
    date: "2026-05-24",
    readMins: 6,
    excerpt:
      "Balance can be trained at any age. Here are the balance exercises physiotherapists most often recommend for seniors.",
    sections: [
      {
        h2: "Why balance training works",
        body: [
          "Balance naturally declines with age, but the good news is that it responds well to training at any stage of life. Practising balance exercises challenges the systems your body uses to stay steady \u2014 and, done consistently, meaningfully reduces your risk of falling.",
          "Always check with a physiotherapist before starting, keep a sturdy support such as a bench nearby, and stop if you feel unsafe.",
        ],
      },
      {
        h2: "Balance exercises to try",
        body: [
          "Start gently and build up. Quality and safety matter far more than difficulty.",
        ],
        list: [
          "Standing on one leg while holding a bench, building up your hold time",
          "Heel-to-toe (tandem) standing, feet in a straight line",
          "Weight shifts, transferring your weight side to side and front to back",
          "Sit-to-stand from a sturdy chair to build the leg strength that supports balance",
          "Marching on the spot while holding support",
          "Heel and toe raises to strengthen the ankles",
        ],
      },
      {
        h2: "Getting the most from your program",
        body: [
          "Balance improves with regular practice \u2014 a little each day is more effective than an occasional long session. A physiotherapist can assess your individual balance, tailor these exercises to your ability and progress them safely over time.",
          "For older adults, home visit physiotherapy makes this especially easy, with your program designed and supervised in the very space where you move each day.",
        ],
      },
    ],
  },
  {
    slug: "how-physiotherapy-prevents-falls-in-older-adults",
    title: "How Physiotherapy Prevents Falls in Older Adults",
    description:
      "How physiotherapy reduces falls risk in older adults \u2014 through balance and strength training, gait retraining, confidence work and a home hazard review.",
    date: "2026-05-16",
    readMins: 6,
    excerpt:
      "Falls are largely preventable. Here's exactly how physiotherapy lowers the risk for older adults.",
    sections: [
      {
        h2: "Understanding falls risk",
        body: [
          "Falls are the number one cause of accidental injury in older Australians, but there is a lot that can be done to lower the risk. Falls usually result from a combination of factors \u2014 reduced strength, poor balance, changes in walking pattern, and hazards in the home.",
          "Physiotherapy is uniquely placed to address all of these at once, which is why it is one of the most effective falls-prevention strategies available.",
        ],
      },
      {
        h2: "How physiotherapy reduces the risk",
        body: [
          "A physiotherapist first assesses your individual risk factors, then builds a program that targets them directly.",
        ],
        list: [
          "Progressive strength training for stronger, steadier legs",
          "Balance and stability exercises",
          "Gait and walking retraining",
          "A review of hazards in your home",
          "Rebuilding confidence and reducing fear of falling",
          "Advice on footwear and walking aids where helpful",
        ],
      },
      {
        h2: "The confidence factor",
        body: [
          "The fear of falling can be as limiting as a fall itself, causing people to move less \u2014 which weakens muscles and actually increases falls risk. Physiotherapy breaks this cycle through graded, supported practice that rebuilds confidence.",
          "Delivered at home, falls-prevention physiotherapy is especially powerful because hazards can be identified and addressed on the spot, and training happens where you actually move.",
        ],
      },
    ],
  },
  {
    slug: "home-visit-physio-vs-clinic-physio",
    title: "Home Visit Physio vs Clinic Physio: Which Is Right for You?",
    description:
      "Comparing home visit physiotherapy and clinic physiotherapy \u2014 the benefits of each, and when in-home care is the better choice for older adults.",
    date: "2026-05-08",
    readMins: 5,
    excerpt:
      "Should you see a physio at a clinic or have one come to you? Here's how to decide.",
    sections: [
      {
        h2: "The key difference",
        body: [
          "Clinic physiotherapy asks you to travel to a practice, while home visit physiotherapy brings a qualified physiotherapist to you. Both deliver the same professional standard of care \u2014 the difference is in convenience, comfort and, importantly, context.",
        ],
      },
      {
        h2: "Why home visits often win for older adults",
        body: [
          "For older adults and anyone who finds travel difficult, home visits remove the biggest barriers to consistent care: transport, parking, stairs and waiting rooms. But the advantages go beyond convenience.",
          "Being treated at home lets your physiotherapist assess and train you in your real environment \u2014 the actual stairs, chair and bathroom you use every day \u2014 so your program is directly relevant to your life and the gains translate into genuine independence.",
        ],
        list: [
          "No travel, parking or waiting rooms",
          "Care in a familiar, comfortable setting",
          "Assessment in your real environment",
          "Ideal for limited mobility or fatigue",
          "Easier for families and carers to be involved",
          "Great for aged care, NDIS and post-hospital clients",
        ],
      },
      {
        h2: "When a clinic might suit",
        body: [
          "Clinic physiotherapy can suit people who are highly mobile and want access to specialised gym equipment. But for older adults focused on staying independent at home, home visit physiotherapy is usually the more practical and effective choice.",
        ],
      },
    ],
  },
  {
    slug: "exercises-for-elderly-living-alone",
    title: "Safe Exercises for Elderly People Living Alone",
    description:
      "Simple, safe exercises for older adults living alone to maintain strength, balance and independence at home \u2014 with tips on staying safe.",
    date: "2026-04-30",
    readMins: 6,
    excerpt:
      "Living alone shouldn't mean losing strength. Here are safe exercises older adults can do at home.",
    sections: [
      {
        h2: "Staying strong and safe at home",
        body: [
          "For older adults living alone, staying physically capable is key to remaining independent and safe. Regular gentle exercise maintains the strength and balance that everyday tasks depend on \u2014 but safety comes first.",
          "Always keep a sturdy support nearby, exercise where you can reach a phone, and check with a physiotherapist before starting, especially if you have any health conditions.",
        ],
      },
      {
        h2: "Simple exercises to maintain independence",
        body: [
          "These exercises target the muscles and movements that matter most for daily life.",
        ],
        list: [
          "Sit-to-stand from a sturdy chair to build leg strength",
          "Heel raises while holding the kitchen bench",
          "Standing marching to maintain hip strength and balance",
          "Wall or bench push-ups for upper-body strength",
          "Gentle standing balance holds",
          "Regular short walks, indoors or out",
        ],
      },
      {
        h2: "How a physiotherapist helps",
        body: [
          "A physiotherapist can design a safe, personalised program suited to your ability and goals, and check that you are exercising correctly. For older adults living alone, home visit physiotherapy offers reassurance and supervision in your own home, and helps you keep doing the things that keep you independent.",
        ],
      },
    ],
  },
  {
    slug: "how-to-improve-walking-confidence-after-a-fall",
    title: "How to Improve Walking Confidence After a Fall",
    description:
      "Practical, physiotherapist-backed steps to rebuild walking confidence and reduce fear of falling after a fall \u2014 for older adults.",
    date: "2026-04-22",
    readMins: 5,
    excerpt:
      "A fall can shake your confidence as much as your body. Here's how physiotherapy helps you walk with confidence again.",
    sections: [
      {
        h2: "Why confidence matters after a fall",
        body: [
          "After a fall, it is completely natural to feel anxious about walking and moving. But this fear, while understandable, can lead to moving less \u2014 which weakens muscles, reduces balance and, ironically, increases the risk of another fall.",
          "Rebuilding confidence is therefore just as important as rebuilding strength, and physiotherapy addresses both together.",
        ],
      },
      {
        h2: "Steps to rebuild walking confidence",
        body: [
          "Confidence returns through gradual, supported practice \u2014 not by avoiding movement.",
        ],
        list: [
          "Start with supported exercises and progress gradually",
          "Rebuild leg and hip strength for a steadier gait",
          "Practise balance and walking in a safe, familiar space",
          "Address hazards in the home that undermine confidence",
          "Use a walking aid if it helps you move more freely",
          "Celebrate small wins to rebuild trust in your body",
        ],
      },
      {
        h2: "How physiotherapy helps",
        body: [
          "A physiotherapist guides you safely through this process, tailoring the pace to you and providing the reassurance that makes progress possible. Delivered at home, this work happens exactly where you need to feel confident \u2014 walking through your own hallway, kitchen and front steps.",
        ],
      },
    ],
  },
  {
    slug: "when-should-older-adults-see-a-physiotherapist",
    title: "When to See a Physiotherapist: Signs It's Time (Especially for Older Adults)",
    description:
      "When should you see a physio? The common signs it's time to see a physiotherapist — from pain that isn't settling to balance problems, falls and recovery after hospital.",
    date: "2026-04-14",
    readMins: 5,
    excerpt:
      "Not sure whether it's time to see a physio? Here are the signs to look out for — for anyone, and especially for older adults and their families.",
    updated: "2026-10-03",
    faqs: [
      { q: "Do I need a referral to see a physiotherapist?", a: "No. You don't need a GP referral to see a physiotherapist privately. A GP referral is needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), and some funding programs have their own requirements." },
      { q: "When should I see a doctor instead of a physio?", a: "See a doctor or seek urgent care if pain follows a significant accident, is severe and getting worse, or comes with symptoms such as fever, chest pain, sudden weakness or numbness, loss of bladder or bowel control, or confusion. If in doubt, call your GP or healthdirect on 1800 022 222. In an emergency call 000." },
      { q: "When is the right time to go to physiotherapy after surgery?", a: "Follow your surgeon's and hospital team's advice. Rehabilitation often starts in hospital and continues once you're home — starting your program early and keeping it consistent usually matters more than intensity." },
      { q: "Can a physiotherapist come to my home?", a: "Yes. Mobile physiotherapists visit people at home, in retirement villages and in aged care. Home visits can suit people who find travel difficult, are recovering after hospital, or want advice tailored to their own home." },
    ],
    sources: [
      { label: "Healthdirect — Physiotherapy", url: "https://www.healthdirect.gov.au/physiotherapy" },
      { label: "Healthdirect — Older people and falls", url: "https://www.healthdirect.gov.au/falls" },
    ],
    sections: [
      {
        h2: "Quick answer: when should you see a physio?",
        body: [
          "You can see a physiotherapist without a GP referral. It's a good time to book when:",
        ],
        list: [
          "Pain or stiffness isn't settling after a couple of weeks, or keeps coming back",
          "An injury, strain or sprain is limiting what you can do",
          "You're recovering from surgery, illness or a hospital stay",
          "You feel unsteady, have had a fall or near-fall, or are worried about falling",
          "Walking, stairs or getting out of a chair is becoming harder",
          "You have an ongoing condition such as arthritis, Parkinson's disease or after a stroke",
          "You want a safe exercise plan to stay strong and independent",
        ],
      },
      {
        h2: "Don't wait for a crisis",
        body: [
          "Many people only think of physiotherapy after a serious fall or injury \u2014 but seeing a physiotherapist earlier, when the first signs of decline appear, is far more effective. Physiotherapy is as much about preventing problems as treating them.",
        ],
      },
      {
        h2: "Signs it's time to see a physiotherapist",
        body: [
          "For older adults and the families supporting them, these are common signs that physiotherapy could help.",
        ],
        list: [
          "Difficulty getting out of a chair or climbing stairs",
          "Feeling unsteady, or a fear of falling",
          "One or more recent falls or near-falls",
          "Walking less, or losing confidence on your feet",
          "Ongoing pain that limits daily activities",
          "Recovering after surgery, illness or a hospital stay",
          "Wanting to stay independent at home for longer",
        ],
      },
      {
        h2: "Getting started",
        body: [
          "You don't need to wait for a referral to see a physiotherapist privately, and support may be available through the NDIS, Support at Home, DVA or Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP). If any of these signs sound familiar, a home visit assessment is a simple, low-pressure first step toward staying strong and independent.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-for-arthritis-in-seniors",
    title: "Physiotherapy for Arthritis in Seniors",
    description:
      "How physiotherapy helps older adults manage arthritis pain and stiffness, protect their joints and stay active and independent at home.",
    date: "2026-04-06",
    readMins: 6,
    excerpt:
      "Arthritis doesn't have to mean giving up the activities you love. Here's how physiotherapy helps seniors stay mobile.",
    sections: [
      { h2: "Arthritis and staying active", body: ["Arthritis is one of the most common conditions affecting older adults, bringing joint pain, stiffness and reduced movement. It can be tempting to rest and avoid activity, but the right kind of movement is one of the best things you can do for arthritic joints.", "Physiotherapy helps you find that balance — keeping joints moving and muscles strong while protecting them from unnecessary strain."] },
      { h2: "How physiotherapy helps", body: ["A physiotherapist assesses your joints, movement and goals, then builds a program to reduce pain and maintain function."], list: ["Gentle exercises to maintain joint movement","Strengthening the muscles that support your joints","Advice on pacing and protecting your joints","Hands-on treatment to ease pain and stiffness","Guidance on aids and home modifications","Strategies to stay active and independent"] },
      { h2: "Care that comes to you", body: ["For older adults with arthritis, travelling to a clinic can be painful and tiring. Home visit physiotherapy removes that barrier and lets your program be tailored to your daily environment — so you can keep doing the things that matter, with less pain."] },
    ],
  },
  {
    slug: "how-to-choose-a-mobile-physiotherapist",
    title: "How to Choose a Mobile Physiotherapist",
    description:
      "What to look for when choosing a mobile or home visit physiotherapist — qualifications, experience, funding options and the right questions to ask.",
    date: "2026-03-29",
    readMins: 5,
    excerpt:
      "Not all mobile physios are the same. Here's how to choose the right one for you or your loved one.",
    sections: [
      { h2: "Why the right choice matters", body: ["Choosing a mobile physiotherapist is an important decision, especially for older adults and people with complex needs. The right physiotherapist will not only be qualified, but experienced in the kind of care you need and reliable in their communication."] },
      { h2: "What to look for", body: ["Keep these factors in mind when comparing mobile physiotherapy providers."], list: ["Qualifications and AHPRA registration","Experience with aged care, NDIS or your condition","Clear communication with families and providers","The funding types they work with","Whether they service your suburb","A focus on your goals and long-term outcomes"] },
      { h2: "Questions worth asking", body: ["Don't hesitate to ask about a physiotherapist's experience with your situation, how they communicate progress, and how they work with your funding. A good provider will answer clearly and put you at ease. At Fletcher Physiotherapy, our care is led by an APA Titled Pain Physiotherapist with extensive experience in aged care and home-based rehabilitation."] },
    ],
  },
  {
    slug: "exercises-after-a-hip-replacement",
    title: "Exercises to Do After a Hip Replacement",
    description:
      "A guide to safe rehabilitation exercises after a hip replacement, and how home visit physiotherapy supports a strong, confident recovery.",
    date: "2026-03-21",
    readMins: 6,
    excerpt:
      "Recovering from a hip replacement? Here's how physiotherapy and the right exercises help you get back on your feet.",
    sections: [
      { h2: "Recovery after a hip replacement", body: ["A hip replacement can improve quality of life, but a strong recovery depends on good rehabilitation. Physiotherapy helps you rebuild strength and movement safely, while protecting your new joint and following your surgeon's precautions.", "Always follow the specific guidance of your surgeon and physiotherapist — the exercises below are general examples only."] },
      { h2: "Common early rehabilitation exercises", body: ["In the weeks after surgery, gentle, progressive exercise is key."], list: ["Ankle pumps to aid circulation","Gentle knee bends and straightening","Buttock and thigh muscle squeezes","Standing hip movements with support","Sit-to-stand practice from a firm chair","Guided walking practice"] },
      { h2: "Why home-based rehab helps", body: ["Getting to a clinic after major surgery can be difficult. Home visit physiotherapy lets you begin and progress your rehabilitation safely at home, with your program tailored to your recovery and your environment — helping you regain confidence and independence sooner."] },
    ],
  },
  {
    slug: "physiotherapy-after-knee-replacement",
    title: "Physiotherapy After a Knee Replacement",
    description:
      "How physiotherapy supports recovery after a knee replacement — restoring movement, strength and confidence, with rehabilitation delivered at home.",
    date: "2026-03-13",
    readMins: 5,
    excerpt:
      "Knee replacement recovery is all about rehabilitation. Here's how physiotherapy helps you regain full movement.",
    sections: [
      { h2: "The importance of rehabilitation", body: ["The success of a knee replacement depends heavily on the rehabilitation that follows. Consistent physiotherapy helps restore the movement and strength needed to walk, climb stairs and return to daily life — and reduces the risk of a stiff, poorly functioning joint."] },
      { h2: "What rehabilitation involves", body: ["Your physiotherapist guides you through a graded program tailored to your recovery."], list: ["Exercises to restore knee bending and straightening","Progressive strengthening of the leg muscles","Swelling and pain management strategies","Walking and stair practice","Balance and confidence work","A gradual return to daily activities"] },
      { h2: "Recovering at home", body: ["Home visit physiotherapy is ideal after a knee replacement, when travel is uncomfortable and consistency matters. Your physiotherapist brings the rehabilitation to you, keeping you on track and progressing safely toward full function."] },
    ],
  },
  {
    slug: "physiotherapy-for-parkinsons-at-home",
    title: "Physiotherapy for Parkinson's Disease at Home",
    description:
      "How home-based physiotherapy helps people with Parkinson's disease maintain movement, balance and independence, and reduce falls risk.",
    date: "2026-03-05",
    readMins: 6,
    excerpt:
      "Physiotherapy plays a key role in living well with Parkinson's. Here's how home-based care helps.",
    sections: [
      { h2: "Parkinson's and movement", body: ["Parkinson's disease affects movement, balance and confidence, and these challenges tend to change over time. Physiotherapy is an important part of managing the condition, helping people stay as mobile, safe and independent as possible."] },
      { h2: "How physiotherapy helps", body: ["A physiotherapist tailors a program to your individual symptoms and goals, and adapts it as your needs change."], list: ["Exercises to maintain movement and flexibility","Balance training to reduce falls risk","Strategies for walking and turning safely","Strength and posture work","Techniques to manage freezing and initiation","Support for confidence and daily activities"] },
      { h2: "The benefit of home-based care", body: ["Practising in your own home means strategies can be applied directly to your everyday movements and spaces. Home visit physiotherapy also removes the stress of travel, and lets families and carers be involved. Many people with Parkinson's access this support through the NDIS or Support at Home."] },
    ],
  },
  {
    slug: "physiotherapy-after-stroke-at-home",
    title: "Physiotherapy After a Stroke: Recovering at Home",
    description:
      "How home-based physiotherapy supports stroke recovery — rebuilding movement, strength and independence in the comfort of your own home.",
    date: "2026-02-25",
    readMins: 6,
    excerpt:
      "Recovery after a stroke continues long after hospital. Here's how home physiotherapy supports it.",
    sections: [
      { h2: "Recovery continues at home", body: ["Stroke recovery is a journey that continues well beyond the hospital. Ongoing physiotherapy is essential to rebuilding movement, strength and independence, and much of that progress happens once you are back home."] },
      { h2: "How physiotherapy helps after a stroke", body: ["A physiotherapist works with you on the specific movements and skills affected by your stroke, tailoring the program to your recovery."], list: ["Retraining movement and coordination","Strengthening affected muscles","Balance and walking practice","Reducing falls risk","Regaining independence in daily tasks","Support and education for families and carers"] },
      { h2: "Why home-based rehab works", body: ["Recovering at home means your rehabilitation is grounded in your real environment and everyday goals. Home visit physiotherapy removes the barrier of travel, supports consistent practice, and involves the people around you. Stroke rehabilitation is often funded through the NDIS or Support at Home."] },
    ],
  },
  {
    slug: "chair-exercises-for-older-adults",
    title: "Chair Exercises for Older Adults with Limited Mobility",
    description:
      "Safe, seated chair exercises for older adults with limited mobility to maintain strength, circulation and independence at home.",
    date: "2026-02-17",
    readMins: 5,
    excerpt:
      "Limited mobility doesn't mean you can't exercise. These seated exercises help older adults stay strong.",
    sections: [
      { h2: "Exercise from a chair", body: ["For older adults with limited mobility, seated exercises are a safe and effective way to maintain strength, movement and circulation. Chair-based exercise reduces the risk of falling during the exercise itself, while still delivering real benefits.", "Use a sturdy chair without wheels, sit tall, and check with a physiotherapist before starting."] },
      { h2: "Seated exercises to try", body: ["These gentle movements target the whole body."], list: ["Marching your legs while seated","Knee extensions, straightening one leg at a time","Seated heel and toe raises","Arm raises and shoulder circles","Seated trunk twists","Ankle circles to aid circulation"] },
      { h2: "Building a safe program", body: ["A physiotherapist can design a seated program suited to your ability and gradually progress it as you get stronger. For those with limited mobility, home visit physiotherapy provides safe, supervised support in your own home — and can help you work toward standing and walking goals over time."] },
    ],
  },
  {
    slug: "how-often-should-seniors-exercise",
    title: "How Often Should Seniors Exercise?",
    description:
      "How much and how often older adults should exercise to maintain strength, balance and independence — practical, physiotherapist-informed guidance.",
    date: "2026-02-09",
    readMins: 5,
    excerpt:
      "How much exercise do older adults really need? Here's a simple, realistic guide.",
    sections: [
      { h2: "Finding the right amount", body: ["One of the most common questions older adults ask is how much exercise they should be doing. The reassuring answer is that regular, moderate activity — not intense workouts — is what keeps you strong, steady and independent.", "Consistency matters more than intensity: a little most days is far better than an occasional big effort."] },
      { h2: "A simple weekly approach", body: ["General guidance for older adults includes a mix of activity types across the week."], list: ["Some movement or walking on most days","Strength exercises two or more days a week","Balance exercises several times a week","Gentle flexibility work","Breaking up long periods of sitting","Adjusting to your ability and health"] },
      { h2: "Getting it right for you", body: ["The ideal amount and type of exercise depends on your individual health, goals and abilities. A physiotherapist can create a safe, realistic program and progress it over time. Home visit physiotherapy makes it easy to build exercise into your daily routine, in your own home."] },
    ],
  },
  {
    slug: "managing-chronic-pain-in-older-adults",
    title: "Managing Chronic Pain in Older Adults",
    description:
      "How physiotherapy helps older adults manage chronic pain and stay active — an evidence-based approach led by an APA Titled Pain Physiotherapist.",
    date: "2026-02-01",
    readMins: 6,
    excerpt:
      "Chronic pain is common in later life, but it can be managed. Here's how physiotherapy helps.",
    sections: [
      { h2: "Understanding chronic pain", body: ["Chronic, or persistent, pain is common in older adults and affects far more than the body — it can reduce activity, confidence and quality of life. Modern pain management recognises that pain is complex, and that gentle movement and the right strategies are central to managing it well."] },
      { h2: "How physiotherapy helps", body: ["Physiotherapy takes an active, evidence-based approach to chronic pain, focused on restoring movement and function rather than simply resting."], list: ["Understanding your individual pain experience","Graded movement to reduce fear and rebuild capacity","Hands-on treatment where helpful","Practical day-to-day pain strategies","Strength and conditioning","A graded return to meaningful activities"] },
      { h2: "Experienced, home-based support", body: ["At Fletcher Physiotherapy, chronic pain care is led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management) from the University of Sydney. Delivered at home, this experienced care helps older adults across Newcastle move with confidence and return to the activities that matter most."] },
    ],
  },
  {
    slug: "physiotherapy-for-osteoporosis",
    title: "Physiotherapy for Osteoporosis in Older Adults",
    description:
      "How physiotherapy helps older adults with osteoporosis build bone-supporting strength, improve balance and reduce fracture risk — safely, at home.",
    date: "2026-01-24",
    readMins: 6,
    excerpt:
      "Osteoporosis raises fracture risk, but the right exercise strengthens bones and prevents falls. Here's how physiotherapy helps.",
    sections: [
      { h2: "Osteoporosis and exercise", body: ["Osteoporosis weakens the bones and increases the risk of fractures, particularly from a fall. While it can feel frightening, the right exercise is one of the best ways to support bone health and, crucially, to prevent the falls that cause fractures.", "Exercise for osteoporosis must be appropriate and safe, which is where a physiotherapist's guidance is invaluable."] },
      { h2: "How physiotherapy helps", body: ["A physiotherapist designs a safe program based on your individual bone health and abilities."], list: ["Bone-supporting strength exercises","Balance training to prevent falls","Posture and back-care advice","Guidance on safe versus risky movements","Confidence and mobility work","Home safety review"] },
      { h2: "Safe, supervised support", body: ["Because certain movements can be risky with osteoporosis, professional guidance matters. Home visit physiotherapy provides safe, supervised exercise in your own home, tailored to protect your bones while keeping you strong and steady."] },
    ],
  },
  {
    slug: "staying-active-in-winter-for-seniors",
    title: "Staying Active in Winter: A Guide for Seniors",
    description:
      "Practical tips to help older adults stay active, warm and safe during winter, and maintain strength and balance year-round.",
    date: "2026-01-16",
    readMins: 5,
    excerpt:
      "Cold, dark days make it easy to slow down. Here's how seniors can stay active and safe through winter.",
    sections: [
      { h2: "Why winter is a challenge", body: ["Shorter, colder days can make older adults far less active, and even a few weeks of reduced movement can lead to noticeable losses in strength and balance. Staying active through winter helps maintain the capability that independence depends on."] },
      { h2: "Tips to stay active and safe", body: ["Small, consistent efforts make a big difference."], list: ["Do indoor exercises on cold or wet days","Keep to a simple daily movement routine","Stay warm to keep muscles and joints comfortable","Take short walks when the weather allows","Break up long periods of sitting","Stay socially connected and motivated"] },
      { h2: "Keeping momentum with support", body: ["A physiotherapist can provide a safe home exercise program that keeps you moving regardless of the weather. Home visit physiotherapy is especially helpful in winter, bringing supervised exercise to you so you never have to head out in the cold to stay strong."] },
    ],
  },
  {
    slug: "how-to-prevent-muscle-loss-with-age",
    title: "How to Prevent Muscle Loss with Age",
    description:
      "Understanding sarcopenia — age-related muscle loss — and how strength exercise and physiotherapy help older adults stay strong and independent.",
    date: "2026-01-08",
    readMins: 6,
    excerpt:
      "Muscle loss with age isn't inevitable. Here's how to keep your strength and independence.",
    sections: [
      { h2: "What is age-related muscle loss?", body: ["From around middle age, we naturally begin to lose muscle mass and strength — a process called sarcopenia. Left unchecked, it makes everyday tasks harder and increases the risk of falls and frailty. The good news is that it is largely preventable and even reversible with the right exercise."] },
      { h2: "How to maintain your strength", body: ["Muscle responds to being used, at any age. The key is regular, progressive strength exercise."], list: ["Strength exercises at least twice a week","Progressive resistance as you get stronger","Enough protein in your diet","Staying generally active day to day","Targeting the legs and core for independence","Consistency over intensity"] },
      { h2: "The role of physiotherapy", body: ["A physiotherapist can assess your strength and design a safe, effective program tailored to you — then progress it over time. For older adults, home visit physiotherapy makes strength training accessible and safe, helping you preserve the muscle that keeps you independent."] },
    ],
  },
  {
    slug: "physiotherapy-for-lower-back-pain-in-seniors",
    title: "Physiotherapy for Lower Back Pain in Seniors",
    description:
      "How physiotherapy helps older adults manage lower back pain and stay mobile and active — with care delivered at home.",
    date: "2025-12-30",
    readMins: 5,
    excerpt:
      "Lower back pain is common in later life. Here's how physiotherapy helps you move comfortably again.",
    sections: [
      { h2: "Back pain and older adults", body: ["Lower back pain is one of the most common complaints among older adults, and it can significantly limit movement and quality of life. While it is common, it should not simply be accepted — physiotherapy can help you manage pain and move more comfortably."] },
      { h2: "How physiotherapy helps", body: ["A physiotherapist assesses the causes of your back pain and builds a program to reduce it and restore function."], list: ["Gentle exercises to ease pain and stiffness","Core and back strengthening","Posture and movement advice","Hands-on treatment where appropriate","Strategies for daily activities","A gradual return to normal movement"] },
      { h2: "Care in your own home", body: ["Travelling with back pain can be uncomfortable. Home visit physiotherapy brings treatment to you and tailors your program to your everyday environment and activities, helping you move and live more comfortably."] },
    ],
  },
  {
    slug: "what-to-expect-from-your-first-ndis-physio-session",
    title: "What to Expect from Your First NDIS Physio Session",
    description:
      "A guide to your first NDIS physiotherapy session at home — the assessment, goal-setting, program and reporting, so you know what to expect.",
    date: "2025-12-22",
    readMins: 5,
    excerpt:
      "New to NDIS physiotherapy? Here's exactly what happens at your first session.",
    sections: [
      { h2: "Before your first session", body: ["Getting started with NDIS physiotherapy is simple. After you make contact, we confirm a convenient time and discuss your goals, health history and plan details. There's nothing you need to prepare beyond a comfortable space to move."] },
      { h2: "During the assessment", body: ["Your first session focuses on understanding you and your goals."], list: ["A discussion of your goals and daily challenges","An assessment of movement, strength and balance","A look at your home environment","Setting clear, functional goals","Beginning your personalised program","Time for your questions"] },
      { h2: "What happens next", body: ["After the assessment, your physiotherapist builds a tailored program and, where needed, provides reports to support your plan. Sessions continue at home, progressing as you improve, with clear communication to you, your family and your support coordinator throughout."] },
    ],
  },
  {
    slug: "caring-for-an-ageing-parent-at-home",
    title: "Caring for an Ageing Parent at Home: How Physiotherapy Helps",
    description:
      "Practical guidance for adult children caring for an ageing parent, and how home visit physiotherapy supports safety, mobility and independence.",
    date: "2025-12-14",
    readMins: 6,
    excerpt:
      "Worried about a parent living at home? Here's how physiotherapy supports them — and gives families peace of mind.",
    sections: [
      { h2: "The challenge for families", body: ["Watching a parent become less steady or confident is difficult, and many adult children feel unsure how to help. You want your parent to stay safe and independent, but you may not live nearby or know where to start. Physiotherapy can be a powerful part of the answer."] },
      { h2: "How physiotherapy supports your parent", body: ["Home visit physiotherapy addresses the physical changes that most threaten independence, and involves families along the way."], list: ["Improving strength, balance and mobility","Reducing falls risk and reviewing home hazards","Rebuilding confidence to stay active","Supporting recovery after illness or hospital","Clear communication with family members","Guidance you can use to help between visits"] },
      { h2: "Peace of mind for you", body: ["Knowing a qualified physiotherapist is regularly supporting your parent at home brings real reassurance. We keep families informed and involved, and help your parent stay strong, safe and independent in the home they love. Support may be available through Support at Home or the NDIS."] },
    ],
  },
  {
    slug: "physiotherapy-for-shoulder-pain-in-older-adults",
    title: "Physiotherapy for Shoulder Pain in Older Adults",
    description:
      "How physiotherapy helps older adults relieve shoulder pain and restore movement for everyday tasks — with treatment delivered at home.",
    date: "2025-12-06",
    readMins: 5,
    excerpt:
      "Shoulder pain can make daily tasks hard. Here's how physiotherapy restores comfortable movement.",
    sections: [
      { h2: "Shoulder pain and daily life", body: ["The shoulder is one of the most mobile joints in the body, and shoulder pain can make everyday tasks — dressing, reaching, cooking — surprisingly difficult. In older adults, shoulder pain often develops gradually and can steadily limit independence if not addressed."] },
      { h2: "How physiotherapy helps", body: ["A physiotherapist identifies the cause of your shoulder pain and builds a program to restore comfortable movement."], list: ["Exercises to restore shoulder movement","Strengthening the muscles around the joint","Hands-on treatment to ease pain","Posture and movement advice","Strategies for daily tasks","A gradual return to normal activity"] },
      { h2: "Convenient home-based care", body: ["Home visit physiotherapy makes treatment easy to access and tailors your program to the real tasks you want to return to — helping you use your shoulder comfortably and confidently again."] },
    ],
  },
  {
    slug: "getting-up-safely-after-a-fall",
    title: "How to Get Up From a Fall: A Safe Step-by-Step Guide for Seniors",
    description:
      "How to get up from a fall safely — a step-by-step guide for seniors, what to do if you can't get up, and how physiotherapy builds the strength and confidence to do it.",
    date: "2025-11-28",
    readMins: 5,
    excerpt:
      "Knowing how to get up after a fall — calmly and safely — is a skill worth practising before you ever need it. Here's how.",
    updated: "2026-10-03",
    faqs: [
      { q: "What should an older person do first after a fall?", a: "Stay calm, take a moment to catch your breath and check whether you're hurt. If you think you may be injured, don't force yourself up — call for help and stay as warm and comfortable as possible." },
      { q: "What if I can't get up after a fall?", a: "Call for help using a personal alarm, phone or by attracting attention. Try to keep warm, move your joints gently and change position when you can while you wait. If you are injured or unwell, call 000." },
      { q: "Should I see a doctor after a fall even if I'm not hurt?", a: "Yes. Speak with your GP after any fall, even if you feel fine. Falls can be a sign of a new medical problem, a medicine side effect, balance problems or muscle weakness." },
      { q: "Can a physiotherapist teach me how to get up from the floor?", a: "Yes. A physiotherapist can teach and rehearse the technique with you safely, build the strength and mobility it requires, and help reduce the fear of falling that often follows a fall." },
    ],
    sources: [
      { label: "Healthdirect — Older people and falls", url: "https://www.healthdirect.gov.au/falls" },
    ],
    sections: [
      {
        h2: "Why this skill matters",
        body: [
          "Many older adults who fall are not badly hurt by the fall itself, but end up on the floor for a long time simply because they are not sure how to get back up. Knowing a safe method — and having the strength to do it — reduces both the risk and the fear.",
          "It is worth learning and gently practising this before you ever need it, ideally with guidance from a physiotherapist.",
        ],
      },
      {
        h2: "First, pause and check",
        body: [
          "If you fall, try not to rush. Take a moment to catch your breath and check whether you are hurt. If you feel you may be injured, it is safer to call for help and stay warm and comfortable than to force yourself up.",
          "If you feel able to get up, do it slowly and in stages rather than all at once.",
        ],
      },
      {
        h2: "A safe way to get up, step by step",
        list: [
          "Stay calm, take a moment and check for injury",
          "Roll onto your side, then onto your hands and knees",
          "Crawl to a sturdy chair or piece of furniture",
          "Place your hands on the seat and bring your stronger leg forward, foot flat",
          "Push up through your arms and legs, then turn and sit on the chair",
          "Rest for a few minutes before standing or doing anything else",
        ],
        body: [
          "Only try this if you feel uninjured and able. It is best practised first with a physiotherapist, so you know you can do it safely before you ever need to.",
        ],
      },
      {
        h2: "If you can't get up",
        body: [
          "If you cannot get up, call for help — a personal alarm, phone or by attracting attention. Try to move to a carpeted or warm area, keep moving your joints to stay warm, and change position when you can to stay comfortable while you wait.",
          "A personal alarm pendant is a simple, worthwhile safeguard for anyone at higher risk of falling, especially those living alone.",
        ],
      },
      {
        h2: "Building the strength and confidence to do it",
        body: [
          "Being able to get off the floor takes strength, mobility and practice — all of which physiotherapy can build. A physiotherapist can teach and rehearse the technique with you safely, strengthen the muscles involved, and reduce the fear that so often follows a fall.",
          "Fletcher Physiotherapy provides falls prevention and recovery physiotherapy in your own home across Newcastle, Lake Macquarie and the Central Coast. To arrange a visit, call 0404 791 756.",
        ],
      },
    ],
  },
];
