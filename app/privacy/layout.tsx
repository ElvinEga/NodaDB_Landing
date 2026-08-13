import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — NodaDB Powered by Kulacore',
  description:
    'Privacy Policy for NodaDB database workspace. Learn how NodaDB enforces 100% local-first storage and hardware vault encryption.',
  alternates: {
    canonical: 'https://nodadb.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — NodaDB',
    description: 'Privacy Policy for NodaDB database workspace by Kulacore.',
    url: 'https://nodadb.com/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
