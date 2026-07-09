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
];
