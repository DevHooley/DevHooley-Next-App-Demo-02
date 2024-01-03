import "./about.css"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <header>This is the about header</header>
      <body>{children}</body>
    </html>
  );
}
