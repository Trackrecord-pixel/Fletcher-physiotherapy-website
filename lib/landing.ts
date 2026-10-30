import type { LandingContent } from "@/components/LandingPage";

export const landingPages: Record<string, LandingContent> = {
  "lower-back-pain-physiotherapy": {
    slug: "lower-back-pain-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    eyebrow: "Lower Back Pain Physiotherapy",
    h1: "Lower back pain physiotherapy",
    serviceName: "Lower Back Pain Physiotherapy",
    intro:
      "Assessment and treatment for acute and persistent lower back pain, stiffness and associated leg symptoms — at our Jesmond, Yagoona and Parramatta clinics, or at home.",
    lead: [
      "Lower back pain is one of the most common reasons people see a physiotherapist. Most episodes are not caused by serious damage, and many people improve with the right mix of reassurance, activity and graded exercise — but pain can still be worrying and disrupt sleep, work and daily life.",
      "Our role is to work out what is contributing to your pain, check for anything that needs medical review, and build a plan that helps you keep moving and gradually return to the activities that matter to you.",
    ],
    sections: [
      {
        h2: "Common presentations",
        body: ["We see people with a wide range of back problems, including:"],
        list: [
          "Sudden (acute) low back pain after lifting or bending",
          "Recurring or persistent back pain",
          "Back pain with pain, tingling or numbness into the leg (sciatica)",
          "Stiffness in the morning or after sitting",
          "Back pain related to work, sport or deconditioning",
          "Back pain alongside other long-term health conditions",
        ],
      },
      {
        h2: "How we assess your back",
        body: [
          "We take a detailed history — when the pain started, what eases and aggravates it, how it affects your day and what you want to get back to. We then assess movement, strength, nerve function and how you manage everyday tasks such as bending, sitting and walking.",
          "We also screen for symptoms that need prompt medical attention, such as new problems with bladder or bowel control, numbness around the groin, or rapidly worsening leg weakness. If any of these occur, contact your GP or emergency department straight away.",
        ],
      },
      {
        h2: "Treatment approaches",
        body: [
          "Treatment is individualised and may include graded exercise to rebuild strength and confidence, hands-on treatment where it helps short-term comfort, advice on staying active, pacing strategies and education about pain. For persistent back pain, care is led by an APA Titled Pain Physiotherapist.",
          "Scans are not usually needed for low back pain. If we think imaging or a medical review is warranted, we'll explain why and liaise with your GP.",
        ],
      },
      {
        h2: "Funding and where to be seen",
        body: [
          "Private patients don't need a referral. Eligible Medicare patients with a GP Chronic Condition Management Plan referral can be bulk billed at our Jesmond, Yagoona and Parramatta clinics. DVA, WorkCover and CTP patients are also seen, subject to their claim and referral requirements. Home visits are available if getting to a clinic is difficult.",
        ],
      },
    ],
    faqs: [
      { q: "Should I rest or keep moving with back pain?", a: "For most people, staying gently active is better than bed rest. Your physiotherapist can help you find a level of activity that's manageable and build from there." },
      { q: "Do I need an X-ray or MRI?", a: "Usually not. Most low back pain can be assessed clinically. Imaging is considered when specific warning signs are present or symptoms don't follow the expected course." },
      { q: "Can physiotherapy help sciatica?", a: "Physiotherapy may help many people with sciatica through education, activity advice and graded exercise. We monitor nerve symptoms closely and refer for medical review if needed." },
      { q: "Can I be bulk billed for back pain physio?", a: "Eligible Medicare patients with a GPCCMP referral from their GP can be bulk billed at our Jesmond, Yagoona and Parramatta clinics. Ask your GP whether a GPCCMP is appropriate for you." },
    ],
    related: [
      { label: "Bulk billing physiotherapy in Yagoona", href: "/bulk-billing-physiotherapy-yagoona" },
      { label: "Persistent pain physiotherapy", href: "/chronic-pain-management" },
      { label: "Neck pain physiotherapy", href: "/neck-pain-physiotherapy" },
      { label: "Exercise rehabilitation", href: "/exercise-rehabilitation" },
      { label: "Article: sciatica and physiotherapy", href: "/blog/sciatica-how-physiotherapy-can-help" },
    ],
    ctaTitle: "Book back pain physiotherapy",
  },
  "neck-pain-physiotherapy": {
    slug: "neck-pain-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    sectionIds: { "Neck-related headaches": "neck-related-headaches" },
    eyebrow: "Neck Pain Physiotherapy",
    h1: "Neck pain and headache physiotherapy",
    serviceName: "Neck Pain Physiotherapy",
    intro:
      "Physiotherapy for neck pain, stiffness, restricted movement and neck-related headaches — in clinic at Jesmond, Yagoona and Parramatta, or at home.",
    lead: [
      "Neck pain can come on suddenly after sleeping awkwardly or build gradually with desk work, stress or reduced activity. It often comes with stiffness, shoulder or upper-back tension, and sometimes headaches.",
      "Physiotherapy aims to restore comfortable movement, build strength and endurance in the neck and upper back, and give you practical strategies for work and daily life.",
    ],
    sections: [
      {
        h2: "Common presentations",
        body: ["Including:"],
        list: [
          "Acute neck pain and 'wry neck'",
          "Persistent neck pain and stiffness",
          "Neck pain related to desk work or posture",
          "Pain spreading into the shoulder blade or arm",
          "Neck pain after a car accident (whiplash-associated disorders)",
          "Neck-related (cervicogenic) headaches",
        ],
      },
      {
        h2: "Assessment",
        body: [
          "We assess neck and upper-back movement, muscle strength and endurance, nerve function in the arms, and the activities that bring on your symptoms. We also screen for signs that need medical review, such as unexplained dizziness, visual disturbance, or weakness and numbness in the arms.",
        ],
      },
      {
        h2: "Neck-related headaches",
        body: [
          "Some headaches are linked to the joints and muscles of the upper neck — known as cervicogenic headaches. They are often one-sided, may be brought on by neck movement or sustained postures, and are commonly accompanied by neck stiffness.",
          "Physiotherapy assessment helps determine whether the neck may be contributing. Management may include cervical mobility exercises, deep neck flexor and upper-back strengthening, manual therapy and advice on workload and posture. Other headache types, such as migraine, are best managed with your GP; physiotherapy may still help with associated neck symptoms.",
        ],
      },
      {
        h2: "Treatment approaches",
        body: [
          "Treatment may include targeted strengthening, mobility exercises, hands-on treatment where appropriate, and advice on activity, sleep and workstation set-up. We progress your program as symptoms settle so you can manage independently.",
        ],
      },
    ],
    faqs: [
      { q: "Can physiotherapy help headaches?", a: "Physiotherapy may help headaches that are associated with neck dysfunction (cervicogenic headaches). We assess whether your neck may be contributing and refer to your GP if another cause is suspected." },
      { q: "Is neck manipulation necessary?", a: "No. Many people improve with exercise and gentle hands-on treatment. Any manual therapy is discussed with you first and only used where appropriate." },
      { q: "I hurt my neck in a car accident — can you help?", a: "Yes. We see patients with eligible NSW CTP claims. Bring your claim details to your first appointment." },
    ],
    related: [
      { label: "Lower back pain physiotherapy", href: "/lower-back-pain-physiotherapy" },
      { label: "Shoulder pain physiotherapy", href: "/shoulder-pain-physiotherapy" },
      { label: "CTP physiotherapy", href: "/ctp-physiotherapy" },
      { label: "Physiotherapy in Yagoona", href: "/physiotherapy-yagoona" },
      { label: "Article: neck pain and posture", href: "/blog/physiotherapy-for-neck-pain-and-posture" },
    ],
    ctaTitle: "Book neck pain physiotherapy",
  },
  "shoulder-pain-physiotherapy": {
    slug: "shoulder-pain-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    eyebrow: "Shoulder Pain Physiotherapy",
    h1: "Shoulder pain physiotherapy",
    serviceName: "Shoulder Pain Physiotherapy",
    intro:
      "Assessment and rehabilitation for shoulder pain, rotator cuff-related conditions, stiffness and restricted movement — in clinic or at home.",
    lead: [
      "Shoulder pain can make everyday tasks — dressing, reaching overhead, sleeping on one side, lifting shopping — surprisingly difficult. The most common causes involve the rotator cuff tendons, joint stiffness, or changes related to age and load.",
      "Rehabilitation focuses on understanding what aggravates your shoulder, then progressively rebuilding strength, movement and confidence with an individualised exercise program.",
    ],
    sections: [
      {
        h2: "Conditions we commonly see",
        body: ["Including:"],
        list: [
          "Rotator cuff-related shoulder pain",
          "Rotator cuff tears (non-surgical management)",
          "Frozen shoulder (adhesive capsulitis)",
          "Shoulder osteoarthritis",
          "Rehabilitation after shoulder surgery",
          "Shoulder pain after a fall or injury",
        ],
      },
      {
        h2: "Assessment",
        body: [
          "We assess shoulder movement and strength, how the shoulder blade and neck contribute, and which activities provoke your symptoms. Where appropriate, we liaise with your GP about imaging or specialist review.",
        ],
      },
      {
        h2: "Rehabilitation",
        body: [
          "Exercise-based rehabilitation is the foundation of care for most shoulder conditions. Programs are progressed gradually — starting with comfortable movement and building to strengthening that matches your daily, work or sporting demands. Hands-on treatment and activity modification may be used alongside exercise.",
          "Recovery times vary widely between conditions; frozen shoulder, for example, can take many months. We'll give you a realistic outline after your assessment.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a scan before seeing a physio?", a: "Usually not. Many shoulder conditions can be assessed clinically. If imaging would change your management, we'll discuss it with you and your GP." },
      { q: "Can physiotherapy help a rotator cuff tear?", a: "Many people with rotator cuff tears, particularly degenerative tears, are managed with exercise-based rehabilitation. Your physiotherapist and GP or surgeon can help you weigh up the options." },
      { q: "Do you treat shoulders after surgery?", a: "Yes — we follow your surgeon's protocol and progress rehabilitation as your shoulder heals." },
    ],
    related: [
      { label: "Neck pain physiotherapy", href: "/neck-pain-physiotherapy" },
      { label: "Post-surgical rehabilitation", href: "/post-surgical-rehabilitation" },
      { label: "Sports injury physiotherapy", href: "/sports-injury-physiotherapy" },
      { label: "Bulk billing physiotherapy in Yagoona", href: "/bulk-billing-physiotherapy-yagoona" },
      { label: "Article: shoulder pain in older adults", href: "/blog/physiotherapy-for-shoulder-pain-in-older-adults" },
    ],
    ctaTitle: "Book shoulder physiotherapy",
  },
  "knee-pain-physiotherapy": {
    slug: "knee-pain-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    eyebrow: "Knee Pain Physiotherapy",
    h1: "Knee pain physiotherapy",
    serviceName: "Knee Pain Physiotherapy",
    intro:
      "Physiotherapy for knee pain associated with osteoarthritis, injury, overuse and reduced mobility — in clinic or at home.",
    lead: [
      "Knee pain can limit walking, stairs, getting up from a chair and sport. Common causes include knee osteoarthritis, pain around the kneecap, ligament and meniscus injuries, and tendon overload.",
      "Strengthening and education are central to managing most knee conditions. Our aim is to help you understand your knee, reduce flare-ups and build the strength and confidence to stay active.",
    ],
    sections: [
      {
        h2: "Conditions we commonly see",
        body: ["Including:"],
        list: [
          "Knee osteoarthritis",
          "Pain around the kneecap (patellofemoral pain)",
          "Ligament sprains and meniscus injuries",
          "Patellar tendon pain",
          "Knee pain after a fall",
          "Rehabilitation before and after knee replacement",
        ],
      },
      {
        h2: "Assessment",
        body: [
          "We assess knee movement, swelling, strength through the hip and leg, balance and how you walk, climb stairs and squat. If an injury suggests structural damage that may need imaging or a surgical opinion, we'll discuss referral with your GP.",
        ],
      },
      {
        h2: "Rehabilitation",
        body: [
          "Programs typically combine progressive strengthening, movement retraining, load management and practical advice on activity. For knee osteoarthritis, exercise and education are recommended first-line treatments in clinical guidelines, and may help reduce pain and improve function for many people.",
        ],
      },
    ],
    faqs: [
      { q: "Is exercise safe with knee arthritis?", a: "For most people, yes. A tailored program that is progressed gradually is a recommended part of managing knee osteoarthritis." },
      { q: "Can you help me prepare for a knee replacement?", a: "Yes. Strengthening before surgery (prehabilitation) can help you prepare, and we continue rehabilitation after your operation." },
      { q: "Can I use Medicare for knee physio?", a: "Eligible patients with a GPCCMP referral may claim a Medicare rebate, and can be bulk billed at our Jesmond, Yagoona and Parramatta clinics." },
    ],
    related: [
      { label: "Knee replacement rehabilitation", href: "/knee-replacement-rehabilitation-newcastle" },
      { label: "Arthritis physiotherapy", href: "/arthritis-physiotherapy-newcastle" },
      { label: "Hip pain physiotherapy", href: "/hip-pain-physiotherapy" },
      { label: "Sports injury physiotherapy", href: "/sports-injury-physiotherapy" },
      { label: "Bulk billing physiotherapy in Yagoona", href: "/bulk-billing-physiotherapy-yagoona" },
    ],
    ctaTitle: "Book knee physiotherapy",
  },
  "hip-pain-physiotherapy": {
    slug: "hip-pain-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    sectionIds: {
      "Hip osteoarthritis": "hip-osteoarthritis",
      "Lateral hip pain (hip bursitis and gluteal tendinopathy)": "lateral-hip-pain",
    },
    eyebrow: "Hip Pain Physiotherapy",
    h1: "Hip pain physiotherapy: arthritis and lateral hip pain",
    serviceName: "Hip Pain Physiotherapy",
    intro:
      "Physiotherapy for hip osteoarthritis, greater trochanteric pain syndrome ('hip bursitis') and gluteal tendinopathy — in clinic or at home.",
    lead: [
      "Hip pain is common and can affect walking, sleeping, climbing stairs and getting in and out of the car. Two of the most common causes we see are hip osteoarthritis, usually felt in the groin or front of the hip, and lateral hip pain, felt on the outside of the hip.",
      "Each responds best to a different approach, so a careful assessment comes first.",
    ],
    sections: [
      {
        h2: "Hip osteoarthritis",
        body: [
          "Hip osteoarthritis often causes groin or front-of-hip pain, stiffness (especially after rest), and reduced walking tolerance. Exercise and education are recommended first-line treatments.",
          "Programs focus on strengthening the hip and leg muscles, maintaining joint mobility, building walking capacity and practical strategies for daily tasks. If symptoms progress, we can help you prepare for an orthopaedic opinion or a hip replacement.",
        ],
      },
      {
        h2: "Lateral hip pain (hip bursitis and gluteal tendinopathy)",
        body: [
          "Pain on the outside of the hip — often called 'hip bursitis' — is now usually described as greater trochanteric pain syndrome. In many people the gluteal tendons are the main source of pain. It is often worse lying on the affected side, crossing the legs, standing on one leg or climbing stairs.",
          "Physiotherapy focuses on progressive strengthening of the gluteal muscles, avoiding positions that compress the tendons, and adjusting activity while the tendons adapt. Education and load management are key parts of care.",
        ],
      },
      {
        h2: "Assessment",
        body: [
          "We assess where your pain is, hip movement and strength, walking and single-leg control, and the activities that provoke symptoms. We also consider whether the lower back may be contributing.",
        ],
      },
    ],
    faqs: [
      { q: "Is lateral hip pain the same as bursitis?", a: "It's often called bursitis, but in many cases the gluteal tendons are the main source of pain. Treatment focuses on strengthening and load management." },
      { q: "Should I stop walking if my hip hurts?", a: "Not necessarily. We help you find an amount of walking that's manageable and gradually build it up." },
      { q: "Can you help after a hip replacement?", a: "Yes — see our hip replacement rehabilitation page for more detail." },
    ],
    related: [
      { label: "Hip replacement rehabilitation", href: "/hip-replacement-rehabilitation-newcastle" },
      { label: "Arthritis physiotherapy", href: "/arthritis-physiotherapy-newcastle" },
      { label: "Knee pain physiotherapy", href: "/knee-pain-physiotherapy" },
      { label: "Lower back pain physiotherapy", href: "/lower-back-pain-physiotherapy" },
      { label: "Article: staying active with arthritis", href: "/blog/staying-active-with-arthritis" },
    ],
    ctaTitle: "Book hip physiotherapy",
  },
  "sports-injury-physiotherapy": {
    slug: "sports-injury-physiotherapy",
    pathway: "clinic",
    region: "all",
    yagoonaCallout: true,
    breadcrumbParent: { name: "Services", href: "/services" },
    eyebrow: "Sports Injury Physiotherapy",
    h1: "Sports injury physiotherapy",
    serviceName: "Sports Injury Physiotherapy",
    intro:
      "Assessment and rehabilitation of sports-related muscle, tendon, ligament and joint injuries at our Jesmond, Yagoona and Parramatta clinics.",
    lead: [
      "Whether you play weekend sport, run, go to the gym or are returning to activity after time off, injuries can interrupt both training and everyday life.",
      "Our focus is a clear diagnosis, a rehabilitation plan matched to your sport, and a gradual return to training with the aim of reducing the risk of re-injury.",
    ],
    sections: [
      {
        h2: "Injuries we commonly see",
        body: ["Including:"],
        list: [
          "Ankle sprains",
          "Muscle strains (hamstring, calf, groin)",
          "Tendon pain (Achilles, patellar, gluteal, rotator cuff)",
          "Knee ligament and meniscus injuries",
          "Shoulder injuries",
          "Running-related overuse injuries",
        ],
      },
      {
        h2: "Rehabilitation and return to sport",
        body: [
          "Rehabilitation progresses from settling symptoms and restoring movement, through strength and conditioning, to sport-specific drills. Return-to-sport decisions are based on function and strength rather than time alone, and are made together with you.",
          "If your injury may need imaging or a sports physician or surgical opinion, we'll refer appropriately.",
        ],
      },
    ],
    faqs: [
      { q: "How soon should I see a physio after an injury?", a: "Early assessment helps guide what to do in the first few days and when to start loading the injured area. Seek urgent medical care for suspected fractures, dislocations or head injuries." },
      { q: "Do I need a referral?", a: "Not for private physiotherapy. You can book directly." },
    ],
    related: [
      { label: "Knee pain physiotherapy", href: "/knee-pain-physiotherapy" },
      { label: "Shoulder pain physiotherapy", href: "/shoulder-pain-physiotherapy" },
      { label: "Exercise rehabilitation", href: "/exercise-rehabilitation" },
      { label: "Clinic physiotherapy", href: "/clinic-physiotherapy" },
    ],
    ctaTitle: "Book sports injury physiotherapy",
  },
  "exercise-rehabilitation": {
    slug: "exercise-rehabilitation",
    pathway: "both",
    region: "all",
    breadcrumbParent: { name: "Services", href: "/services" },
    sectionIds: { "Strength and mobility rehabilitation": "strength-and-mobility" },
    eyebrow: "Exercise Rehabilitation",
    h1: "Exercise rehabilitation and strength programs",
    serviceName: "Exercise Rehabilitation",
    intro:
      "Individualised, physiotherapist-designed exercise programs to improve strength, flexibility, stability, endurance and physical function — in clinic or at home.",
    lead: [
      "Exercise is one of the most effective tools in physiotherapy. A well-designed program is matched to your condition, current capacity and goals, and progressed safely over time.",
      "Exercise rehabilitation is used after injury and surgery, for persistent musculoskeletal conditions, and for people who have lost strength or mobility through illness, hospital stays or reduced activity.",
    ],
    sections: [
      {
        h2: "What a program includes",
        body: ["Depending on your goals:"],
        list: [
          "Progressive strengthening",
          "Mobility and flexibility work",
          "Balance and stability training",
          "Walking and endurance",
          "Functional, task-specific practice",
          "A home program you can continue independently",
        ],
      },
      {
        h2: "Strength and mobility rehabilitation",
        body: [
          "For people with muscle weakness, deconditioning, reduced endurance or mobility limitations — often after illness, a hospital stay or a period of inactivity — we focus on rebuilding leg strength, walking ability and the ability to manage everyday tasks independently.",
          "These programs can be delivered at home, which is often easier for older adults and people recovering from hospital.",
        ],
      },
      {
        h2: "Who it suits",
        body: [
          "Exercise rehabilitation suits most people, including those with persistent pain, arthritis and other long-term conditions. Programs are adapted for your health, any medical precautions and your surgeon's or GP's advice.",
        ],
      },
    ],
    faqs: [
      { q: "I've never done much exercise — is this for me?", a: "Yes. Programs start at your current level and are progressed gradually." },
      { q: "Is it supervised?", a: "Your physiotherapist teaches and reviews each exercise, then progresses your program at follow-up appointments." },
    ],
    related: [
      { label: "Falls prevention physiotherapy", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "Senior exercise programs", href: "/senior-exercise-programs-newcastle" },
      { label: "Post-surgical rehabilitation", href: "/post-surgical-rehabilitation" },
      { label: "Home visit physiotherapy", href: "/home-visits" },
    ],
    ctaTitle: "Start an exercise rehabilitation program",
  },
  "ctp-physiotherapy": {
    slug: "ctp-physiotherapy",
    pathway: "both",
    region: "all",
    breadcrumbParent: { name: "Services", href: "/services" },
    eyebrow: "CTP Physiotherapy",
    h1: "CTP physiotherapy after a motor vehicle accident",
    serviceName: "CTP Physiotherapy",
    intro:
      "Physiotherapy for people injured in a motor vehicle accident with an eligible NSW Compulsory Third Party (CTP) claim — in clinic or at home.",
    lead: [
      "Injuries after a car accident — such as neck pain (whiplash-associated disorders), back pain and soft-tissue injuries — can affect sleep, work and daily activities.",
      "If you have an eligible NSW CTP claim, physiotherapy may be funded by the CTP insurer, subject to their approval and the scheme's requirements.",
    ],
    sections: [
      {
        h2: "What to bring",
        body: ["To help set up your treatment:"],
        list: [
          "Your CTP claim number and insurer details",
          "Any referral or reports from your GP or hospital",
          "Details of your injuries and current symptoms",
        ],
      },
      {
        h2: "Treatment",
        body: [
          "Treatment may include pain management strategies, movement rehabilitation, progressive strengthening and functional recovery, with the aim of returning to work and daily activities. We provide reports to your insurer and GP as required.",
          "We'll confirm what your insurer has approved before treatment so there are no surprises.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need an approved claim?", a: "CTP-funded treatment depends on your claim and insurer approval. If your claim is still being set up, call us and we'll explain your options." },
      { q: "Can you treat whiplash?", a: "Yes. Neck pain after a car accident is one of the most common injuries we see." },
    ],
    related: [
      { label: "Neck pain physiotherapy", href: "/neck-pain-physiotherapy" },
      { label: "Lower back pain physiotherapy", href: "/lower-back-pain-physiotherapy" },
      { label: "WorkCover physiotherapy", href: "/workers-compensation-physiotherapy" },
      { label: "Clinic physiotherapy", href: "/clinic-physiotherapy" },
    ],
    ctaTitle: "Book CTP physiotherapy",
  },
  "clinic-physiotherapy": {
    slug: "clinic-physiotherapy",
    pathway: "clinic",
    region: "all",
    yagoonaCallout: true,
    eyebrow: "Clinic Physiotherapy",
    h1: "Clinic physiotherapy in Sydney and Newcastle",
    serviceName: "Clinic Physiotherapy",
    intro:
      "Physiotherapy consultations inside GP practices in Jesmond, Yagoona and Parramatta — individual assessment, hands-on treatment and exercise-based rehabilitation.",
    lead: [
      "Fletcher Physiotherapy consults inside three GP practices: HealthSure Medical Centre Jesmond in Newcastle (Mondays), Yagoona Family HealthCare (Tuesdays) and Parramatta Medical and Dental Centre (Wednesdays).",
      "Seeing a physiotherapist inside your GP's practice keeps care simple. Referrals are easy, your GP can be kept up to date with your consent, and Medicare GP Chronic Condition Management Plan (GPCCMP) referrals fit naturally into the process.",
      "Clinic care is led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management).",
    ],
    sections: [
      {
        h2: "What we see in clinic",
        body: ["Clinic appointments suit people who can travel comfortably and want focused, one-to-one treatment."],
        list: [
          "Persistent (chronic) pain",
          "Back, neck and shoulder pain",
          "Arthritis and joint pain",
          "Sports and work injuries",
          "Rehabilitation after surgery",
          "Balance problems and falls risk",
          "Neck-related headaches",
          "Strength and conditioning after illness",
        ],
      },
      {
        h2: "Your first appointment",
        body: [
          "We start by listening — your history, what's changed, and what you want to get back to. We then assess how you move, test strength and joint function, and explain what we find in plain language.",
          "Treatment usually combines hands-on techniques where appropriate with exercise you can continue at home, so the progress you make in clinic carries into everyday life. You leave with a clear plan and know what to expect next.",
        ],
      },
      {
        h2: "Funding and payment",
        body: ["We see private patients (no referral needed) and patients funded through:"],
        list: [
          "Medicare — GP Chronic Condition Management Plan (GPCCMP); bulk billed for eligible patients at our Jesmond, Yagoona and Parramatta clinics",
          "DVA — Gold Card, or White Card for accepted conditions",
          "WorkCover (workers compensation) — with an approved claim",
          "CTP — eligible NSW motor vehicle accident claims",
          "NDIS — agency-, plan- and self-managed",
          "Support at Home",
          "Private health insurance — receipts provided for claims",
        ],
      },
      {
        h2: "How to book",
        body: [
          "Jesmond: book online or call us on 0404 791 756. Yagoona and Parramatta: appointments are booked through each medical centre's reception — the numbers are on each clinic page.",
          "Can't get to a clinic? We also provide home visit physiotherapy across Sydney, Newcastle, Lake Macquarie and the Central Coast.",
        ],
      },
    ],
    faqs: [
      { q: "Where are your physiotherapy clinics?", a: "Jesmond (HealthSure Medical Centre, Mondays), Yagoona (Yagoona Family HealthCare, 457 Hume Highway, Tuesdays) and Parramatta (Parramatta Medical and Dental Centre, Shop 1, 144 Marsden Street, Wednesdays)." },
      { q: "Do I need a referral?", a: "Not for private physiotherapy. A GP referral is needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP) and for DVA. WorkCover treatment needs an accepted claim." },
      { q: "Can I claim on my private health insurance?", a: "Yes — we provide receipts so you can claim with your fund. How much you get back depends on your level of cover." },
      { q: "Is clinic or home visit physiotherapy better for me?", a: "If you can travel comfortably, clinic appointments work well. If getting out is difficult, you're recovering from hospital, or your goals are about managing at home, a home visit is often the better choice. Call us and we'll help you decide." },
    ],
    related: [
      { label: "Bulk billing physiotherapy in Yagoona", href: "/bulk-billing-physiotherapy-yagoona" },
      { label: "Physiotherapy Jesmond", href: "/physiotherapy-jesmond" },
      { label: "Physiotherapy Yagoona", href: "/physiotherapy-yagoona" },
      { label: "Physiotherapy Parramatta", href: "/physiotherapy-parramatta" },
      { label: "Persistent Pain Physiotherapy", href: "/chronic-pain-management" },
      { label: "Lower back pain physiotherapy", href: "/lower-back-pain-physiotherapy" },
      { label: "Sports injury physiotherapy", href: "/sports-injury-physiotherapy" },
      { label: "All physiotherapy services", href: "/services" },
      { label: "Home Visit Physiotherapy", href: "/home-visits" },
    ],
    ctaTitle: "Book a clinic appointment",
  },
  "home-visits": {
    slug: "home-visits",
    pathway: "home",
    region: "all",
    whyHome: true,
    eyebrow: "Home Visit Physiotherapy",
    h1: "Home visit physiotherapy — we come to you",
    serviceName: "Home Visit Physiotherapy",
    intro:
      "Physiotherapy in your home, retirement village or aged care residence across Sydney, Newcastle, Lake Macquarie and the Central Coast.",
    lead: [
      "For many people the hardest part of physiotherapy is getting there. Home visits remove the travel, parking and waiting rooms — and let us work on the exact places where everyday life happens: your stairs, your bathroom, your favourite chair.",
      "We visit older adults, NDIS participants, Support at Home clients, people recovering after hospital or surgery, and residents of aged care and retirement living.",
      "Home visits also make life easier for GPs and care coordinators: send a referral and we arrange the visit, liaise with the family and send clear reports — less administration for you.",
    ],
    sections: [
      {
        h2: "Where we visit",
        body: [
          "Sydney: around Sydney Olympic Park and the Inner West, the Parramatta area, and Bankstown–Yagoona.",
          "Newcastle and Lake Macquarie, the lower Hunter, and the Central Coast.",
        ],
      },
      {
        h2: "Who home visits help",
        body: ["Home visits suit anyone who finds it hard, tiring or unsafe to get to a clinic."],
        list: [
          "Older adults wanting to stay independent",
          "Falls prevention and balance",
          "NDIS participants",
          "Support at Home and aged care clients",
          "Recovery after hospital or surgery",
          "Persistent pain and musculoskeletal conditions",
          "Residential aged care and retirement living",
          "Neurological conditions such as stroke and Parkinson's",
        ],
      },
      {
        h2: "Funding",
        body: [
          "We see private clients and clients funded through NDIS (agency-, plan- and self-managed), Support at Home, Medicare GPCCMP, DVA and WorkCover. We'll explain what applies to you before the first visit.",
        ],
      },
    ],
    faqs: [
      { q: "Which areas do you visit?", a: "Sydney (Sydney Olympic Park, the Inner West, the Parramatta area and Bankstown–Yagoona), Newcastle, Lake Macquarie, the lower Hunter and the Central Coast. Call us to check your suburb." },
      { q: "How long is a home visit?", a: "The first visit is about 60 minutes and includes assessment, goals and a home program. Follow-up visits are usually shorter." },
      { q: "How quickly can you visit?", a: "We aim to call you back within 24 hours and the first visit is usually within a week." },
      { q: "Can family members be there?", a: "Yes. Family and carers are welcome — it often helps them support the program between visits." },
    ],
    related: [
      { label: "Home Visits — Sydney", href: "/home-visit-physiotherapy-sydney" },
      { label: "Home Visits — Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Home Visits — Central Coast", href: "/physiotherapy-central-coast" },
      { label: "Aged Care Physiotherapy", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Falls Prevention", href: "/falls-prevention-physiotherapy-newcastle" },
    ],
    ctaTitle: "Book a home visit",
  },
  "home-visit-physiotherapy-sydney": {
    slug: "home-visit-physiotherapy-sydney",
    pathway: "home",
    region: "sydney",
    whyHome: true,
    breadcrumbParent: { name: "Home Visits", href: "/home-visits" },
    eyebrow: "Home Visit Physiotherapy Sydney",
    h1: "Home visit physiotherapy in Sydney",
    serviceName: "Home Visit Physiotherapy Sydney",
    intro:
      "Mobile physiotherapy at home around Sydney Olympic Park, the Inner West, Parramatta and Bankstown–Yagoona — for older adults, NDIS, Support at Home and rehabilitation.",
    lead: [
      "Our Sydney home visit service covers Sydney Olympic Park and the Inner West — including Homebush, Strathfield, Concord, Rhodes, Lidcombe, Auburn, Newington, Wentworth Point, Silverwater and Burwood — as well as the Parramatta area and Bankstown–Yagoona.",
      "Much of Sydney living is in apartments, so we regularly work on the things clinics can't see: lifts and corridors, compact bathrooms, building entries and the walk to the car park or the street.",
      "Home visits are led by Daniel Lee, an APA Titled Pain Physiotherapist. We also see clinic patients at Yagoona and Parramatta.",
    ],
    sections: [
      {
        h2: "Who we visit in Sydney",
        body: ["We focus on people for whom getting to a clinic is difficult, or whose goals are about managing safely at home."],
        list: [
          "Older adults and their families",
          "NDIS participants",
          "Support at Home clients",
          "Residential aged care and retirement living",
          "Recovery after hospital or surgery",
          "Falls prevention and balance",
        ],
      },
      {
        h2: "Funding",
        body: [
          "NDIS (agency-, plan- and self-managed), Support at Home, Medicare GPCCMP, DVA, WorkCover and private clients are all welcome.",
        ],
      },
      {
        h2: "For GPs and coordinators in Sydney",
        body: [
          "Send a referral and we take it from there: we contact the client or family, arrange the visit and send clear reports to you with consent. Nearby hospitals include Concord Repatriation General, Auburn, Westmead and Bankstown-Lidcombe.",
        ],
      },
    ],
    faqs: [
      { q: "Which Sydney suburbs do you visit?", a: "Sydney Olympic Park and the Inner West (including Homebush, Strathfield, Concord, Rhodes, Lidcombe, Auburn, Newington, Wentworth Point, Silverwater and Burwood), the Parramatta area and Bankstown–Yagoona. Call to check your suburb." },
      { q: "Can you visit apartments?", a: "Yes — most of our Sydney visits are in apartments. Let us know about parking, building access and lifts when you book." },
      { q: "Do you also have Sydney clinics?", a: "Yes. We consult at Yagoona Family HealthCare (Tuesdays) and Parramatta Medical and Dental Centre (Wednesdays), booked through each clinic's reception." },
      { q: "Do you see NDIS participants at home in Sydney?", a: "Yes. We're a registered NDIS provider (NDIS0023718) and see agency-, plan- and self-managed participants." },
    ],
    related: [
      { label: "Sydney physiotherapy overview", href: "/physiotherapy-sydney" },
      { label: "NDIS Physiotherapy Sydney", href: "/ndis-physiotherapy-sydney" },
      { label: "Physiotherapy Parramatta (clinic)", href: "/physiotherapy-parramatta" },
      { label: "Physiotherapy Yagoona (clinic)", href: "/physiotherapy-yagoona" },
      { label: "Home visits overview", href: "/home-visits" },
    ],
    ctaTitle: "Book a home visit in Sydney",
  },
  "musculoskeletal-physiotherapy": {
    slug: "musculoskeletal-physiotherapy",
    pathway: "both",
    region: "all",
    yagoonaCallout: true,
    eyebrow: "Musculoskeletal Physiotherapy",
    h1: "Musculoskeletal physiotherapy",
    serviceName: "Musculoskeletal Physiotherapy",
    intro:
      "Assessment and treatment of back, neck, shoulder, hip, knee and other joint and muscle problems — in clinic or at home.",
    lead: [
      "Musculoskeletal problems are conditions affecting muscles, joints, tendons and the spine. They range from a recent sprain to back pain that keeps coming back.",
      "Good musculoskeletal physiotherapy starts with a clear explanation of what's going on, followed by a plan that combines hands-on treatment where it helps with exercise you can do yourself — so you're not dependent on appointments.",
    ],
    sections: [
      {
        h2: "Common problems we treat",
        body: ["Including, but not limited to:"],
        list: [
          "Low back pain and sciatica",
          "Neck pain and neck-related headaches",
          "Shoulder pain and stiffness",
          "Hip and knee pain, including osteoarthritis",
          "Tendon problems",
          "Sprains, strains and work injuries",
        ],
      },
      {
        h2: "Our approach",
        body: [
          "We assess how you move and what aggravates or eases your symptoms, rule out anything that needs a doctor's review, and agree on goals that matter to you.",
          "Treatment may include joint and soft-tissue techniques, graded exercise, advice on activity and workload, and education about pain — progressed as you improve.",
        ],
      },
      {
        h2: "Clinic or home?",
        body: [
          "Most musculoskeletal problems are well suited to clinic appointments in Jesmond, Yagoona or Parramatta. If travel is difficult, we can treat you at home.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a scan before physiotherapy?", a: "Usually not. Most musculoskeletal problems can be assessed clinically. If we think imaging or a medical review is needed, we'll explain why and liaise with your GP." },
      { q: "How many sessions will I need?", a: "It depends on the problem and your goals. We'll give you an estimate after the first assessment and review it as you progress." },
      { q: "Can I use Medicare, DVA or WorkCover?", a: "Yes — with a GPCCMP referral, DVA referral or an accepted WorkCover claim. Private patients don't need a referral." },
    ],
    related: [
      { label: "Persistent Pain Physiotherapy", href: "/chronic-pain-management" },
      { label: "Post-Surgical Rehabilitation", href: "/post-surgical-rehabilitation" },
      { label: "Lower back pain physiotherapy", href: "/lower-back-pain-physiotherapy" },
      { label: "Neck pain physiotherapy", href: "/neck-pain-physiotherapy" },
      { label: "Shoulder pain physiotherapy", href: "/shoulder-pain-physiotherapy" },
      { label: "Knee pain physiotherapy", href: "/knee-pain-physiotherapy" },
      { label: "Hip pain physiotherapy", href: "/hip-pain-physiotherapy" },
      { label: "WorkCover Physiotherapy", href: "/workers-compensation-physiotherapy" },
      { label: "Clinic Physiotherapy", href: "/clinic-physiotherapy" },
    ],
    ctaTitle: "Book a musculoskeletal assessment",
  },
  "post-surgical-rehabilitation": {
    slug: "post-surgical-rehabilitation",
    pathway: "both",
    region: "all",
    eyebrow: "Post-Surgical Rehabilitation",
    h1: "Post-surgical rehabilitation",
    serviceName: "Post-Surgical Rehabilitation",
    intro:
      "Structured physiotherapy after joint replacement, spinal, shoulder and other orthopaedic surgery — at home in the early weeks, then in clinic as you progress.",
    lead: [
      "The weeks after surgery are when strength and confidence are often lowest. A structured rehabilitation plan, following your surgeon's protocol, helps you rebuild movement, strength and independence safely.",
      "Many people start with home visits — when getting in and out of the car is still hard — and move to clinic appointments as they improve. We can provide both.",
    ],
    sections: [
      {
        h2: "Surgery we commonly rehabilitate",
        body: ["We work to your surgeon's guidelines and liaise with your treating team when needed."],
        list: [
          "Hip and knee replacement",
          "Shoulder surgery and rotator cuff repair",
          "Spinal surgery",
          "Fracture fixation",
          "Ligament and tendon repairs",
          "Rehabilitation after a hospital stay",
        ],
      },
      {
        h2: "What rehabilitation involves",
        body: [
          "Early on: safe transfers, walking with or without an aid, swelling and pain management, and gentle range of movement. Later: progressive strengthening, balance, and return to the activities, work or sport you want.",
          "Starting physiotherapy before surgery (prehabilitation) can also help you prepare.",
        ],
      },
    ],
    faqs: [
      { q: "When should I start physiotherapy after surgery?", a: "Follow your surgeon's advice — for many procedures it's within days of going home. Call us before your surgery and we can plan your first visit." },
      { q: "Can you come to my home after surgery?", a: "Yes. Home visits are often easiest in the first weeks; we can then continue in clinic." },
      { q: "Is post-surgical physio covered?", a: "Private health insurance, DVA, WorkCover (for accepted work injuries) and some rehabilitation programs may contribute. We'll explain your options." },
    ],
    related: [
      { label: "Hip Replacement Rehabilitation", href: "/hip-replacement-rehabilitation-newcastle" },
      { label: "Knee Replacement Rehabilitation", href: "/knee-replacement-rehabilitation-newcastle" },
      { label: "Musculoskeletal Physiotherapy", href: "/musculoskeletal-physiotherapy" },
      { label: "Home Visits", href: "/home-visits" },
    ],
    ctaTitle: "Plan your rehabilitation",
  },
  "workers-compensation-physiotherapy": {
    slug: "workers-compensation-physiotherapy",
    pathway: "both",
    region: "all",
    eyebrow: "WorkCover Physiotherapy",
    h1: "WorkCover (workers compensation) physiotherapy",
    serviceName: "Workers Compensation Physiotherapy",
    intro:
      "Physiotherapy for work-related injuries under NSW workers compensation — at our Jesmond, Yagoona and Parramatta clinics or at home.",
    lead: [
      "If you've been injured at work and have a workers compensation claim, physiotherapy can help you recover and return to work safely.",
      "We work with your nominated treating doctor, the insurer and your employer's return-to-work team, keeping everyone informed with clear, timely reports.",
    ],
    sections: [
      {
        h2: "What to bring",
        body: ["To help us set up your treatment, please bring or send:"],
        list: [
          "Your claim number and insurer details",
          "Your employer's details",
          "Your current certificate of capacity",
          "Any referral or reports from your doctor",
        ],
      },
      {
        h2: "How treatment works",
        body: [
          "We assess your injury and your work demands, then build a plan focused on function and a safe return to work. Treatment is provided in line with the insurer's requirements — we'll check what's approved before your first session so there are no surprises.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need an approved claim?", a: "Yes. Treatment is paid by the insurer once your claim is accepted and treatment is approved. If your claim is still pending, call us and we'll explain your options." },
      { q: "Can I be seen at home for a work injury?", a: "Yes, where clinically appropriate and approved by the insurer." },
      { q: "Will you talk to my doctor and employer?", a: "With your consent, we communicate with your treating doctor, the insurer and your employer's return-to-work coordinator." },
    ],
    related: [
      { label: "Musculoskeletal Physiotherapy", href: "/musculoskeletal-physiotherapy" },
      { label: "Clinic Physiotherapy", href: "/clinic-physiotherapy" },
      { label: "Post-Surgical Rehabilitation", href: "/post-surgical-rehabilitation" },
    ],
    ctaTitle: "Book WorkCover physiotherapy",
  },
  "dva-physiotherapy": {
    slug: "dva-physiotherapy",
    pathway: "both",
    region: "all",
    eyebrow: "DVA Physiotherapy",
    h1: "DVA physiotherapy for veterans",
    serviceName: "DVA Physiotherapy",
    intro:
      "Physiotherapy for DVA Gold and White Card holders — at our Jesmond, Yagoona and Parramatta clinics, or at home across Sydney, Newcastle and the Central Coast.",
    lead: [
      "Veterans and eligible family members with a Department of Veterans' Affairs (DVA) card can receive physiotherapy funded by DVA when it's clinically required.",
      "Gold Card holders are covered for clinically necessary treatment. White Card holders are covered for accepted conditions. You'll need a referral from your GP or treating doctor.",
    ],
    sections: [
      {
        h2: "Clinic or home",
        body: [
          "We see DVA patients at our clinics in Jesmond (Mondays), Yagoona (Tuesdays) and Parramatta (Wednesdays), and at home across Sydney, Newcastle, Lake Macquarie and the Central Coast.",
        ],
      },
      {
        h2: "What we help with",
        body: ["Common reasons veterans see us include:"],
        list: [
          "Persistent pain",
          "Back, neck and joint pain",
          "Balance and falls prevention",
          "Recovery after surgery or hospital",
          "Strength and mobility to stay independent",
        ],
      },
    ],
    faqs: [
      { q: "What do I need for DVA physiotherapy?", a: "Your DVA card and a referral from your GP or treating doctor. Bring both to your first appointment." },
      { q: "Do I pay anything?", a: "DVA-funded treatment for eligible card holders is paid by DVA. We'll confirm the details before your first appointment." },
      { q: "Can you visit me at home?", a: "Yes, where clinically appropriate — across Sydney, Newcastle, Lake Macquarie and the Central Coast." },
    ],
    related: [
      { label: "Clinic Physiotherapy", href: "/clinic-physiotherapy" },
      { label: "Home Visits", href: "/home-visits" },
      { label: "Falls Prevention", href: "/falls-prevention-physiotherapy-newcastle" },
    ],
    ctaTitle: "Book DVA physiotherapy",
  },
  "home-visit-physiotherapy-newcastle": {
    slug: "home-visit-physiotherapy-newcastle",
    whyHome: true,
    eyebrow: "Home Visit Physiotherapy Newcastle",
    h1: "Home Visit Physiotherapy in Newcastle",
    serviceName: "Home Visit Physiotherapy Newcastle",
    intro:
      "Professional home visit physiotherapy in Newcastle for older adults, NDIS participants and Support at Home clients — experienced care delivered in the comfort and safety of your own home.",
    lead: [
      "Fletcher Physiotherapy provides dedicated home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast. Instead of asking you to travel to a clinic, our mobile physiotherapists come to you — bringing the equipment, assessment and treatment you need directly to your living room, bedroom or backyard.",
      "For many Novocastrians, getting to a physiotherapy clinic is the hardest part of recovery. Traffic, parking, stairs, waiting rooms and the effort of transferring in and out of a car can be exhausting or simply impossible. Home visit physiotherapy removes those barriers entirely, so you can focus on getting stronger and moving better.",
      "Led by an APA Titled Pain Physiotherapist, our team delivers evidence-based, individualised care with a focus on long-term independence — helping you stay confident, mobile and safe in the home you love.",
    ],
    sections: [
      {
        h2: "What is home visit physiotherapy?",
        body: [
          "Home visit physiotherapy — also called mobile or in-home physiotherapy — is exactly what it sounds like: a qualified physiotherapist visits you at home to assess, treat and rehabilitate you in your own environment. It is the same high-quality care you would receive in a clinic, delivered where it is most convenient and most relevant to your daily life.",
          "Being treated at home is not just easier; it is clinically powerful. We can see the real stairs you struggle with, the chair you find hard to rise from, the bathroom where falls are a risk, and the hallway you walk every day. That means your program is built around your actual environment, and the gains you make translate directly into real-world independence.",
        ],
      },
      {
        h2: "Who benefits from home physiotherapy in Newcastle?",
        body: [
          "Home visit physiotherapy suits anyone who finds it difficult, tiring or unsafe to travel to a clinic. It is especially valuable for older adults, people living with disability, and those recovering from surgery, illness or a hospital stay.",
          "We regularly support families across Newcastle who want the best care for an ageing parent, as well as NDIS participants, Support at Home clients (formerly Home Care Packages), and people referred under a GP Chronic Condition Management Plan (GPCCMP).",
        ],
        list: [
          "Older adults wanting to stay independent at home",
          "Adult children arranging care for their parents",
          "NDIS participants working toward functional goals",
          "Support at Home clients",
          "People recovering after a hospital discharge",
          "Anyone for whom travel to a clinic is difficult",
        ],
      },
      {
        h2: "Elderly care, mobility and strength",
        body: [
          "A large part of our work is helping older adults maintain and rebuild the mobility and strength that underpin independent living. Small losses in leg strength or balance can quickly make everyday tasks — standing from a chair, climbing steps, walking to the letterbox — feel daunting.",
          "Our physiotherapists design gentle, progressive strength and mobility programs that fit your ability and your goals. Over time, these programs restore the confidence to move freely, reduce reliance on others, and help you keep doing the things that matter most.",
        ],
      },
      {
        h2: "Falls prevention and hospital discharge rehabilitation",
        body: [
          "Falls are one of the biggest threats to independence in later life, and the risk can often be reduced. We provide thorough balance assessments, targeted strength and balance training, and a review of hazards around your home to help reduce your falls risk.",
          "Returning home after a hospital stay is another vulnerable time. Our home-based rehabilitation helps you recover safely after surgery, illness or a fall — rebuilding strength, restoring function and helping you get back to daily life, all within the comfort of your own home.",
        ],
      },
      {
        h2: "Support at Home funding for physiotherapy",
        body: [
          "Physiotherapy is an allied health service that can be funded through Support at Home — the program that replaced Home Care Packages on 1 November 2025 — when it supports your assessed needs and goals, such as improving mobility, building strength or reducing falls risk. Your Support at Home provider arranges services within your budget; we work alongside them and can supply any documentation your provider needs.",
          "If you are unsure whether your Support at Home budget covers physiotherapy, or how to arrange it, we are happy to talk it through and guide you and your family through the process.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you provide physiotherapy at home in Newcastle?",
        a: "Yes. Home visits are our core service. Our mobile physiotherapists come to you across Newcastle, Lake Macquarie and the Central Coast — no travel, parking or waiting rooms.",
      },
      {
        q: "How much does home visit physiotherapy cost?",
        a: "Costs depend on your funding — NDIS, Support at Home or private. Contact us and we'll explain the options clearly, with no obligation.",
      },
      {
        q: "Do I need a GP referral for home physiotherapy?",
        a: "Not for private physiotherapy — you can contact us directly. A GP referral may be required for certain funding streams such as a GP Chronic Condition Management plan.",
      },
    ],
    related: [
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
      { label: "Support at Home Physiotherapy Newcastle", href: "/support-at-home-physiotherapy-newcastle" },
    ],
    ctaTitle: "Book home visit physiotherapy in Newcastle today",
  },

  "mobile-physiotherapist-newcastle": {
    slug: "mobile-physiotherapist-newcastle",
    whyHome: true,
    eyebrow: "Mobile Physiotherapist Newcastle",
    h1: "Mobile Physiotherapist in Newcastle",
    serviceName: "Mobile Physiotherapist Newcastle",
    intro:
      "Looking for a mobile physiotherapist in Newcastle? Fletcher Physiotherapy comes to you — delivering experienced, evidence-based physiotherapy in your own home across Newcastle, Lake Macquarie and the Central Coast.",
    lead: [
      "A mobile physiotherapist is a fully qualified physiotherapist who travels to wherever you are — your home, a retirement village, an aged-care facility or supported accommodation — rather than treating you at a clinic. Where home visit physiotherapy is specifically care in your own home, our mobile service reaches you wherever you live or stay across the Newcastle region.",
      "Fletcher Physiotherapy is a dedicated mobile physiotherapy service. We are not a clinic that occasionally does home visits — coming to you is what we do. That focus means our whole approach, from assessment to equipment, is built around delivering the best possible outcomes in your home.",
      "Our service is led by an APA Titled Pain Physiotherapist and covers all of Newcastle and the surrounding Hunter region, with a special focus on aged care, NDIS, Support at Home clients.",
    ],
    sections: [
      {
        h2: "Why choose a mobile physiotherapist?",
        body: [
          "The biggest advantage of a mobile physiotherapist is convenience without compromise. You receive the same thorough assessment and hands-on treatment you would in a clinic, but without the travel, parking, stairs or waiting rooms that can make attending appointments so hard.",
          "There is also a real clinical benefit. Treating you in your own home lets your physiotherapist see and address the exact challenges you face day to day — from the height of your bed to the layout of your kitchen — so your rehabilitation is directly relevant to your life.",
        ],
        list: [
          "No travel, parking or waiting rooms",
          "Care in a familiar, comfortable setting",
          "Assessment in your real environment",
          "Equipment brought to your door",
          "Flexible appointment times",
          "Ideal for limited mobility or fatigue",
        ],
      },
      {
        h2: "What can a mobile physio treat?",
        body: [
          "Our mobile physiotherapists treat a wide range of conditions and goals. Much of our work involves helping older adults maintain mobility, strength and balance, but we also support people recovering from surgery, managing chronic pain, or rebuilding function after a hospital stay.",
          "Every visit begins with a comprehensive assessment, followed by a personalised plan combining hands-on treatment, exercise and practical advice you can use between sessions.",
        ],
        list: [
          "Mobility and walking difficulties",
          "Balance problems and falls risk",
          "Strength and conditioning",
          "Post-surgical and post-hospital recovery",
          "Chronic and persistent pain",
          "Musculoskeletal aches and injuries",
        ],
      },
      {
        h2: "Serving Newcastle, Lake Macquarie and the Central Coast",
        body: [
          "As a mobile service, we cover a wide area across Newcastle, Lake Macquarie, the Central Coast and the broader Hunter region. That includes suburbs such as Charlestown, Belmont, Warners Bay, Cardiff, Fletcher, New Lambton, Gosford and Wyong.",
          "If you are not sure whether we reach your suburb, just get in touch — we are always happy to confirm availability in your area.",
        ],
      },
      {
        h2: "Funding your mobile physiotherapy",
        body: [
          "We work with a range of funding options so cost is rarely a barrier to care. These include NDIS (self, plan and agency managed), Support at Home (formerly Home Care Packages), GP Chronic Condition Management Plans (GPCCMP) and private clients.",
          "Not sure which applies to you? Contact our friendly team and we will walk you through the options in plain language.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a mobile physiotherapist?",
        a: "A mobile physiotherapist is a qualified physiotherapist who visits you at home to assess and treat you, rather than working from a clinic. You receive the same quality of care, delivered where it's most convenient.",
      },
      {
        q: "Do you cover my suburb in Newcastle?",
        a: "We cover Newcastle, Lake Macquarie, the Central Coast and the wider Hunter region. If your suburb isn't listed on our site, contact us and we'll confirm availability.",
      },
      {
        q: "How do I book a mobile physio visit?",
        a: "You can book online through our contact page or call us on 0404 791 756. We'll confirm your appointment and answer any questions about funding.",
      },
    ],
    related: [
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
    ],
    ctaTitle: "Book a mobile physiotherapist in Newcastle",
  },

  "aged-care-physiotherapy-newcastle": {
    slug: "aged-care-physiotherapy-newcastle",
    eyebrow: "Aged Care Physiotherapy Newcastle",
    h1: "Aged Care Physiotherapy in Newcastle",
    serviceName: "Aged Care Physiotherapy Newcastle",
    intro:
      "Aged care physiotherapy in Newcastle, delivered at home. We help older adults improve balance, strength and walking confidence so they can stay safely independent.",
    lead: [
      "Fletcher Physiotherapy provides aged care physiotherapy across Newcastle, Lake Macquarie and the Central Coast, focused entirely on helping older adults live well and independently at home. Our mobile physiotherapists bring experienced, gentle, goal-focused care directly to you.",
      "As we age, gradual changes in strength, balance and mobility can quietly chip away at confidence and independence. The good news is that these changes respond remarkably well to the right physiotherapy — it is never too late to get stronger and steadier.",
      "Our team is led by an APA Titled Pain Physiotherapist with extensive experience supporting older adults, complex conditions and functional rehabilitation. Every program is tailored to your ability, your home and the goals that matter most to you.",
    ],
    sections: [
      {
        h2: "Balance training for older adults",
        body: [
          "Balance naturally declines with age, but it can be trained and improved at any stage of life. Our physiotherapists assess your balance carefully, then build a safe, progressive program that challenges and strengthens the systems your body relies on to stay steady.",
          "Because we train you in your own home, the improvements carry directly into the places you actually move — around furniture, on rugs, in the bathroom and up steps.",
        ],
      },
      {
        h2: "Strength for independence",
        body: [
          "Muscle strength is the foundation of independent living. Strong legs let you stand from a chair, climb stairs and walk without fear; strong arms help with everyday tasks and safe transfers.",
          "We design gentle strengthening programs suited to older adults — using body weight, resistance bands and simple equipment — that build capacity gradually and safely, with no gym required.",
        ],
        list: [
          "Sit-to-stand and chair-rise strength",
          "Leg and hip strengthening",
          "Safe transfers and getting off the floor",
          "Grip and upper-body strength",
          "Progressive, home-based programs",
          "Simple equipment we bring to you",
        ],
      },
      {
        h2: "Falls prevention",
        body: [
          "Falls are the number one cause of accidental injury in older Australians — and the risk can often be reduced. Our aged care physiotherapy combines balance and strength work with a review of hazards around your home to meaningfully reduce your risk.",
          "We also address the fear of falling, which can be just as limiting as a fall itself, by rebuilding your confidence to move through graded, supported practice.",
        ],
      },
      {
        h2: "Walking confidence and independence",
        body: [
          "Many older adults tell us they have stopped walking as far as they used to — not because they cannot, but because they no longer feel confident. We help restore that confidence through gait training, endurance work and, where helpful, advice on walking aids.",
          "The goal is always the same: to keep you doing the things you enjoy, connected to your community, and living independently in your own home for as long as possible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it too late for my parent to benefit from physiotherapy?",
        a: "It's almost never too late. Strength and balance can improve at any age with the right program. Even frail older adults often see meaningful gains in mobility, confidence and independence.",
      },
      {
        q: "Can aged care physiotherapy be funded through Support at Home?",
        a: "Yes. Physiotherapy can be funded through Support at Home (which replaced Home Care Packages) when it supports your assessed needs and goals. We work directly with your provider and care plan.",
      },
      {
        q: "Do you visit at home for aged care physiotherapy?",
        a: "Yes — all our aged care physiotherapy is delivered at home across Newcastle, Lake Macquarie and the Central Coast.",
      },
    ],
    related: [
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Support at Home Physiotherapy Newcastle", href: "/support-at-home-physiotherapy-newcastle" },
      { label: "Mobile Physiotherapist Newcastle", href: "/mobile-physiotherapist-newcastle" },
    ],
    ctaTitle: "Support your loved one to stay independent at home",
  },

  "ndis-physiotherapy-newcastle": {
    slug: "ndis-physiotherapy-newcastle",
    eyebrow: "NDIS Physiotherapy Newcastle",
    h1: "NDIS Home Physiotherapy in Newcastle",
    serviceName: "NDIS Physiotherapy",
    intro: "Registered NDIS provider delivering physiotherapy at home across Newcastle, Lake Macquarie and the Central Coast — functional assessments, goal-focused therapy and clear reports for participants, support coordinators and plan managers.",
    lead: [
      "Fletcher Physiotherapy is a registered NDIS provider (registration number NDIS0023718). We deliver home-based NDIS physiotherapy across Newcastle, Lake Macquarie and the Central Coast — and around Sydney Olympic Park and the Inner West — for agency-managed, plan-managed and self-managed participants.",
      "Every plan and every participant is different. We start with your goals — walking further, moving or transferring more safely, building strength, managing pain or joining in the activities you enjoy — and design physiotherapy that works toward them in the place it matters most: your home and community.",
      "This page is also written for support coordinators and plan managers: it explains how physiotherapy is usually funded, what our assessments and reports include, and what we need to accept a referral.",
    ],
    sections: [
      {
        h2: "Registered NDIS provider",
        body: [
          "Being registered with the NDIS Quality and Safeguards Commission means we can support participants whose plans are agency-managed (NDIA-managed), as well as plan-managed and self-managed participants.",
          "Our fees follow the NDIS Pricing Arrangements and Price Limits, and we confirm the expected number of sessions, travel and any report time with the participant (and their coordinator, if they have one) before services start, in a written service agreement.",
        ],
      },
      {
        h2: "How NDIS physiotherapy is usually funded",
        body: [
          "Physiotherapy is most commonly funded from the Capacity Building – Improved Daily Living budget, where therapy supports relate to the goals in the participant's plan. Assessments and reports are generally funded from the same budget.",
          "The NDIA decides whether a support is reasonable and necessary. Our role is to provide clear, specific clinical evidence — what the participant can and can't do, why, and what therapy or equipment is recommended — so planners can make that decision.",
        ],
      },
      {
        h2: "Mobile functional assessments at home",
        body: [
          "Assessing someone in their own home shows how their disability actually affects daily life — the real bed, chair, bathroom, steps and community access they use every day. Our physiotherapy functional assessment typically looks at:",
        ],
        list: [
          "Mobility, walking endurance and community access",
          "Transfers — bed, chair, toilet, car",
          "Balance and falls risk",
          "Strength, range of movement and fatigue",
          "Pain and how it limits function",
          "Use and suitability of mobility aids and equipment",
          "Home environment and safety",
          "Goals, with recommended therapy frequency and duration",
        ],
      },
      {
        h2: "Functional capacity assessments (FCAs)",
        body: [
          "A broad NDIS functional capacity assessment covers areas such as mobility, self-care, communication, social interaction, learning and self-management, and is often led by an occupational therapist. We provide the physiotherapy component — detailed evidence on mobility, transfers, balance, strength and physical function — either as a stand-alone physiotherapy assessment or alongside the participant's OT and other team members.",
          "If you're unsure which type of assessment a participant needs, call us and we'll talk it through before anything is booked.",
        ],
      },
      {
        h2: "Reports for plan reviews and funding requests",
        body: [
          "Good NDIS physiotherapy is backed by clear documentation. Depending on the participant's needs we provide initial assessment reports, progress reports, end-of-plan or plan-review reports, and assistive technology recommendations such as walking aids.",
          "Reports are written to be useful to planners: they link findings to the participant's goals, use standardised outcome measures where appropriate, and set out specific recommendations. We agree the report type and timeframe at referral.",
        ],
      },
      {
        h2: "For support coordinators: what we need with a referral",
        body: [
          "To accept a referral and get started quickly, it helps to send:",
        ],
        list: [
          "Participant name, contact details and suburb",
          "How the plan is managed (agency, plan or self-managed) and plan manager details",
          "Plan dates and the Improved Daily Living funding available for physiotherapy",
          "The participant's goals and the reason for referral",
          "Any relevant reports, diagnoses or precautions",
          "The participant's consent to share their information",
        ],
      },
      {
        h2: "Therapy that builds independence",
        body: [
          "Between assessments, therapy focuses on function — practical programs for mobility, strength, balance, pain and daily tasks, delivered at home and backed by a home exercise program.",
          "We also work with families, carers and support workers so the people around the participant can support progress safely between visits.",
        ],
        list: [
          "Mobility and transfers",
          "Strength and conditioning",
          "Balance and falls prevention",
          "Pain management",
          "Functional daily-living skills",
          "Home exercise programs",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you a registered NDIS provider?",
        a: "Yes. Fletcher Physiotherapy is a registered NDIS provider (registration number NDIS0023718), so we can support agency-managed, plan-managed and self-managed participants.",
      },
      {
        q: "Which NDIS budget pays for physiotherapy?",
        a: "Physiotherapy is most commonly funded under Capacity Building – Improved Daily Living, linked to the goals in the participant's plan. The NDIA decides what is reasonable and necessary for each person.",
      },
      {
        q: "Can you do an NDIS functional assessment at home?",
        a: "Yes. We assess participants in their own home and community, covering mobility, transfers, balance, strength, pain, equipment and home safety. For a broad functional capacity assessment, we provide the physiotherapy component and can work alongside the participant's occupational therapist.",
      },
      {
        q: "Do you provide reports for NDIS plan reviews?",
        a: "Yes — initial assessment, progress and plan-review reports, plus assistive technology recommendations such as walking aids. We agree the report type and timeframe when we accept the referral.",
      },
      {
        q: "How much does NDIS physiotherapy cost?",
        a: "Our fees follow the NDIS Pricing Arrangements and Price Limits. Before services start, we set out the expected sessions, travel and report time in a service agreement so there are no surprises.",
      },
      {
        q: "How do I refer an NDIS participant?",
        a: "Use our online referral form or call 0404 791 756. Include the plan management type, plan dates, goals and the participant's consent, and we'll contact the participant to arrange an initial home visit.",
      },
      {
        q: "Do you see NDIS participants in Sydney?",
        a: "We provide mobile physiotherapy around Sydney Olympic Park, the Inner West and surrounding suburbs. See our NDIS physiotherapy Sydney page, or call us to check availability for a participant's suburb.",
      },
    ],
    related: [
      { label: "Refer a Patient", href: "/refer-a-patient" },
      { label: "Support at Home Physiotherapy", href: "/support-at-home-physiotherapy-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "NDIS Physiotherapy: A Complete Guide", href: "/blog/ndis-physiotherapy-complete-guide" },
      { label: "NDIS Physiotherapy Sydney", href: "/ndis-physiotherapy-sydney" },
      { label: "Mobile Physiotherapy Sydney", href: "/physiotherapy-sydney" },
    ],
    ctaTitle: "Refer an NDIS participant or book a home assessment",
  },

  "support-at-home-physiotherapy-newcastle": {
    slug: "support-at-home-physiotherapy-newcastle",
    eyebrow: "Support at Home Physiotherapy",
    h1: "Support at Home Physiotherapy (formerly Home Care Packages)",
    serviceName: "Support at Home Physiotherapy",
    intro: "How to get physiotherapy at home through Support at Home — the program that replaced Home Care Packages — across Newcastle, Lake Macquarie and the Central Coast, and selected Sydney areas.",
    lead: [
      "Fletcher Physiotherapy provides home visit physiotherapy for Support at Home clients across Newcastle, Lake Macquarie and the Central Coast, and around Sydney Olympic Park and the Inner West.",
      "Many families still search for \"Home Care Package physio\". Home Care Packages were replaced by Support at Home on 1 November 2025, and the way physiotherapy is arranged and paid for has changed. This page explains how it works now — for older people, families and care managers.",
      "Our care is led by an APA Titled Pain Physiotherapist experienced in aged care, falls prevention and rehabilitation, and focused on helping you stay strong, steady and safely independent at home.",
    ],
    sections: [
      {
        h2: "Home Care Packages are now Support at Home",
        body: [
          "On 1 November 2025, Support at Home replaced the Home Care Packages (HCP) Program and the Short-Term Restorative Care Programme. If you already had a Home Care Package, you didn't need a new assessment — your provider moved you across and will have discussed a new agreement with you.",
          "Under Support at Home, clinical care such as physiotherapy is one of the services available when it meets your assessed needs.",
        ],
      },
      {
        h2: "How to get home physiotherapy through Support at Home",
        body: [
          "You don't claim physiotherapy yourself the way you might with private health insurance. It's arranged through your Support at Home provider and paid from your budget. In practice:",
        ],
        list: [
          "Tell your provider or care partner you'd like physiotherapy (or ask us to contact them with your permission)",
          "Your provider confirms it fits your assessed needs and care plan",
          "Your provider engages us to deliver the physiotherapy at your home",
          "We assess you, agree goals and a plan, and keep your provider updated",
          "We invoice your provider, who pays from your Support at Home budget",
          "Not yet assessed? Contact My Aged Care on 1800 200 422 to arrange an aged care assessment",
        ],
      },
      {
        h2: "What it costs you",
        body: [
          "Under Support at Home, participants make no contribution for clinical supports such as nursing and physiotherapy — the government covers that cost. Contributions apply to other service types, such as independence and everyday living services, depending on your income and assets.",
          "Physiotherapy does still draw on your quarterly Support at Home budget, so it's worth talking with your provider about how you'd like your budget used. If you're waiting for an assessment or for services to start, private physiotherapy is available in the meantime.",
        ],
      },
      {
        h2: "Restorative care and equipment",
        body: [
          "Support at Home includes a Restorative Care Pathway — short-term, intensive allied health support aimed at maintaining and improving your independence, for example after an illness, a fall or a hospital stay. Ask your provider whether it suits your situation.",
          "The Assistive Technology and Home Modifications (AT-HM) scheme can fund items such as walking aids, rails and other equipment that meet your assessed needs. A physiotherapist can assess you and recommend the right equipment to support an application.",
        ],
      },
      {
        h2: "What Support at Home physiotherapy focuses on",
        body: [
          "Our programs focus on keeping you moving well and doing the daily tasks that matter — getting in and out of bed and chairs, moving safely around the house, and staying active in your community.",
        ],
        list: [
          "Strength and balance training",
          "Falls prevention and home safety review",
          "Walking and mobility, including walking aid advice",
          "Recovery after illness, a fall or hospital",
          "Persistent pain management",
          "Home exercise programs you can keep up between visits",
        ],
      },
      {
        h2: "For providers and care managers",
        body: [
          "We make physiotherapy simple to arrange: a clear initial assessment with recommendations for the care plan, regular progress updates, equipment recommendations where needed, and invoicing to the provider in the format you require.",
          "To refer a client, use our referral form or call 0404 791 756 and include the client's suburb, goals and any relevant medical information.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Support at Home (formerly Home Care Packages) cover physiotherapy?",
        a: "Yes. Physiotherapy is a clinical support under Support at Home and can be funded when it meets your assessed needs and goals. It's arranged through your Support at Home provider.",
      },
      {
        q: "How do I claim home visit physio on a Home Care Package?",
        a: "Home Care Packages became Support at Home on 1 November 2025. You don't claim it yourself — ask your Support at Home provider to arrange physiotherapy. They engage a physiotherapist like us, and we invoice the provider, who pays from your budget.",
      },
      {
        q: "Will I have to pay a contribution for physiotherapy?",
        a: "Under Support at Home, participants make no contribution for clinical supports such as physiotherapy and nursing. It does use part of your Support at Home budget.",
      },
      {
        q: "Do I need a GP referral?",
        a: "Not for Support at Home physiotherapy — it's arranged through your provider. Your GP is still a good person to involve, especially after a fall or hospital stay.",
      },
      {
        q: "I'm still waiting for my assessment. Can I see a physio now?",
        a: "Yes. You can see us privately while you wait. To start an aged care assessment, contact My Aged Care on 1800 200 422.",
      },
      {
        q: "Can Support at Home pay for a walking frame or rails?",
        a: "Possibly — through the Assistive Technology and Home Modifications scheme, if they meet your assessed needs. A physiotherapist can assess you and recommend suitable equipment.",
      },
      {
        q: "Do you coordinate with my provider?",
        a: "Yes. We keep your provider and family updated, provide recommendations for your care plan, and invoice your provider directly.",
      },
    ],
    related: [
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "Support at Home Physiotherapy Explained", href: "/blog/support-at-home-physiotherapy-explained" },
      { label: "Refer a Patient", href: "/refer-a-patient" },
      { label: "NDIS Physiotherapy", href: "/ndis-physiotherapy-newcastle" },
      { label: "Mobile Physiotherapy Sydney", href: "/physiotherapy-sydney" },
    ],
    ctaTitle: "Arrange Support at Home physiotherapy",
  },

  "falls-prevention-physiotherapy-newcastle": {
    slug: "falls-prevention-physiotherapy-newcastle",
    eyebrow: "Falls Prevention Physiotherapy Newcastle",
    h1: "Falls Prevention Physiotherapy in Newcastle",
    serviceName: "Falls Prevention Physiotherapy Newcastle",
    intro:
      "Falls prevention physiotherapy in Newcastle, delivered at home. Balance assessment, strength and balance training, and a home hazard review to reduce falls risk and restore confidence.",
    lead: [
      "Fletcher Physiotherapy provides falls prevention physiotherapy across Newcastle, Lake Macquarie and the Central Coast, delivered in your own home. A single fall can change an older person's independence and confidence — but the good news is that many falls are preventable.",
      "The most effective falls prevention combines strength training, balance training and a review of the home environment — exactly what home visit physiotherapy is designed to deliver. We assess your individual risk and build a program to address it directly.",
      "Our care is led by an APA Titled Pain Physiotherapist experienced with older adults and complex conditions, and every program is tailored to your ability, your home and your goals.",
    ],
    sections: [
      {
        h2: "Comprehensive balance assessment",
        body: [
          "Effective falls prevention starts with understanding why you are at risk. We carry out a thorough assessment of your balance, strength, walking pattern, medications risk factors and history, to build a clear picture of what is contributing to your falls risk.",
          "From there we create a personalised plan that targets the specific factors most likely to cause a fall — rather than a generic, one-size-fits-all routine.",
        ],
      },
      {
        h2: "Strength and balance training",
        body: [
          "Research consistently shows that progressive strength and balance exercise is one of the most effective ways to reduce falls in older adults. We deliver exactly this: a program that safely challenges and improves your balance and builds the leg strength that keeps you steady.",
          "Because we train you at home, your program uses your real environment and everyday movements, so improvements carry straight into daily life.",
        ],
        list: [
          "Balance and stability exercises",
          "Leg and hip strengthening",
          "Gait and walking retraining",
          "Confidence and fear-of-falling work",
          "Safe transfers and floor-recovery skills",
          "Advice on walking aids where helpful",
        ],
      },
      {
        h2: "Home hazard review",
        body: [
          "Many falls happen because of hazards in the home — loose rugs, poor lighting, cluttered walkways, slippery bathrooms or the absence of rails. As part of our home visits, we walk through your home with you to identify and address these risks.",
          "This practical, on-the-spot review is something a clinic simply cannot offer, and it is one of the most valuable parts of home-based falls prevention.",
        ],
      },
      {
        h2: "Rebuilding confidence",
        body: [
          "The fear of falling can be as limiting as a fall itself, causing people to move less, which in turn weakens muscles and actually increases falls risk. We break this cycle by rebuilding your confidence through graded, supported practice.",
          "The result is not just a lower risk of falling, but the freedom to move, stay active and remain independent without constant worry.",
        ],
      },
    ],
    faqs: [
      {
        q: "How can physiotherapy prevent falls?",
        a: "Falls prevention physiotherapy combines a balance and mobility assessment, tailored strength and balance exercise, gait and confidence training, and a home hazard review — an evidence-based approach can help reduce falls risk.",
      },
      {
        q: "My parent has already had a fall — can you help?",
        a: "Yes. We help people rebuild strength, balance and confidence after a fall, and address the factors that caused it to reduce the risk of it happening again.",
      },
      {
        q: "Is falls prevention covered by funding?",
        a: "Falls prevention physiotherapy can be funded through NDIS and Support at Home where it supports your goals. We'll help you understand the options.",
      },
    ],
    related: [
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Support at Home Physiotherapy Newcastle", href: "/support-at-home-physiotherapy-newcastle" },
      { label: "Mobile Physiotherapist Newcastle", href: "/mobile-physiotherapist-newcastle" },
    ],
    ctaTitle: "Reduce falls risk and build lasting confidence",
  },

  "stroke-rehabilitation-newcastle": {
    slug: "stroke-rehabilitation-newcastle",
    eyebrow: "Stroke Rehabilitation Newcastle",
    h1: "Stroke Rehabilitation in Newcastle",
    serviceName: "Stroke Rehabilitation Newcastle",
    intro:
      "Home-based stroke rehabilitation physiotherapy in Newcastle, helping people rebuild movement, strength and independence in the comfort of their own home.",
    lead: [
      "Fletcher Physiotherapy provides home visit stroke rehabilitation across Newcastle, Lake Macquarie and the Central Coast. Recovery from a stroke continues long after hospital, and much of the progress happens once you are back home.",
      "Stroke can affect movement, strength, balance, coordination and confidence, and every person's recovery is different. We design an individualised program around your goals and work patiently alongside you and your family.",
      "Led by an APA Titled Pain Physiotherapist experienced in neurological and complex rehabilitation, we help you regain as much function and independence as possible.",
    ],
    sections: [
      { h2: "Rehabilitation after a stroke", body: ["Stroke rehabilitation helps you relearn movement and skills affected by the stroke, and build the strength and confidence to return to daily life. Consistent, targeted physiotherapy is central to making the most of the brain's ability to adapt.", "Because we come to you, your rehabilitation is grounded in your real environment and everyday goals, and consistent practice is far easier to maintain."] },
      { h2: "What our stroke rehabilitation includes", body: ["Your program is tailored to your recovery and progresses as you improve."], list: ["Retraining movement and coordination","Strengthening affected muscles","Balance and walking practice","Falls prevention","Regaining independence in daily tasks","Education and support for families and carers"] },
      { h2: "Funding your rehabilitation", body: ["Stroke rehabilitation is often funded through the NDIS or Support at Home, as well as privately. We work with participants and providers and supply the documentation and reports needed to support your plan.", "We also communicate closely with your GP, hospital team and support coordinators for a coordinated recovery."] },
      { h2: "Why home-based stroke rehab works", body: ["Getting to a clinic after a stroke can be difficult, and consistency is one of the biggest factors in recovery. Home visit physiotherapy removes the barrier of travel, supports regular practice, and involves the people around you."] },
    ],
    faqs: [
      { q: "Can stroke rehabilitation be done at home?", a: "Yes. Much of stroke recovery happens at home, and home-based physiotherapy is highly effective — practical, consistent and grounded in your real environment and goals." },
      { q: "Is stroke rehabilitation covered by NDIS?", a: "It often is. Stroke rehabilitation physiotherapy is commonly funded under the NDIS, and can also be funded through Support at Home or privately." },
      { q: "How soon should stroke rehab start after hospital?", a: "Generally, the sooner the better once you're home and medically stable. Contact us and we'll arrange a prompt home assessment." },
    ],
    related: [
      { label: "Parkinson's Physiotherapy Newcastle", href: "/parkinsons-physiotherapy-newcastle" },
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
    ],
    ctaTitle: "Start stroke rehabilitation at home in Newcastle",
  },
  "parkinsons-physiotherapy-newcastle": {
    slug: "parkinsons-physiotherapy-newcastle",
    eyebrow: "Parkinson's Physiotherapy Newcastle",
    h1: "Parkinson's Physiotherapy in Newcastle",
    serviceName: "Parkinson's Physiotherapy Newcastle",
    intro:
      "Home visit physiotherapy for Parkinson's disease in Newcastle, helping people maintain movement, balance and independence and reduce their falls risk.",
    lead: [
      "Fletcher Physiotherapy provides home-based physiotherapy for people living with Parkinson's disease across Newcastle, Lake Macquarie and the Central Coast. Physiotherapy is an important part of managing Parkinson's.",
      "Parkinson's affects movement, balance and confidence, and these challenges change over time. We design a program tailored to your symptoms and goals, and adapt it as your needs evolve.",
      "Our care is led by an APA Titled Pain Physiotherapist experienced in neurological and complex conditions.",
    ],
    sections: [
      { h2: "Physiotherapy and Parkinson's", body: ["Movement is medicine for Parkinson's. Regular, targeted exercise helps maintain flexibility, strength and balance, and can improve walking, posture and everyday function. Physiotherapy also addresses challenges such as freezing, small steps and turning safely.", "Practising in your own home means these strategies apply directly to your daily movements and spaces."] },
      { h2: "What our Parkinson's physiotherapy includes", body: ["Your program is individualised and reviewed regularly as your needs change."], list: ["Exercises to maintain movement and flexibility","Balance training to reduce falls risk","Strategies for walking, turning and freezing","Strength and posture work","Support for confidence and daily activities","Guidance for families and carers"] },
      { h2: "Funding and support", body: ["Parkinson's physiotherapy is commonly funded through the NDIS or Support at Home, as well as privately. We work with participants, families and providers, and communicate reliably with your broader care team.", "We also help you access the right supports and equipment as your needs change."] },
      { h2: "Why home-based care helps", body: ["Home visit physiotherapy removes the stress of travel and lets families and carers be involved in supporting your program, while keeping your care consistent and relevant to your real environment."] },
    ],
    faqs: [
      { q: "Does physiotherapy help Parkinson's disease?", a: "Yes. Physiotherapy is a key part of managing Parkinson's, helping maintain movement, balance, walking and confidence, and reducing falls risk." },
      { q: "Can I get Parkinson's physiotherapy at home?", a: "Yes — all our Parkinson's physiotherapy is delivered at home across Newcastle, Lake Macquarie and the Central Coast." },
      { q: "Is Parkinson's physiotherapy funded by NDIS?", a: "It commonly is, and it can also be funded through Support at Home or privately." },
    ],
    related: [
      { label: "Stroke Rehabilitation Newcastle", href: "/stroke-rehabilitation-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
    ],
    ctaTitle: "Book Parkinson's physiotherapy at home in Newcastle",
  },
  "arthritis-physiotherapy-newcastle": {
    slug: "arthritis-physiotherapy-newcastle",
    eyebrow: "Arthritis Physiotherapy Newcastle",
    h1: "Arthritis Physiotherapy in Newcastle",
    serviceName: "Arthritis Physiotherapy Newcastle",
    intro:
      "Home visit physiotherapy for arthritis in Newcastle, helping older adults ease joint pain and stiffness, protect their joints and stay active and independent.",
    lead: [
      "Fletcher Physiotherapy provides home-based arthritis physiotherapy across Newcastle, Lake Macquarie and the Central Coast. Arthritis is one of the most common conditions affecting older adults.",
      "It can be tempting to rest when joints are painful, but appropriate movement is one of the best things you can do for arthritic joints. We help you find that balance safely.",
      "Our care is led by an APA Titled Pain Physiotherapist, combining pain-management expertise with practical, evidence-based strategies.",
    ],
    sections: [
      { h2: "Managing arthritis with physiotherapy", body: ["Physiotherapy for arthritis focuses on keeping joints moving, strengthening the muscles that support them, and managing pain — so you can keep doing the activities you enjoy. A tailored program can reduce stiffness, improve function and slow the loss of mobility.", "We assess your joints, movement and goals, then build a program suited to you."] },
      { h2: "What our arthritis physiotherapy includes", body: ["Your program is gentle, progressive and tailored to your joints and goals."], list: ["Gentle exercises to maintain joint movement","Strengthening the muscles that support your joints","Advice on pacing and protecting your joints","Hands-on treatment to ease pain and stiffness","Guidance on aids and home modifications","Strategies to stay active and independent"] },
      { h2: "Funding your care", body: ["Arthritis physiotherapy can be funded through Support at Home, the NDIS or privately, and sometimes Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP). We'll help you understand what applies.", "We coordinate with your GP and provider where needed."] },
      { h2: "Care that comes to you", body: ["For older adults with arthritis, travelling to a clinic can be painful and tiring. Home visit physiotherapy removes that barrier and tailors your program to your daily environment."] },
    ],
    faqs: [
      { q: "Can physiotherapy help arthritis?", a: "Yes. Physiotherapy helps manage arthritis by maintaining joint movement, strengthening supporting muscles, easing pain and keeping you active and independent." },
      { q: "Is exercise safe with arthritis?", a: "The right exercise is not only safe but beneficial for arthritic joints. A physiotherapist ensures your program is appropriate for you." },
      { q: "Do you treat arthritis at home?", a: "Yes — all our arthritis physiotherapy is delivered at home across Newcastle, Lake Macquarie and the Central Coast." },
    ],
    related: [
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Senior Exercise Programs Newcastle", href: "/senior-exercise-programs-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
    ],
    ctaTitle: "Ease arthritis pain with physiotherapy at home",
  },
  "hip-replacement-rehabilitation-newcastle": {
    slug: "hip-replacement-rehabilitation-newcastle",
    eyebrow: "Hip Replacement Rehabilitation Newcastle",
    h1: "Hip Replacement Rehabilitation in Newcastle",
    serviceName: "Hip Replacement Rehabilitation Newcastle",
    intro:
      "Home visit physiotherapy for hip replacement rehabilitation in Newcastle, helping you recover strength, movement and confidence safely at home.",
    lead: [
      "Fletcher Physiotherapy provides home-based hip replacement rehabilitation across Newcastle, Lake Macquarie and the Central Coast. A hip replacement can improve quality of life, but a strong recovery depends on good rehabilitation.",
      "Getting to a clinic after major surgery can be difficult. Our physiotherapists bring your rehabilitation to you, so you can recover safely and consistently at home.",
      "We always work within your surgeon's precautions, and our care is led by an APA Titled Pain Physiotherapist experienced in post-surgical rehabilitation.",
    ],
    sections: [
      { h2: "Recovery after a hip replacement", body: ["Rehabilitation after a hip replacement helps you rebuild strength and movement, protect your new joint, and safely return to walking, stairs and daily activities. A well-structured program reduces complications and helps you regain independence sooner.", "We tailor your program to your recovery stage, your surgeon's guidance and your goals."] },
      { h2: "What rehabilitation involves", body: ["Your program progresses gradually as you heal."], list: ["Exercises to restore hip strength and movement","Safe transfers and walking practice","Sit-to-stand and stair practice","Swelling and pain management strategies","Balance and confidence work","A gradual return to daily activities"] },
      { h2: "Funding your rehabilitation", body: ["Hip replacement rehabilitation can be funded privately, through Support at Home or the NDIS. We'll help you understand your options and coordinate with your care team.", "We also communicate with your surgeon and GP as needed."] },
      { h2: "Why home-based rehab helps", body: ["Home visit physiotherapy lets you begin and progress rehabilitation safely at home, when travel is uncomfortable and consistency matters most."] },
    ],
    faqs: [
      { q: "How long is rehab after a hip replacement?", a: "It varies by individual, but rehabilitation typically continues for several weeks to months. Your physiotherapist tailors and progresses your program." },
      { q: "Can I do hip replacement rehab at home?", a: "Yes — home-based rehabilitation is ideal after a hip replacement, when travel is uncomfortable and consistent practice is important." },
      { q: "When should rehab start after surgery?", a: "Early, guided movement is important. Once you're home, contact us and we'll arrange a prompt assessment within your surgeon's guidelines." },
    ],
    related: [
      { label: "Knee Replacement Rehabilitation Newcastle", href: "/knee-replacement-rehabilitation-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
    ],
    ctaTitle: "Recover from hip replacement surgery at home",
  },
  "knee-replacement-rehabilitation-newcastle": {
    slug: "knee-replacement-rehabilitation-newcastle",
    eyebrow: "Knee Replacement Rehabilitation Newcastle",
    h1: "Knee Replacement Rehabilitation in Newcastle",
    serviceName: "Knee Replacement Rehabilitation Newcastle",
    intro:
      "Home visit physiotherapy for knee replacement rehabilitation in Newcastle, restoring movement, strength and confidence in the comfort of your home.",
    lead: [
      "Fletcher Physiotherapy provides home-based knee replacement rehabilitation across Newcastle, Lake Macquarie and the Central Coast. The success of a knee replacement depends heavily on the rehabilitation that follows.",
      "Consistent physiotherapy helps restore the movement and strength needed to walk, climb stairs and return to daily life — and reduces the risk of a stiff, poorly functioning joint.",
      "Our physiotherapists bring rehabilitation to your door, led by an APA Titled Pain Physiotherapist experienced in post-surgical recovery.",
    ],
    sections: [
      { h2: "Why rehabilitation matters", body: ["After a knee replacement, restoring full movement early is important to avoid long-term stiffness. A structured program rebuilds the strength and range of movement you need, while managing pain and swelling.", "We tailor your program to your recovery and your goals, and progress it as you improve."] },
      { h2: "What rehabilitation involves", body: ["Your program is graded and guided at every stage."], list: ["Exercises to restore knee bending and straightening","Progressive strengthening of the leg muscles","Swelling and pain management strategies","Walking and stair practice","Balance and confidence work","A gradual return to daily activities"] },
      { h2: "Funding your rehabilitation", body: ["Knee replacement rehabilitation can be funded privately, through Support at Home or the NDIS. We'll help you understand what applies and coordinate with your care team.", "We communicate with your surgeon and GP where needed."] },
      { h2: "The benefit of home-based rehab", body: ["Home visit physiotherapy is ideal after a knee replacement, when travel is uncomfortable and consistency matters. Your physiotherapist brings the rehabilitation to you and helps you progress safely toward full function."] },
    ],
    faqs: [
      { q: "How long does knee replacement rehab take?", a: "Recovery varies, but rehabilitation typically continues for several weeks to a few months. Your physiotherapist tailors and progresses your program." },
      { q: "Can knee replacement rehab be done at home?", a: "Yes — home-based rehabilitation is ideal after a knee replacement, supporting consistent practice when travel is uncomfortable." },
      { q: "Is knee replacement rehab funded?", a: "It can be funded privately, through Support at Home or the NDIS. We'll help you understand your options." },
    ],
    related: [
      { label: "Hip Replacement Rehabilitation Newcastle", href: "/hip-replacement-rehabilitation-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
      { label: "Senior Exercise Programs Newcastle", href: "/senior-exercise-programs-newcastle" },
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
    ],
    ctaTitle: "Recover from knee replacement surgery at home",
  },
  "senior-exercise-programs-newcastle": {
    slug: "senior-exercise-programs-newcastle",
    eyebrow: "Senior Exercise Programs Newcastle",
    h1: "Senior Exercise Programs in Newcastle",
    serviceName: "Senior Exercise Programs Newcastle",
    intro:
      "Personalised senior exercise programs in Newcastle, delivered at home, to build strength, balance and confidence and help older adults stay independent.",
    lead: [
      "Fletcher Physiotherapy designs and delivers personalised senior exercise programs across Newcastle, Lake Macquarie and the Central Coast — in the comfort of your own home. Safe, effective exercise is one of the most powerful ways for older adults to stay strong and independent.",
      "Unlike a generic class, our programs are built by a physiotherapist around your individual ability, health and goals, and supervised and progressed safely over time.",
      "Our care is led by an APA Titled Pain Physiotherapist with extensive experience supporting older adults.",
    ],
    sections: [
      { h2: "Why a tailored program matters", body: ["Exercise is only effective when it is right for you — challenging enough to make a difference, but safe for your body and health. A physiotherapist-designed program targets the strength, balance and mobility that independence depends on, and adapts as you improve.", "Delivered at home, your program fits naturally into your routine and uses your real environment."] },
      { h2: "What our senior exercise programs include", body: ["Every program is individual, but typically focuses on the areas that matter most for independent living."], list: ["Progressive strength training","Balance and falls-prevention exercises","Mobility and flexibility work","Walking and endurance","Functional, everyday movements","Regular review and safe progression"] },
      { h2: "Who they help", body: ["Our senior exercise programs suit older adults wanting to stay active, people recovering from illness or surgery, and those managing conditions such as arthritis or Parkinson's. They can be funded through Support at Home, the NDIS or privately.", "We also involve families and carers so they can support your program between visits."] },
      { h2: "Exercise with confidence, at home", body: ["For many older adults, exercising safely and confidently is the biggest barrier. Home visit physiotherapy provides experienced, supervised support in your own home, so you can build strength and stay independent without the worry."] },
    ],
    faqs: [
      { q: "What are senior exercise programs?", a: "They're personalised exercise programs designed by a physiotherapist for older adults, focused on strength, balance and mobility to maintain independence — delivered and supervised at home." },
      { q: "Are the programs safe for older adults?", a: "Yes. Programs are tailored to your ability and health, supervised by a physiotherapist, and progressed safely over time." },
      { q: "Can senior exercise programs be funded?", a: "Yes — they can be funded through Support at Home, the NDIS or privately." },
    ],
    related: [
      { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
      { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
      { label: "Arthritis Physiotherapy Newcastle", href: "/arthritis-physiotherapy-newcastle" },
      { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
    ],
    ctaTitle: "Start a personalised senior exercise program at home",
  },
};
