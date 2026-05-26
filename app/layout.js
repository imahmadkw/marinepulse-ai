export const metadata = {
  title: "MarinePulse AI",
  description: "Marine Trend Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
