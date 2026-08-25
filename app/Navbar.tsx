export function Navbar() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-white">
      <div className="font-bold text-teal-800">TrustWork</div>
      <nav className="flex items-center gap-4 text-sm">
        <a href="#home" className="text-zinc-600 hover:text-zinc-900">Home</a>
        <button className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">Get Started</button>
      </nav>
    </header>
  );
}
