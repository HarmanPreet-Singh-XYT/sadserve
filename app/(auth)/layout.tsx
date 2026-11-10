export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="paper flex min-h-screen flex-col">
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}
