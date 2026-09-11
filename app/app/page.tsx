import { project } from "@/lib/data";
import { naira } from "@/lib/utils";
import Link from "next/link";

export default function Overview() {
  const cards = [
    { label: "Contract sum", value: naira(project.value) },
    { label: "Contractor claim", value: naira(project.claim) },
    { label: "Internal valuation", value: naira(project.internalValuation) },
    { label: "Months left", value: String(project.monthsLeft) },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">{project.name}</h1>
        <p className="text-sm text-[#f4efe4]/65">
          {project.employer} | {project.contractor} | status {project.status}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
            <p className="text-xs text-[#f4efe4]/55">{c.label}</p>
            <p className="mt-2 text-xl font-medium">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-[#c9a227]/30 bg-[#16120a] p-5">
        <p className="text-sm font-medium text-[#c9a227]">Risk board</p>
        <ul className="mt-3 space-y-2 text-sm text-[#f4efe4]/80">
          <li>Notice N-11 on VI-12 looks expired. Entitlement at risk.</li>
          <li>Gift approach on 4 Sep 2026 is not reported.</li>
          <li>VI-21 is above Accounting Officer limit and waiting for Tenders Board.</li>
          <li>Internal valuation paper must not leave this workspace.</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link className="rounded-full bg-[#c9a227] px-4 py-2 text-[#0b1220]" href="/app/variations">
          Open variations
        </Link>
        <Link className="rounded-full border border-[#243049] px-4 py-2" href="/app/notices">
          Notice clocks
        </Link>
        <Link className="rounded-full border border-[#243049] px-4 py-2" href="/app/settlement">
          Settlement desk
        </Link>
      </div>
    </div>
  );
}
