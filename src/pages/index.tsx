import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';

import { ChallengeBox } from '../components/ChallengeBox';
export default function Home() {
  return (
    <div className={styles.container} >

      <Head>
        <title>Início | Pomo Challenge</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>

  )
}
