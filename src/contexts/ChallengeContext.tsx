import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number;
    currExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;

}


interface ChallengesProviderProps {  //typescript
    children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currExperience, setCurrExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission
    }, [])

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge);
        new Audio('./notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎊', {
                body: `Valendo ${challenge.amount} xp!`,
                silent: true,
                icon: 'favicon.png'
            })
        }

    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return
        }
        const { amount } = activeChallenge;

        let finalExperience = currExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
            setCurrExperience(finalExperience);
            setActiveChallenge(null);
            setChallengesCompleted(challengesCompleted + 1)
        }
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>

    )
}


