import './globals.css'

export const metadata = {
  title: 'AI Business Copilot — The Intelligence Layer for the Real World Economy',
  description:
    'AI-powered business intelligence command center that helps mid-size companies monitor operations, discover insights, and make smarter decisions using AI.',
  keywords: ['AI', 'Business Intelligence', 'Operations', 'Automation', 'Enterprise AI'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05060A] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
