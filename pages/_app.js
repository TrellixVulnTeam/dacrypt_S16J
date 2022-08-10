import '../styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion';
import react from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, router,
  pageProps: {session, ...pageProps},  }) {
  return ( 
    <AnimatePresence>
      <>
      <Header />
      </>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      

      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          opacity: 0
        }
      }}>
        
      </motion.div>
    </AnimatePresence>
    

  )
}

export default MyApp
