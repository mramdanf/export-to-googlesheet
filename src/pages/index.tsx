import Head from 'next/head';
import MainCard from '@/components/main-card';

import classes from './home.module.css';

export default function Home() {
  return (
    <div className={classes.home}>
      <Head>
        <title>Export to Google Sheet</title>
      </Head>
      <div className={classes.content}>
        <h1>Output/Export to Google Sheets</h1>
        <MainCard />
      </div>
    </div>
  );
}
