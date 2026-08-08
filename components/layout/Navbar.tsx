export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="text-3xl font-black tracking-tight">
          Sentra <span className="text-blue-600">OT</span>
        </div>

        <nav className="hidden gap-10 text-sm font-medium text-slate-700 lg:flex">
          <a href="#">Capabilities</a>
          <a href="#">Methodology</a>
          <a href="#">Industries</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">
          Book Call
        </button>

      </div>
    </header>
  );
}