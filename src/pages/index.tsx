import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number,
  currExperience: number,
  challengesCompleted: number,

}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currExperience={props.currExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container} >

        <Head>
          <title>Início | Pomo Challenge</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>

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
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}


//backend
export const getServerSideProps: GetServerSideProps = async (ctx) => { //

  const { level, currExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currExperience: Number(currExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
} 
