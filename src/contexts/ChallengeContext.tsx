import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';




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
    closeLevelUpModal: () => void;



}


interface ChallengesProviderProps {  //typescript
    children: ReactNode;
    level: number,
    currExperience: number,
    challengesCompleted: number,
}




export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider(
    {
        children,
        ...rest
    }: ChallengesProviderProps) {


    const [level, setLevel] = useState(rest.level ?? 1);
    const [currExperience, setCurrExperience] = useState(rest.currExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currExperience', String(currExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currExperience, challengesCompleted]);

    function levelUp() {
        setLevel(level + 1);
        setIsModalOpen(true);
    }

    function closeLevelUpModal() {
        setIsModalOpen(false);
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
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)

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
            completeChallenge,
            closeLevelUpModal
        }}
        >
            {children}

            {  isModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>

    )
}


