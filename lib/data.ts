export type Variation = {
  id: string;
  title: string;
  instructedBy: string;
  date: string;
  estimate: number;
  status: "logged" | "pending-approval" | "approved" | "rejected" | "disputed";
  authority: "Site PM" | "Procurement" | "Accounting Officer" | "Tenders Board" | "Council";
  note: string;
};

export type Notice = {
  id: string;
  type: "EOT" | "Loss and expense" | "Variation" | "Defects" | "Payment";
  title: string;
  served: string;
  deadline: string;
  status: "open" | "served" | "at-risk" | "expired";
};

export type Evidence = {
  id: string;
  name: string;
  kind: "photo" | "pdf" | "minute" | "certificate";
  date: string;
  tag: string;
};

export type Project = {
  id: string;
  name: string;
  employer: string;
  contractor: string;
  value: number;
  spent: number;
  start: string;
  finish: string;
  monthsLeft: number;
  claim: number;
  internalValuation: number;
  status: "live" | "disputed" | "settling";
  variations: Variation[];
  notices: Notice[];
  evidence: Evidence[];
};

export const project: Project = {
  id: "futo-acad-01",
  name: "New Academic Complex",
  employer: "State-owned University",
  contractor: "Alpha Construction Ltd",
  value: 2_000_000_000,
  spent: 1_320_000_000,
  start: "2024-03-01",
  finish: "2026-03-01",
  monthsLeft: 6,
  claim: 450_000_000,
  internalValuation: 150_000_000,
  status: "disputed",
  variations: [
    {
      id: "VI-12",
      title: "Additional lecture theatre steelwork",
      instructedBy: "Project Manager",
      date: "2025-11-02",
      estimate: 86000000,
      status: "disputed",
      authority: "Tenders Board",
      note: "Contractor says oral instruction. No written VI on file until week 14.",
    },
    {
      id: "VI-18",
      title: "Revised facade glazing spec",
      instructedBy: "Architect",
      date: "2025-12-14",
      estimate: 54000000,
      status: "approved",
      authority: "Accounting Officer",
      note: "Written instruction logged same day.",
    },
    {
      id: "VI-21",
      title: "Extra ICT risers, east wing",
      instructedBy: "ICT Directorate",
      date: "2026-02-08",
      estimate: 60000000,
      status: "pending-approval",
      authority: "Tenders Board",
      note: "Above Accounting Officer limit. Awaiting Board.",
    },
  ],
  notices: [
    {
      id: "N-04",
      type: "EOT",
      title: "Late drawings, east block",
      served: "2025-10-20",
      deadline: "2025-11-03",
      status: "served",
    },
    {
      id: "N-09",
      type: "Loss and expense",
      title: "Prolongation, campus access ban",
      served: "",
      deadline: "2026-09-18",
      status: "at-risk",
    },
    {
      id: "N-11",
      type: "Variation",
      title: "VI-12 entitlement notice",
      served: "",
      deadline: "2026-09-12",
      status: "expired",
    },
  ],
  evidence: [
    { id: "E-01", name: "Site diary Oct 2025.pdf", kind: "pdf", date: "2025-10-31", tag: "delay" },
    { id: "E-02", name: "East wing steel photo", kind: "photo", date: "2025-11-04", tag: "VI-12" },
    { id: "E-03", name: "IPC 14", kind: "certificate", date: "2026-01-15", tag: "payment" },
    { id: "E-04", name: "Progress meeting 47", kind: "minute", date: "2026-08-22", tag: "programme" },
  ],
};

export const integrity = {
  contractor: "Alpha Construction Ltd",
  rc: "RC-1842201",
  cac: "Active",
  taxExpiry: "2026-12-31",
  ppaExclusion: "None on file",
  giftLog: {
    date: "2026-09-04",
    text: "MD told Procurement Manager: if you help settle quickly we can make sure you are properly taken care of.",
    reported: false,
  },
};

export const settlementDraft = {
  amount: 250000000,
  released: ["Variations N200m", "EOT N100m", "Materials N80m", "Loss and expense N70m"],
  reserved: ["Latent defects", "Future instructed extras"],
  admission: false,
  authority: "Not yet confirmed by Tenders Board",
};
