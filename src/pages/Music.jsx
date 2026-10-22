import styles_global from "../styles/App.module.css";
import styles from "../styles/Music.module.css"

import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ep from "../assets/band-pics/album-cover-resized.avif"
import presave_btn_img from "../assets/doodles/button-img-blue.avif";
import presave_btn_img_2 from "../assets/doodles/button-img-blue-2.avif";

export default function Music() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToAlbum = () => {
    window.open("https://distrokid.com/hyperfollow/theratskinfamilyband/back-to-the-cuntry", "_blank", "noopener,noreferrer");
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles_global.page_container_inner}>
        <div className={styles_global.center_column}>
          <div className={styles_global.center_column}>
            <div onClick={goToAlbum} className={styles_global.album_container}>
              <div className={styles_global.titles}>
                LISTEN TO OUR NEW MUSIC
                <img className={styles_global.presave_button_image} src={presave_btn_img} alt="sparkles and music">
                </img>
                <img className={styles_global.presave_button_image_2} src={presave_btn_img_2} alt="sparkles and music">
                </img>
              </div>
              <img className={styles_global.album_cover} src={ep} alt="Back to the Cuntry ep cover"></img>
            </div>
            <iframe title="spotify embed" className={styles_global.spotify_embed} data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/10pwp9ZKY5oNFhit622V4E?utm_source=generator&theme=0&si=24d3f8dc117c462a" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
          <div className={styles_global.titles}>
            MUSIC VIDEOS
          </div>
          <div className={styles.videos_container}>
            <div>
              <div className={styles.music_video_titles}>
                Trucker
              </div>
              <iframe className={styles.music_video_iframe} src="https://www.youtube.com/embed/z9zM4JPwsVU?si=Tz0B0WfrNsj-8cqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={styles.music_video_container}>
              <div className={styles.music_video_titles}>
                All You Facists (Bound to Lose)
              </div>
              <iframe className={styles.music_video_iframe} src="https://www.youtube.com/embed/t36H54831oM?si=8bNirz9sjRcYEnZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}