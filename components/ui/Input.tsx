export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />;
}
