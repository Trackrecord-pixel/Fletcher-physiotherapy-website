import type { IconName } from "@/components/Icon";

// Fletcher Physiotherapy — complete services directory (29 services).
// Each entry links to its most relevant dedicated page. Overlapping topics
// (e.g. Medicare GP care plan + bulk billing) share one authoritative page
// to avoid competing near-duplicate pages.
// COMPLIANCE (Ahpra): descriptive, no outcome guarantees; "may help", "aims to".

export type DirectoryService = {
  n: number;
  id: string; // anchor id on /services
  name: string;
  desc: string;
  href: string;
  icon: IconName;
};

export type DirectoryCategory = {
  id: string;
  title: string;
  intro: string;
  services: DirectoryService[];
};

export const serviceDirectory: DirectoryCategory[] = [
  {
    id: "general",
    title: "General Physiotherapy & Rehabilitation",
    intro: "Assessment, treatment and rehabilitation for pain, injury and reduced physical function — in clinic or at home.",
    services: [
      {
        n: 1,
        id: "general-physiotherapy",
        name: "General Physiotherapy",
        desc: "Assessment and treatment of pain, injuries, mobility limitations and physical function, combining clinical assessment, individualised exercise, hands-on treatment where appropriate, and education.",
        href: "/clinic-physiotherapy",
        icon: "user",
      },
      {
        n: 2,
        id: "musculoskeletal-physiotherapy",
        name: "Musculoskeletal Physiotherapy",
        desc: "Physiotherapy for muscle, joint, tendon and ligament conditions, including back, neck, shoulder, hip and knee pain, focused on movement, strength and symptom management.",
        href: "/musculoskeletal-physiotherapy",
        icon: "joint",
      },
      {
        n: 3,
        id: "chronic-pain-management",
        name: "Chronic Pain Management",
        desc: "Physiotherapy for persistent and chronic pain, led by an APA Titled Pain Physiotherapist — pain education, graded movement, exercise rehabilitation and individualised self-management strategies.",
        href: "/chronic-pain-management",
        icon: "pulse",
      },
      {
        n: 4,
        id: "exercise-rehabilitation",
        name: "Exercise Rehabilitation",
        desc: "Individualised exercise programs to improve strength, flexibility, stability, endurance and physical function after injury, surgery or a period of reduced activity.",
        href: "/exercise-rehabilitation",
        icon: "strength",
      },
    ],
  },
  {
    id: "pain-conditions",
    title: "Pain & Musculoskeletal Conditions",
    intro: "Individualised assessment and rehabilitation for common joint, muscle and spinal conditions.",
    services: [
      {
        n: 5,
        id: "lower-back-pain",
        name: "Lower Back Pain Physiotherapy",
        desc: "Assessment and treatment of acute and persistent lower back pain, movement limitations and associated leg symptoms, with exercise, hands-on treatment and education.",
        href: "/lower-back-pain-physiotherapy",
        icon: "pulse",
      },
      {
        n: 6,
        id: "neck-pain",
        name: "Neck Pain Physiotherapy",
        desc: "Physiotherapy for neck pain, stiffness, movement restrictions and neck-related headaches, including targeted strengthening, mobility exercises and hands-on treatment.",
        href: "/neck-pain-physiotherapy",
        icon: "pulse",
      },
      {
        n: 7,
        id: "shoulder-pain",
        name: "Shoulder Pain Physiotherapy",
        desc: "Assessment and rehabilitation for shoulder pain, rotator cuff-related conditions, stiffness and restricted movement through individualised exercise programs.",
        href: "/shoulder-pain-physiotherapy",
        icon: "joint",
      },
      {
        n: 8,
        id: "knee-pain",
        name: "Knee Pain Physiotherapy",
        desc: "Physiotherapy for knee pain associated with osteoarthritis, injury, overuse and reduced mobility — assessment, progressive strengthening and movement retraining.",
        href: "/knee-pain-physiotherapy",
        icon: "joint",
      },
      {
        n: 9,
        id: "hip-arthritis",
        name: "Hip Arthritis Physiotherapy",
        desc: "Physiotherapy for hip osteoarthritis, stiffness, pain and reduced walking tolerance, with strengthening, mobility and practical strategies for maintaining function.",
        href: "/hip-pain-physiotherapy#hip-osteoarthritis",
        icon: "joint",
      },
      {
        n: 10,
        id: "hip-bursitis",
        name: "Hip Bursitis Physiotherapy",
        desc: "Rehabilitation for lateral hip pain, including greater trochanteric pain syndrome and gluteal tendinopathy, with progressive strengthening and load management.",
        href: "/hip-pain-physiotherapy#lateral-hip-pain",
        icon: "joint",
      },
      {
        n: 11,
        id: "arthritis",
        name: "Arthritis & Joint Pain Physiotherapy",
        desc: "Physiotherapy for osteoarthritis and joint pain affecting the knees, hips, spine and other joints — education, strengthening and exercise rehabilitation.",
        href: "/arthritis-physiotherapy-newcastle",
        icon: "joint",
      },
      {
        n: 12,
        id: "sports-injury",
        name: "Sports Injury Physiotherapy",
        desc: "Assessment and rehabilitation of sports-related muscle, tendon, ligament and joint injuries, with progressive conditioning and return-to-sport planning where appropriate.",
        href: "/sports-injury-physiotherapy",
        icon: "strength",
      },
      {
        n: 13,
        id: "headache",
        name: "Headache Physiotherapy",
        desc: "Assessment and management of headaches associated with neck dysfunction or musculoskeletal factors, including cervical mobility, strengthening, manual therapy and education.",
        href: "/neck-pain-physiotherapy#neck-related-headaches",
        icon: "pulse",
      },
    ],
  },
  {
    id: "surgery",
    title: "Surgery & Post-Operative Rehabilitation",
    intro: "Structured rehabilitation before and after surgery, and after a hospital stay.",
    services: [
      {
        n: 14,
        id: "pre-post-operative",
        name: "Pre and Post-Operative Rehabilitation",
        desc: "Individualised physiotherapy before and after orthopaedic surgery, focused on strength, joint mobility, walking and functional recovery, progressed to your surgery and presentation.",
        href: "/post-surgical-rehabilitation",
        icon: "recovery",
      },
      {
        n: 15,
        id: "hip-replacement",
        name: "Hip Replacement Rehabilitation",
        desc: "Physiotherapy after hip replacement surgery, focusing on walking, hip strengthening, mobility, balance and return to daily activities within your surgical precautions.",
        href: "/hip-replacement-rehabilitation-newcastle",
        icon: "recovery",
      },
      {
        n: 16,
        id: "knee-replacement",
        name: "Knee Replacement Rehabilitation",
        desc: "Physiotherapy after total knee replacement, focusing on knee range of motion, progressive strengthening, walking, balance and functional mobility.",
        href: "/knee-replacement-rehabilitation-newcastle",
        icon: "recovery",
      },
      {
        n: 17,
        id: "post-hospital-rehabilitation",
        name: "Post-Hospital Rehabilitation",
        desc: "Physiotherapy after hospital discharge, surgery or illness to address reduced strength, mobility and physical function — at home where appropriate.",
        href: "/post-surgical-rehabilitation",
        icon: "home",
      },
    ],
  },
  {
    id: "balance",
    title: "Balance, Mobility & Falls Prevention",
    intro: "Assessment and exercise programs that aim to support steadier, more confident movement.",
    services: [
      {
        n: 18,
        id: "falls-prevention",
        name: "Falls Prevention Physiotherapy",
        desc: "For older adults and people with balance difficulties or increased falls risk — balance assessment, strengthening, mobility training and tailored falls prevention exercise.",
        href: "/falls-prevention-physiotherapy-newcastle",
        icon: "balance",
      },
      {
        n: 19,
        id: "balance-training",
        name: "Balance and Mobility Assessment",
        desc: "Assessment of walking, balance, lower-limb strength and mobility, with individualised recommendations and exercises to support mobility confidence.",
        href: "/falls-prevention-physiotherapy-newcastle",
        icon: "balance",
      },
      {
        n: 20,
        id: "strength-mobility-programs",
        name: "Strength and Mobility Rehabilitation",
        desc: "Exercise-based rehabilitation for weakness, deconditioning, reduced endurance and mobility limitations, focused on strength, walking and independence.",
        href: "/exercise-rehabilitation#strength-and-mobility",
        icon: "strength",
      },
    ],
  },
  {
    id: "funded",
    title: "Medicare, Bulk Billing & Funded Physiotherapy",
    intro: "Physiotherapy for eligible Medicare, DVA, NDIS, Support at Home, WorkCover and CTP patients. Funding depends on eligibility and referral requirements.",
    services: [
      {
        n: 21,
        id: "medicare-gp-care-plan",
        name: "Medicare GP Care Plan Physiotherapy",
        desc: "Physiotherapy for eligible patients referred by their GP under a GP Chronic Condition Management Plan (GPCCMP). Bulk billing is available for eligible appointments at our Yagoona clinic.",
        href: "/bulk-billing-physiotherapy-yagoona",
        icon: "doc",
      },
      {
        n: 22,
        id: "dva",
        name: "DVA Physiotherapy",
        desc: "Physiotherapy for eligible DVA Gold Card holders, and White Card holders for accepted conditions, subject to referral and funding requirements.",
        href: "/dva-physiotherapy",
        icon: "shield",
      },
      {
        n: 23,
        id: "ndis",
        name: "NDIS Physiotherapy",
        desc: "Individualised physiotherapy for agency-managed, plan-managed and self-managed NDIS participants — strengthening, mobility, functional training and falls prevention.",
        href: "/ndis-physiotherapy-newcastle",
        icon: "shield",
      },
      {
        n: 24,
        id: "support-at-home",
        name: "Support at Home Physiotherapy",
        desc: "Physiotherapy for older Australians receiving eligible Support at Home services — assessment, mobility and strengthening, falls prevention and rehabilitation.",
        href: "/support-at-home-physiotherapy-newcastle",
        icon: "heart",
      },
      {
        n: 25,
        id: "workcover",
        name: "WorkCover Physiotherapy",
        desc: "Physiotherapy for people with eligible NSW workers compensation claims, focused on physical function, graded activity and return-to-work planning.",
        href: "/workers-compensation-physiotherapy",
        icon: "doc",
      },
      {
        n: 26,
        id: "ctp",
        name: "CTP Physiotherapy",
        desc: "Physiotherapy after a motor vehicle accident for patients with an eligible NSW Compulsory Third Party (CTP) claim — pain management, movement rehabilitation and strengthening.",
        href: "/ctp-physiotherapy",
        icon: "doc",
      },
      {
        n: 28,
        id: "bulk-billing",
        name: "Bulk Billing Physiotherapy (Yagoona)",
        desc: "Bulk billed physiotherapy in Yagoona for eligible Medicare patients with a GP Chronic Condition Management Plan. Eligible appointments have no out-of-pocket gap fee.",
        href: "/bulk-billing-physiotherapy-yagoona",
        icon: "check",
      },
      {
        n: 29,
        id: "bulk-billed-gpccmp",
        name: "Bulk Billed Medicare GPCCMP Physiotherapy",
        desc: "Access physiotherapy in Yagoona through an eligible GPCCMP referral, with bulk billing available for eligible Medicare-funded appointments.",
        href: "/bulk-billing-physiotherapy-yagoona#how-it-works",
        icon: "check",
      },
    ],
  },
  {
    id: "home-visits",
    title: "Home Visit Physiotherapy",
    intro: "For people who have difficulty attending a clinic, in eligible service areas.",
    services: [
      {
        n: 27,
        id: "home-visit-physiotherapy",
        name: "Home Visit Physiotherapy",
        desc: "Home visits for people who have difficulty attending a clinic — rehabilitation after hospital discharge, falls prevention, aged care, NDIS physiotherapy and mobility training in eligible areas.",
        href: "/home-visits",
        icon: "home",
      },
    ],
  },
];

export const allDirectoryServices = serviceDirectory.flatMap((c) => c.services);
