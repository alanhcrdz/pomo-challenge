import styles from '../styles/components/SideBar.module.css';
import { faHome, faAward, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SidebarContext } from '../contexts/SidebarContext';

import { signOut, } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';


export default function SideBar() {

    const router = useRouter();
    const url = process.env.REACT_APP_URL

    const {
        isActive,
        setActive,
    } = useContext(SidebarContext);


    return (
        <div className={styles.container}>
            <div className={styles.sidenav}>
                <img src="/pomotransparent.png" alt="Logo" width="60px" />



                <FontAwesomeIcon
                    className={`${styles.icon} `}
                    icon={faHome} size='2x'
                    onClick={() => {
                        router.push('/home')



                    }} />

                <FontAwesomeIcon
                    className={`${styles.icon} `}
                    icon={faAward} size='2x'
                    onClick={() => {
                        router.push('/leaderboard')

                    }} />






                <FontAwesomeIcon
                    className={`${styles.icon} ${styles.signOutIcon}`}
                    icon={faSignOutAlt} size='2x'
                    onClick={() => {
                        signOut({ callbackUrl: `${url}/` })
                    }} />


            </div>


        </div>
    )
}