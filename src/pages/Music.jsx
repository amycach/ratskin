import styles_global from "../styles/App.module.css";
import styles from "../styles/Music.module.css"

import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Music() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles.music_container}>
        <div className={styles_global.center_column}>
          <div className={styles.music_titles}>
            Listen to our latest music <a href="https://distrokid.com/hyperfollow/theratskinfamilyband/trucker?ref=release&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacwnSz3rbjJoN61JY6U1tciv_GqdrFXP7mYiNoVv9UPZ2bYmC8xFTVlfxYGpw_aem_ZY7-hrAz5Iqab2mSU4x9Tg"
              target="_blank" rel="noopener noreferrer">here</a>!
          </div>

          <div className={styles.music_grid}>
            <a href="https://music.amazon.ca/artists/B0GQXHDLYH/the-ratskin-family-band"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'amazon']} />
              Amazon Music
            </a>
            <a href="https://music.apple.com/us/artist/the-ratskin-family-band/1881508010"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'apple']} />
              Apple Music
            </a>
            <a href="https://theratskinfamilyband.bandcamp.com/"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'bandcamp']} />
              Bandcamp
            </a>
            <a href="https://www.deezer.com/en/artist/377004781?host=0&deferredFl=1"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'deezer']} />
              Deezer
            </a>
            <a href="https://music.apple.com/us/artist/the-ratskin-family-band/1881508010"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'itunes']} />
              iTunes
            </a>
            <a href="https://www.qobuz.com/ca-en/interpreter/the-ratskin-family-band/31602714"
              target="_blank" rel="noopener noreferrer">
              Qobuz
            </a>
            <a href="https://open.spotify.com/artist/10pwp9ZKY5oNFhit622V4E"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
              Spotify
            </a>
            <a href="https://tidal.com/artist/75321354"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'tidal']} />
              Tidal
            </a>
            <a href="https://music.youtube.com/@TheRatskinFamilyBand"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
              YouTube Music
            </a>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.music_titles}>
            Music Videos
          </div>
          <div>
            {/* <div>
          <div className={styles.music_video_titles}>
            Trucker
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t36H54831oM?si=8bNirz9sjRcYEnZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> */}
            <div>
              <div className={styles.music_video_titles}>
                All You Facists (Bound to Lose)
              </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t36H54831oM?si=8bNirz9sjRcYEnZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}