import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengeContext';


function MyApp({ Component, pageProps }) {

  //tudo que for fixo vai aqui
  return (
    <Component {...pageProps} />

  )
}

export default MyApp
