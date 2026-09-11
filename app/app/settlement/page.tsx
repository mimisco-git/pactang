import { settlementDraft } from "@/lib/data";
import { naira } from "@/lib/utils";

const fair = [
  { k: "Fairness", v: "Mediator prior consultancy with Alpha still unresolved." },
  { k: "Authority", v: settlementDraft.authority },
  { k: "Independence", v: "Replace mediator unless both parties give informed written consent." },
  { k: "Resolution", v: "Draft must list releases, reserved defects, payment dates and no admission." },
];

export default function Settlement() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settlement desk</h1>
      <p className="text-sm text-[#f4efe4]/65">Working figure {naira(settlementDraft.amount)}. This is not an approved offer.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {fair.map((f) => (
          <div key={f.k} className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
            <p className="text-xs uppercase tracking-wide text-[#c9a227]">{f.k}</p>
            <p className="mt-2 text-sm">{f.v}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-[#243049] p-4 text-sm">
        <p className="font-medium">To be released</p>
        <ul className="mt-2 list-disc pl-5 text-[#f4efe4]/75">
          {settlementDraft.released.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="mt-4 font-medium">Reserved</p>
        <ul className="mt-2 list-disc pl-5 text-[#f4efe4]/75">
          {settlementDraft.reserved.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="mt-4 text-[#f4efe4]/60">Admission of liability: {settlementDraft.admission ? "yes" : "no"}</p>
      </div>
    </div>
  );
}
