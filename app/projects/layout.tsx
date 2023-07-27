export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-blue-600/20 to-zinc-900 ">
      {children}
    </div>
  );
}
