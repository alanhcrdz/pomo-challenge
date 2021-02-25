import styles from '../styles/components/ExperienceBar.module.css';

import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';


export function ExperienceBar() {
    const { currExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currExperience * 100) / experienceToNextLevel;




    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
            {/*             <button title="Get xp" onClick={ExperienceHandler}>Get XP</button>
 */}
        </header>
    )

}