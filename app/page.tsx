export default function EngagementDetailPage() {
  return (
    <main className="p-6 max-w-md mx-auto space-y-4 bg-white min-h-screen">
      <p className="text-[10px] font-mono text-teal-700 uppercase">Provided detail</p>
      <div className="border rounded-2xl p-5 space-y-2">
        <h1 className="text-xl font-bold">Priority Engagement</h1>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">Open</span>
        <p className="text-sm text-zinc-600">A short note about this engagement for TrustWork.</p>
        <button className="text-sm text-teal-700 font-semibold">Back to list</button>
      </div>
    </main>
  );
}
