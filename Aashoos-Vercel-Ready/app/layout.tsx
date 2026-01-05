export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8F2] text-[#2E2E2E] font-sans">{children}</body>
    </html>
  );
}