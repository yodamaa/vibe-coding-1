import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white/50 p-4">
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-100">Overview</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Users</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Settings</Link>
        </li>
      </ul>
    </aside>
  );
}
