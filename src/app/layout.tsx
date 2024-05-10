import { ThemeProvider } from "next-themes"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body className="bg-primLig dark:bg-primary text-black dark:text-white">
      <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
