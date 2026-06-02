import './globals.css';
import React from 'react';

export const metadata = {
  title: 'The Gardenia — Blog & Resources',
  description: 'Insights, news and resources from The Gardenia.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white text-slate-900">{children}</main>
      </body>
    </html>
  );
}
