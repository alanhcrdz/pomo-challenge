import { useContext, useEffect } from 'react'
import { useSession } from 'next-auth/client';
import { ChallengesContext } from '../contexts/ChallengeContext'

import styles from '../styles/components/Profile.module.css';
import { useRouter } from 'next/router';


export function Profile() {
    const { level } = useContext(ChallengesContext);
    const [session] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session, router])

    return (

        <div className={styles.profileContainer}>

            {session && <>
                <img src={session.user.image} alt={session.user.name} />

                <div>
                    <strong>{session.user.name}</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level" />
                             Level {level}
                    </p>

                </div>

            </>}
            {/*  {!session && <>
                <p>Not signed in...</p>

            </>} */}

        </div>




    )




}