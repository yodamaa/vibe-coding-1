export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-white/50 p-4 shadow-sm">
      {children}
    </div>
  );
}
