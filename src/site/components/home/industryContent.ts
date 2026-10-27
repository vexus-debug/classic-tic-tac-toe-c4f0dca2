import type { Industry } from "./industry";

export const promises: Record<Industry, { title: string; body: string; proof: string }[]> = {
  dental: [
    { title: "Stop front-desk revenue leaks", body: "Unpaid copays and procedure balances are flagged before the patient steps out of the clinic.", proof: "Balance alert at checkout" },
    { title: "Reclaim your evenings", body: "Tooth charting and clinical notes are finished chairside during treatment, not at 9:00 PM.", proof: "Notes closed in the chair" },
    { title: "Zero lost lab cases", body: "Crowns, bridges and dentures are tracked from impression to delivery, so there are no chair-time surprises.", proof: "Every case has a due date" },
  ],
  lab: [
    { title: "Zero specimen mix-ups", body: "Barcode accessioning and sample tracking stop misplaced vials and repeat draws.", proof: "One barcode per sample" },
    { title: "Results on WhatsApp", body: "Verified PDF reports go to patients and referring doctors in one click.", proof: "Sent after verification" },
    { title: "See reagent cost and profit", body: "Reagent use per test and referring-doctor margins are calculated for you.", proof: "Margin per test" },
  ],
  eye: [
    { title: "Stop prescriptions walking away", body: "A clean handoff from the refraction chair to your own frame dispensary.", proof: "Rx goes straight to optical" },
    { title: "Accurate optical orders", body: "Single-vision, bifocal and progressive orders reach the workshop without transposition errors.", proof: "Order status per patient" },
    { title: "Automatic patient recalls", body: "Reminders for yearly eye checks and glaucoma reviews bring patients back.", proof: "Recall list built for you" },
  ],
};

export const journeys: Record<Industry, { step: string; detail: string }[]> = {
  dental: [
    { step: "Patient arrival", detail: "Front desk checks the patient in; the dentist sees them in the queue." },
    { step: "Chairside odontogram", detail: "Findings and treatment are charted tooth by tooth during the visit." },
    { step: "Digital lab ticket", detail: "Crown or denture work is sent to the lab with files and a due date." },
    { step: "Cashier and POS checkout", detail: "Fees are ready at the desk; any balance is flagged before exit." },
  ],
  lab: [
    { step: "Sample accessioning", detail: "Each sample is registered and labelled with a barcode on arrival." },
    { step: "Analyzer batching and QC", detail: "Tests are grouped into runs and quality checks are recorded." },
    { step: "Pathologist verification", detail: "Results are reviewed and signed before anything leaves the lab." },
    { step: "WhatsApp PDF dispatch", detail: "The signed report is sent to the patient and referring doctor." },
  ],
  eye: [
    { step: "Patient check-in", detail: "Reception registers the visit and the optometrist sees the queue." },
    { step: "Visual acuity and refraction", detail: "VA, refraction and IOP are recorded in the exam record." },
    { step: "Frame fitting and lens choice", detail: "The signed Rx moves to the dispensary for frame and lens selection." },
    { step: "Workshop and dispensing", detail: "The lens order is tracked until the patient collects their glasses." },
  ],
};

export type Shot = { src: string; label: string };

export const badges: Record<Industry, string[]> = {
  dental: ["₦125,000 copay flagged before exit", "Zirconia crown delivered 1 day early"],
  lab: ["Sample barcoded at accessioning", "Signed report sent on WhatsApp"],
  eye: ["OD −1.25 / OS −1.50 Rx signed", "Bifocal lens order sent to workshop"],
};

export const finance: Record<
  Industry,
  { headline: string; splitTitle: string; split: { name: string; pct: number }[]; barsTitle: string; bars: { name: string; pct: number }[]; barsUnit: string }
> = {
  dental: {
    headline: "Know exactly where every procedure fee goes.",
    splitTitle: "Clinician revenue split (example)",
    split: [
      { name: "Dr. Adeyemi", pct: 40 },
      { name: "Dr. Okafor", pct: 35 },
      { name: "Practice", pct: 25 },
    ],
    barsTitle: "Lab cost as a share of fee",
    bars: [
      { name: "Crown", pct: 38 },
      { name: "Bridge", pct: 41 },
      { name: "Denture", pct: 44 },
      { name: "Night guard", pct: 22 },
    ],
    barsUnit: "% of fee",
  },
  lab: {
    headline: "See which tests actually make money.",
    splitTitle: "Revenue by payer (example)",
    split: [
      { name: "Walk-in patients", pct: 45 },
      { name: "HMO claims", pct: 35 },
      { name: "Referring doctors", pct: 20 },
    ],
    barsTitle: "Reagent cost as a share of test price",
    bars: [
      { name: "Full blood count", pct: 18 },
      { name: "Lipid profile", pct: 26 },
      { name: "HbA1c", pct: 34 },
      { name: "Hormone panel", pct: 41 },
    ],
    barsUnit: "% of price",
  },
  eye: {
    headline: "Separate consult income from optical sales.",
    splitTitle: "Revenue mix (example)",
    split: [
      { name: "Optical dispensary", pct: 55 },
      { name: "Consultations", pct: 30 },
      { name: "Procedures", pct: 15 },
    ],
    barsTitle: "Frame and lens margin",
    bars: [
      { name: "Single vision", pct: 52 },
      { name: "Bifocal", pct: 46 },
      { name: "Progressive", pct: 38 },
      { name: "Contact lenses", pct: 31 },
    ],
    barsUnit: "% margin",
  },
};
