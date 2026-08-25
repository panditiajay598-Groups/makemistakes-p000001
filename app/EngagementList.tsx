export function EngagementList() {
  const items = [
    { id: "1", title: "Sample Engagement A", status: "Open" },
    { id: "2", title: "Sample Engagement B", status: "Done" },
  ];
  return (
    <section className="space-y-2">
      <p className="text-[10px] font-mono text-teal-700 uppercase">Provided list</p>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between border rounded-xl px-4 py-3 bg-zinc-50">
          <span className="text-sm font-semibold">{item.title}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">{item.status}</span>
        </div>
      ))}
    </section>
  );
}
