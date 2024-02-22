import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

export default function Loading() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <h1>Loading...</h1>
        </ThemeProvider>
      </body>
    </html>
  );
}
