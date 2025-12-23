import WalletDashboard from "@/components/wallet/WalletDashboard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-soft-light [background:radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(34,197,94,0.12),transparent_36%),radial-gradient(circle_at_36%_78%,rgba(139,92,246,0.12),transparent_38%)]" />
      <div className="floating-aurora pointer-events-none" />
      <main className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24 flex flex-col gap-10">
        <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white/85 shadow-[0_24px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="h-2 w-full bg-gradient-to-r from-sky-200 via-emerald-200 to-indigo-200" />
          <div className="p-6 sm:p-10 text-slate-900">
            <WalletDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}
