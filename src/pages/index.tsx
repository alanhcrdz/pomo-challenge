import styles from '../styles/components/Login.module.css';
import Head from 'next/head';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//sign in/out config
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
    const [session, loading] = useSession();
    const router = useRouter();
    const url = process.env.REACT_APP_URL



    useEffect(() => {
        if (session) {
            router.push('/home')
        }
    }, [session, router])

    if (loading) {
        return <div className={styles.container}>
            <p>Carregando...</p>
        </div>
    }

    return (

        <>
            <Head>
                <title>PomoChallenge - Login</title>
            </Head>
            {!session && (
                <div className={styles.container}>
                    <img src="/pomotransparent.png" alt="Logo" />
                    <h2>PomoChallenge</h2>
                    <p>Bem-vindo(a)!</p>
                    <div className={styles.socialAuth}>


                        <p>Faça login para começar</p>



                    </div>

                    <div className={styles.inputContainer}>


                        <button onClick={() => {
                            signIn('github', { callbackUrl: `${url}/home` }); /* remove callbackUrl to choose a provider */
                        }}>
                            Login com GitHub
                        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        </button>

                    </div>

                    <div className={styles.inputContainer}>
                        <button onClick={() => {
                            signIn('auth0', { callbackUrl: `${url}/home` }); /* remove callbackUrl to choose a provider */
                        }}>
                            Login com Auth0
                        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />

                        </button>
                    </div>



                    {/*  {session && (
                        <div className={styles.socialAuth}>

                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                            <p>Logado como {session.user.name}, Redirecionando...</p>

                        </div>


                    )} */}

                </div>

            )}
        </>

    )
}


