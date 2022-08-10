import styles from '../styles/Login.module.scss';
import {
    faGoogle, faFacebookF, faApple
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
            return (
                <main className={styles.main}>
                    <div className={styles.bg}>
                    <img 
                        src='cloudssign.jpg'
                    />
                    </div>
                    <div className={styles.body}>
                
                    <div className={styles.in}>
                    <div className={styles.com}>
                        <h3>ENZA</h3>
                    </div>
                    <div className={styles.sign}>
                        <h2>Signed in</h2>
                        <div className={styles.bord1}></div>
                        
                        <div className={styles.alr}>
                            <p>Already with us? Click above to sign in.</p>
                        </div>
                    </div>
                    
                    </div>
               
                    <div className={styles.up}>
                    
                        <h2>Hi There!</h2>
                        <div className={styles.bord}></div>
                        <p>Leaving so soon? We hope you visit again!</p>
                        <a onClick={() => signOut()}>Sign Out</a>
                    </div>
                    {/* Sign up section */}
                    </div>
                </main>
    )
            </>
        )
    }
      
    return (
        <main className={styles.main}>
            <div className={styles.bg}>
                <img 
                    src='cloudssign.jpg'
                />
            </div>
            <div className={styles.body}>
                
                <div className={styles.in}>
                    <div className={styles.com}>
                        <h3>ENZA</h3>
                    </div>
                    <div className={styles.sign}>
                        <h2>Sign into account</h2>
                        <div className={styles.bord1}></div>
                        <div className={styles.social}>
                            <a onClick={ ()=>signIn()}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon  icon={faFacebookF} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon  icon={faApple} />
                            </a>
                        </div>
                        <div className={styles.alr}>
                            <p>Already with us? Click above to sign in.</p>
                        </div>
                    </div>
                    
                </div>
               
                <div className={styles.up}>
                    
                    <h2>Hi There!</h2>
                    <div className={styles.bord}></div>
                    <p>Your ENZA journey begins here.</p>
                    <a onClick={() => signOut()}>Sign in</a>
                </div>
                {/* Sign up section */}
            </div>
        </main>
    )
  }