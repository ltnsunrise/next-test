export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center bg-linear-to-r/srgb from-indigo-500 to-teal-400">
      <nav>this is auth nav</nav>
      {children}
    </div>
  );
}
