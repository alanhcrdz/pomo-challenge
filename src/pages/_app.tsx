import '../styles/global.css';
import { Provider } from 'next-auth/client';
function MyApp({ Component, pageProps }) {

  //tudo que for fixo vai aqui
  return (
    <Provider session={pageProps.session}>

      <Component {...pageProps} />

    </Provider>
  )
}

export default MyApp;
