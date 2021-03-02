import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import SideBar from '../components/SideBar';
import styles from '../styles/components/Leaderboard.module.css'


export default function LeaderBoard() {

    const router = useRouter();
    const [session] = useSession();

    useEffect(() => {
        if (!session) {
            router.push('/');
        }

    }, [router, session])

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