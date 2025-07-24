import { inter, montserrat, openSans } from "./fonts";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
