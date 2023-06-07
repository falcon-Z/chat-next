export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative p-2 min-h-screen grid place-items-center">
      {children}
    </main>
  );
}
