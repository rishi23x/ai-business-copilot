export const metadata = {
  title: "AI Business Copilot",
  description: "AI intelligence for business operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
