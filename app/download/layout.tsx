import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download NodaDB — macOS, Windows, Linux & CLI',
  description:
    'Download official NodaDB desktop installers (.dmg, .exe, .AppImage) and CLI packages via Homebrew, Cargo, or cURL script. Powered by Kulacore.',
  alternates: {
    canonical: 'https://nodadb.com/download',
  },
  openGraph: {
    title: 'Download NodaDB — Universal Database Workspace',
    description:
      'Official desktop installers and CLI commands for macOS, Windows, and Linux. Powered by Kulacore.',
    url: 'https://nodadb.com/download',
  },
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
