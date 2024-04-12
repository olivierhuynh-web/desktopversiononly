'use client';
import { Inter } from 'next/font/google';
// import './globals.css';

import NavigationContextProvider from '../contexts/NavigationContext'; // Importez le composant qui enveloppe le contexte

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function title({ children }) {
  return <div>{children}</div>;
}