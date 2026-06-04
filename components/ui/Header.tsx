import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white/50">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold">Vibe Coding</h2>
        <nav className="text-sm text-gray-600">
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
      <div className="text-sm text-gray-600">yodamaa</div>
    </header>
  );
}
