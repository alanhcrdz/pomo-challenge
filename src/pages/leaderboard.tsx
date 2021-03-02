import Head from 'next/head';
import SideBar from '../components/SideBar';
import styles from '../styles/components/Leaderboard.module.css'


export default function LeaderBoard() {

    return (
        <>
            <Head>
                <title>Leaderboard</title>
            </Head>
            <SideBar />

            <div className={styles.container}>

                <h2>Leaderboard - Coming soon..</h2>
            </div>
        </>



    )
}