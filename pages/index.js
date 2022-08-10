import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";


export default function Home({ posts }) {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('api/mail', {
      method: "post",
      body: JSON.stringify(formData)
    })
    console.log(formData);
  }
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  
  useEffect(() =>  {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'tq41upk7',
        dataset: 'production',
    });

    setMappedPosts(
      posts.map(p => {
        return {
          ...p,
          mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
        }
      })
    );
    } else {
      setMappedPosts([]);
    }
}, [posts]);

return (
  <div>
    <div className={styles.top}>
      <div className={styles.topbody}>
        <h2>Welcome to ENZA</h2><img src="clouds.jpg" alt="" />
        <div className={styles.up}>
          <h3>Subscribe to our newsletter #ENZA</h3>
          <p>Subscribe to our email list to receive news and updates.</p>
          <div className={styles.formz}>
            <form action="/" method='post' onSubmit={handleOnSubmit}>
              <label for="email"></label>
              <input id="email" name='email' type="email" placeholder='Enter your email address' required/>
              <button type="submit"><FontAwesomeIcon icon={faCircleChevronRight} className='iconcol' size="3x" transform="down-4 left-8"  /></button>
            </form>
          </div>
        </div>
      </div>

    </div>
    

    <motion.div initial="hidden" animate="visible" className={styles.main} variants={{
      hidden: {
        scale: .8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1
        }
      },
    }}>
      </motion.div>

    <div className={styles.twomain}>
      {/* <div className={styles.twobody}>
        <h2>About the ENZA Network</h2>
      </div>
      {/* <div className={styles.container}>
        <div className={styles.twobody1}>
          <h4>The Render Network® is the leading provider of decentralized GPU based rendering solutions, revolutionizing the digital creation process.</h4>
          <p>Why render on The Render Network? Because the future is being built today and hardware limitations should not be what keeps you from being a part of the new digital renaissance. Render puts the power of GPU rendering at your fingertips, at a fraction of the cost and speed of in-house rendering.</p>
        </div>
        <div className={styles.twobody2}>
          <p>Founded in 2016 by Jules Urbach, CEO of OTOY, Render is the next step in his dream of the open metaverse. With Headquarters in Los Angeles, CA and a team based around the globe, the Render Network and those behind it have been growing from strength to strength in the years since its establishment.</p>
        </div>
      </div> */}
    </div>
     
      <div className={styles.feed}>
        <h3>Recent Posts:</h3>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
          <motion.div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}whileHover={{
            scale: 1.2,
            transition: {
              duration: .2
            }
          }}>
            <h3>{p.title}</h3>
            <img className={styles.mainImage} src={p.mainImage} />
          </motion.div>
        )) : <>No Posts Yet</>}
      </div>
      
  </div>
);
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://tq41upk7.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length ) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};