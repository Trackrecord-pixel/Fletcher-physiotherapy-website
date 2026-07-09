export type BlogSection = { h2: string; body: string[]; list?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  excerpt: string;
  sections: BlogSection[];
};

export const posts: BlogPost[] = [
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
          "Falls are the leading cause of injury-related loss of independence in older Australians. Physiotherapy addresses this directly through balance training, strengthening and a review of hazards in the home — an approach proven to significantly reduce falls risk.",
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
    title: "Home Care Package Physiotherapy Explained",
    description:
      "A clear guide to using your Home Care Package for physiotherapy — what's covered, how it works and how to arrange in-home care.",
    date: "2026-05-12",
    readMins: 5,
    excerpt:
      "Wondering whether your Home Care Package can pay for physiotherapy? Here's a plain-language explanation.",
    sections: [
      {
        h2: "Can a Home Care Package fund physiotherapy?",
        body: [
          "Yes. Physiotherapy is an allied health service that can be funded through a Home Care Package (Levels 1 to 4) when it supports the goals in your care plan — such as improving mobility, building strength, managing pain or reducing falls risk.",
          "Because physiotherapy so directly supports the ability to keep living independently at home, it is one of the most valuable services a package can fund.",
        ],
      },
      {
        h2: "How it works",
        body: [
          "Your Home Care Package is managed by an approved provider who works with you to decide how your funds are used. If you would like physiotherapy included, you can discuss it with your provider or care manager, who can arrange it as part of your plan.",
          "A mobile physiotherapy service like Fletcher Physiotherapy coordinates directly with your provider, delivers care aligned to your goals, and supplies any documentation required — making the process simple for you and your family.",
        ],
      },
      {
        h2: "What physiotherapy can include",
        body: [
          "Under a Home Care Package, physiotherapy typically focuses on the things that keep you safe and independent at home.",
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
          "If you have a Home Care Package and would like physiotherapy at home, contact us and we will help you understand your options and coordinate with your provider. If you are still waiting for a package, private physiotherapy is also available in the meantime.",
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
      "Simple balance and strength exercises can dramatically reduce falls risk. Here are five physiotherapists often recommend.",
    sections: [
      {
        h2: "Why exercise prevents falls",
        body: [
          "Research is clear: progressive strength and balance exercise is the single most effective way to reduce falls in older adults. The exercises below are commonly recommended by physiotherapists, but always check with a professional before starting, and have support nearby for safety.",
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
          "Arranging a home visit is simple. After you get in touch, we confirm a time that suits you and ask about your goals, health history and any funding such as NDIS or a Home Care Package. There is nothing you need to prepare beyond a comfortable space to move.",
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
    title: "Physiotherapy After Hospital Discharge",
    description:
      "How home-based physiotherapy supports a safe recovery after a hospital stay, rebuilding strength and reducing the risk of readmission.",
    date: "2026-04-10",
    readMins: 5,
    excerpt:
      "Coming home from hospital is a vulnerable time. Here's how physiotherapy helps you recover safely.",
    sections: [
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
        h2: "Reducing the risk of readmission",
        body: [
          "Well-planned rehabilitation after discharge reduces the likelihood of complications, falls and hospital readmission. Physiotherapists also coordinate with your broader care team and provide practical advice on safety and equipment at home.",
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
          "Support at Home is the Australian Government program designed to help older people live independently in their own homes for longer, with services tailored to their needs. It brings together the kind of support previously delivered through Home Care Packages and other programs into a more flexible model.",
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
          "Falls are the leading cause of injury-related loss of independence for older Australians, but the majority are preventable. Falls usually result from a combination of factors \u2014 reduced strength, poor balance, changes in walking pattern, and hazards in the home.",
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
    title: "When Should Older Adults See a Physiotherapist?",
    description:
      "The signs it's time for an older adult to see a physiotherapist \u2014 from reduced mobility and balance to pain, falls and recovery after hospital.",
    date: "2026-04-14",
    readMins: 5,
    excerpt:
      "Not sure if it's time to see a physio? Here are the signs older adults and families should look out for.",
    sections: [
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
          "You don't need to wait for a referral to see a physiotherapist privately, and support may be available through NDIS, a Home Care Package or Support at Home. If any of these signs sound familiar, a home visit assessment is a simple, low-pressure first step toward staying strong and independent.",
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
      { h2: "Recovery after a hip replacement", body: ["A hip replacement can dramatically improve quality of life, but a strong recovery depends on good rehabilitation. Physiotherapy helps you rebuild strength and movement safely, while protecting your new joint and following your surgeon's precautions.", "Always follow the specific guidance of your surgeon and physiotherapist — the exercises below are general examples only."] },
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
      { h2: "The benefit of home-based care", body: ["Practising in your own home means strategies can be applied directly to your everyday movements and spaces. Home visit physiotherapy also removes the stress of travel, and lets families and carers be involved. Many people with Parkinson's access this support through the NDIS or a Home Care Package."] },
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
      { h2: "Why home-based rehab works", body: ["Recovering at home means your rehabilitation is grounded in your real environment and everyday goals. Home visit physiotherapy removes the barrier of travel, supports consistent practice, and involves the people around you. Stroke rehabilitation is often funded through the NDIS or a Home Care Package."] },
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
      { h2: "Expert, home-based support", body: ["At Fletcher Physiotherapy, chronic pain care is led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Pain Management from the University of Sydney. Delivered at home, this expert care helps older adults across Newcastle move with confidence and return to the activities that matter most."] },
    ],
  },
];
