import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Health Calculator - 350+ Free Health & Fitness Calculators',
  description:
    'Free and accurate health calculators for BMI, calories, pregnancy, fitness, and more. Get instant results with our comprehensive collection of 350+ calculators.',
  keywords: [
    'health calculator',
    'bmi calculator',
    'calorie calculator',
    'pregnancy calculator',
    'fitness calculator',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
