"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Timer, FileStack, Scale } from "lucide-react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const features = [
  { icon: FileStack, title: "Variation register", text: "Every extra is dated, costed and tied to the officer who had authority to instruct it." },
  { icon: Timer, title: "Notice clocks", text: "Condition-precedent notices countdown so entitlement does not die in WhatsApp." },
  { icon: ShieldCheck, title: "Integrity file", text: "CAC, tax, PPA exclusion flags, and a private log if someone offers a thank-you." },
  { icon: Scale, title: "Settlement desk", text: "FAIR checklist before anyone signs: fairness, authority, independence, resolution." },
];

export default function Home() {
  return (
    <main className="grid-fade min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[#c9a227] text-[#0b1220]">P</span>
          PactaNG
        </div>
        <Link href="/app" className="rounded-full border border-[#c9a227]/40 px-4 py-2 text-sm hover:bg-[#c9a227] hover:text-[#0b1220]">
          Open workspace
        </Link>
      </nav>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.2em] text-[#c9a227]">
            Nigeria public contracts
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Control the contract after the award.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 max-w-md text-[#f4efe4]/75">
            Tender portals publish winners. PactaNG runs the messy middle: variations, notices, evidence, integrity and settlements that survive audit.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-3">
            <Link href="/app" className="inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-5 py-3 text-sm font-medium text-[#0b1220]">
              Launch demo project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="h-[380px] rounded-3xl border border-[#243049] bg-[#0e1628]">
          <Scene />
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-[#243049] bg-[#10192c] p-5">
            <f.icon className="text-[#c9a227]" size={20} />
            <h3 className="mt-3 font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-[#f4efe4]/70">{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
