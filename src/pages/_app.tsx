import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengeContext';


function MyApp({ Component, pageProps }) {

  //tudo que for fixo vai aqui
  return (

    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>


  )
}

export default MyApp
