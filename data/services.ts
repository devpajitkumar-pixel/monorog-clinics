import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "stress-anxiety-care",
    slug: "stress-and-anxiety-management",
    title: "Stress & Anxiety Disorders",
    shortDescription:
      "Compassionate, evidence-based clinical evaluation and treatment for generalized anxiety, panic, chronic worry, and occupational burnout.",
    fullDescription:
      "Modern lifestyles, academic pressures, and personal challenges can elevate stress beyond physiological coping thresholds. Our clinical consultations provide structured diagnostic evaluation, personalized therapeutic guidance, and, where clinically indicated, pharmacological support to restore emotional equilibrium and daily functioning.",
    iconName: "HeartPulse",
    category: "mental-health",
    symptomsAddressed: [
      "Persistent restlessness and feeling constantly on edge",
      "Sudden panic episodes, palpitations, or hyperventilation",
      "Chronic health worries or performance-related anxiety",
      "Tension headaches, muscular stiffness, and somatic tension",
      "Avoidance of social gatherings, workplace duties, or travel",
    ],
    whatToExpect: [
      "A peaceful, non-judgmental discussion regarding your symptom timeline and triggers.",
      "Comprehensive screening to rule out physical conditions such as thyroid or cardiac factors.",
      "A collaborative treatment roadmap encompassing cognitive strategies, lifestyle pacing, and gentle medical care.",
    ],
    whoShouldConsult: [
      "Individuals whose daily work, sleep, or family peace is impaired by overwhelming worry.",
      "Students or working professionals experiencing intense exam or workplace burnout.",
    ],
    consultationFormat: "Initial Assessment: 45–60 mins | Follow-ups: 20–30 mins",
  },
  {
    id: "mood-depression-care",
    slug: "mood-and-depression-care",
    title: "Depression & Mood Disorders",
    shortDescription:
      "Supportive, structured clinical management for unipolar depression, persistent sadness, low energy, and cyclical mood fluctuations.",
    fullDescription:
      "Depression is a treatable biological and psychological health condition, not a personal failing or lack of willpower. At Manorog Clinic, we adopt a thorough, humane approach to diagnosing mood disorders, ensuring every patient feels understood, respected, and supported throughout their recovery journey.",
    iconName: "Sun",
    category: "mental-health",
    symptomsAddressed: [
      "Pervasive feeling of sadness, emptiness, or emotional numbness",
      "Loss of interest or pleasure in previously cherished hobbies",
      "Unexplained chronic fatigue, lethargy, or sluggish movement",
      "Disrupted appetite, significant weight shifts, or brain fog",
      "Feelings of worthlessness, guilt, or hopelessness",
    ],
    whatToExpect: [
      "Detailed medical history intake and family psychiatric history review.",
      "Validation of your personal feelings in a strictly confidential space.",
      "Individualized pharmacological and psycho-educational guidance tailored to your pace.",
    ],
    whoShouldConsult: [
      "Anyone experiencing persistent sadness or loss of vitality lasting more than two weeks.",
      "Family members seeking expert clinical perspective for a loved one withdrawing from life.",
    ],
    consultationFormat: "Comprehensive Evaluation: 45–60 mins | Progress Review: 30 mins",
  },
  {
    id: "sleep-insomnia-clinic",
    slug: "sleep-and-insomnia-evaluation",
    title: "Sleep & Insomnia Evaluation",
    shortDescription:
      "Clinical assessment of sleep onset difficulties, nocturnal awakenings, non-restorative sleep, and circadian rhythm irregularities.",
    fullDescription:
      "Restorative sleep is the cornerstone of neurological and physical vitality. Chronic insomnia often stems from an interplay between neurological circadian balance, stress hormones, and environmental sleep hygiene. We evaluate underlying factors rather than merely prescribing temporary sedatives.",
    iconName: "Moon",
    category: "wellness",
    symptomsAddressed: [
      "Taking more than 30–45 minutes to fall asleep night after night",
      "Waking up repeatedly during the night with difficulty returning to sleep",
      "Early morning awakenings accompanied by daytime lethargy and irritability",
      "Excessive daytime somnolence and impaired concentration",
      "Dependence on over-the-counter sleep aids or alcohol to induce sleep",
    ],
    whatToExpect: [
      "Analysis of current sleep logs, bedtime routines, and biological rhythm patterns.",
      "Screening for sleep apnea, restless legs, or nocturnal anxiety spikes.",
      "Implementation of non-pharmacological sleep conditioning combined with safe medical interventions.",
    ],
    whoShouldConsult: [
      "Patients struggling with chronic insomnia exceeding one month.",
      "Shift workers or professionals with disrupted circadian cycles.",
    ],
    consultationFormat: "Initial Evaluation: 40 mins | Follow-ups: 20 mins",
  },
  {
    id: "deaddiction-support",
    slug: "deaddiction-and-lifestyle-support",
    title: "Addiction Recovery & De-Addiction",
    shortDescription:
      "Dignified, confidential medical detoxification, relapse prevention, and emotional rehabilitation for substance and behavioral dependencies.",
    fullDescription:
      "Substance dependence and habit formation require medical expertise, non-judgmental support, and structured harm-reduction strategies. Manorog Clinic provides an empathetic haven where patients and families receive evidence-based de-addiction protocols with complete discretion.",
    iconName: "HeartHandshake",
    category: "mental-health",
    symptomsAddressed: [
      "Inability to control or reduce consumption of alcohol, tobacco, or sedatives",
      "Intense physical or psychological cravings when attempting to abstain",
      "Withdrawal symptoms including tremors, severe sweating, and mood swings",
      "Strain in familial, professional, or social relationships due to dependence",
    ],
    whatToExpect: [
      "Medical assessment of physiological dependency levels and baseline organ health.",
      "Safe, structured outpatient medical detox protocols minimizing withdrawal distress.",
      "Empathetic counseling focusing on relapse triggers, craving management, and family healing.",
    ],
    whoShouldConsult: [
      "Individuals ready to reclaim autonomy from alcohol, nicotine, or substance dependencies.",
      "Families seeking compassionate medical guidance for a dependent relative.",
    ],
    consultationFormat: "Comprehensive Intake: 60 mins | Regular Monitoring: 20–30 mins",
  },
  {
    id: "cognitive-memory-care",
    slug: "cognitive-and-memory-care",
    title: "Memory & Cognitive Health",
    shortDescription:
      "Specialized cognitive screening and management for age-associated forgetfulness, mild cognitive impairment, and geriatric mental health.",
    fullDescription:
      "Healthy brain aging is essential for dignity and independence. We conduct thorough neurocognitive assessments to differentiate between normal age-related forgetfulness, stress-induced brain fog, and degenerative cognitive conditions such as dementia or Alzheimer's disease.",
    iconName: "BrainCircuit",
    category: "mental-health",
    symptomsAddressed: [
      "Frequent memory lapses, repetitive questioning, or misplacing essential items",
      "Confusion regarding dates, locations, or familiar driving routes in Amritsar",
      "Difficulty managing finances, medications, or complex everyday decisions",
      "Sudden personality shifts, uncharacteristic suspicion, or social withdrawal",
    ],
    whatToExpect: [
      "Standardized bedside neurocognitive battery (memory, attention, spatial reasoning).",
      "Evaluation of metabolic, vascular, and nutritional factors (B12, thyroid, electrolytes).",
      "Caregiver support strategies, environmental safety adjustments, and cognitive stabilization.",
    ],
    whoShouldConsult: [
      "Elderly individuals experiencing progressive memory changes.",
      "Adult children seeking objective medical screening for their senior parents.",
    ],
    consultationFormat: "Comprehensive Assessment: 60 mins | Family Guidance: 30 mins",
  },
  {
    id: "general-psychosomatic-care",
    slug: "psychosomatic-and-general-consultation",
    title: "Psychosomatic & General Medical Care",
    shortDescription:
      "Holistic evaluation for chronic physical complaints—such as irritable bowel, chronic aches, or tension—where stress plays a pivotal role.",
    fullDescription:
      "The connection between the mind and the body is profound. Many physical ailments—unexplained digestive disturbances, tension headaches, and chronic bodily pains—are directly amplified by psychological strain. Our consultations integrate medical diagnostic insight with mind-body healing.",
    iconName: "Activity",
    category: "general-care",
    symptomsAddressed: [
      "Chronic stomach discomfort, acidity, or irritable bowel syndrome (IBS)",
      "Unexplained tension headaches or neck/shoulder stiffness unresponsive to pain medication",
      "Non-cardiac chest discomfort or unexplained shortness of breath after normal ECGs",
      "Chronic bodily fatigue with normal routine laboratory workups",
    ],
    whatToExpect: [
      "Holistic review of physical reports, previous prescriptions, and ongoing medical history.",
      "Clear explanation of the autonomic nervous system's impact on bodily organs.",
      "Integrated treatment combining gentle symptomatic relief, nervous system calming, and lifestyle pacing.",
    ],
    whoShouldConsult: [
      "Patients who have visited multiple medical specialists without finding long-term relief.",
      "Anyone seeking an integrated, patient-centered physician consultation in Amritsar.",
    ],
    consultationFormat: "Consultation: 40 mins | Follow-up: 20 mins",
  },
];
