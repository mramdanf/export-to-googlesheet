import { FileChooserProvider } from '@/store/fileChooserContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FileChooserProvider>
      <Component {...pageProps} />
    </FileChooserProvider>
  );
}
