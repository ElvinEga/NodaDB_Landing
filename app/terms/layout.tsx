import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — NodaDB Powered by Kulacore',
  description:
    'Terms of Service for NodaDB database workspace application and nodadb.com services powered by Kulacore.',
  alternates: {
    canonical: 'https://nodadb.com/terms',
  },
  openGraph: {
    title: 'Terms of Service — NodaDB',
    description: 'Terms of Service and legal agreements for NodaDB database workspace by Kulacore.',
    url: 'https://nodadb.com/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
