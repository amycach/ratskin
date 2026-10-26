import styles_global from "../styles/App.module.css";
import styles from "../styles/Home.module.css";

import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import family from "../assets/band-pics/family.jpeg";
import buddies from "../assets/band-pics/buddies.jpg";
import laughter from "../assets/band-pics/laughter.avif";
import thumbnail from "../assets/band-pics/thumbnail.avif";
import buttons from "../assets/band-pics/buttons.avif";

import ep from "../assets/band-pics/album-cover-resized.avif"
import presave_btn_img from "../assets/doodles/button-img-blue.avif";
import presave_btn_img_2 from "../assets/doodles/button-img-blue-2.avif";
import horse from "../assets/doodles/horse.avif";
import horse2 from "../assets/doodles/horse2.avif";
import camera from "../assets/doodles/camera.avif";

import nextShowPoster from "../assets/posters/halloween-poster.png"

import angel_rat from "../assets/rat-pngs/rat-angel.avif";
import devil_rat from "../assets/rat-pngs/rat-devil.avif";
import btn_img from "../assets/doodles/button-img.avif";
import btn_img_2 from "../assets/doodles/button-img-2.avif";

export default function Home() {

  const [credsVisible, setCredsVisible] = useState(false);

  const handleClick = () => {
    setCredsVisible(!credsVisible);
  };

  const goToAlbum = () => {
    window.open("https://distrokid.com/hyperfollow/theratskinfamilyband/back-to-the-cuntry", "_blank", "noopener,noreferrer");
  };

  const goToShow = () => {
    window.open("https://honey-dip.bloomtickets.ca/event/3919", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles_global.page_container}>
      <m.div
        className={styles.home_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles_global.center_column}>
          <div className={styles.photo_grid}>
            <img onClick={handleClick} className={styles.photo_creds_reveal} src={camera} alt="camera icon"></img>
            <div className={styles.photo_buttons_container}>
              <img className={styles.gallery_photo} src={buttons} alt="rats with buttons" />
              <div className={credsVisible ? styles.photo_creds_visible : styles.photo_creds_hidden}>
                <FontAwesomeIcon icon={faCamera} />
                Rey Nemati
              </div>
            </div>
            <div className={styles.photo_thumbnail_container}>
              <img className={styles.gallery_photo} src={thumbnail} alt="rats in music video thumbnail" />
              <div className={credsVisible ? styles.photo_creds_visible : styles.photo_creds_hidden}>
                <FontAwesomeIcon icon={faCamera} />
                Jamie Lujan
              </div>
            </div>
            <div className={styles.photo_laughter_container}>
              <img className={styles.gallery_photo} src={laughter} alt="rats laughing" />
              <div className={credsVisible?styles.photo_creds_visible:styles.photo_creds_hidden}>
                <FontAwesomeIcon icon={faCamera} />
                Rey Nemati
              </div>
            </div>
            <div className={styles.photo_buddies_container}>
              <img className={styles.gallery_photo} src={buddies} alt="rats at buddies" />
              <div className={credsVisible?styles.photo_creds_visible:styles.photo_creds_hidden}>
                <FontAwesomeIcon icon={faCamera} />
                Chelsea Collins
              </div>
            </div>
            <div className={styles.photo_family_container}>
              <img className={styles.gallery_photo} src={family} alt="rats SERIOUS family portrait" />
              <div className={credsVisible?styles.photo_creds_visible:styles.photo_creds_hidden}>
                <FontAwesomeIcon icon={faCamera} />
                Rey Nemati
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <img src={horse} alt="horse doodle"></img>
          <div className={styles.short_bio}>
            The Ratskin Family Band is the world's first and only all drag country band. Formed in April 2024, the DIY "yallternative" group blends high-energy live drag performance with classic country standards, reimagined pop hits, and original queer protest and roots music like their debut single “All You Fascists (Bound to Lose)”. At most drag shows, performers are lip syncing for their lives. But the Ratskin Family Band does not put on your typical drag show. When the self-proclaimed "first and only drag country band in the world" hit the stage, everything is performed live.
          </div>
          <img src={horse2} alt="horse doodle"></img>
        </div>

        <div className={styles_global.center_column}>
          <div onClick={goToAlbum} className={styles_global.album_container}>
            <div className={styles_global.titles}>
              LISTEN TO OUR NEW MUSIC
              <img className={styles_global.presave_button_image} src={presave_btn_img} alt="sparkles and music notes">
              </img>
              <img className={styles_global.presave_button_image_2} src={presave_btn_img_2} alt="sparkles and music notes">
              </img>
            </div>
            <img className={styles_global.album_cover} src={ep} alt="Back to the Cuntry ep cover"></img>
          </div>
          <iframe title="spotify embed" className={styles_global.spotify_embed} data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/10pwp9ZKY5oNFhit622V4E?utm_source=generator&theme=0&si=24d3f8dc117c462a" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>


        <div className={styles_global.center_column}>
          <div className={styles_global.titles}>
            WHERE TO SEE US NEXT
          </div>
          <img onClick={goToShow} src={nextShowPoster} className={styles.next_show_poster} alt="show poster"></img>
          <NavLink className={styles.next_show_link} to="/shows">
            All Upcoming Shows
          </NavLink>
        </div>

        <div className={styles_global.center_column}>
          <div className={styles_global.titles}>
            WATCH OUR NEW MUSIC VIDEO
          </div>
          <iframe className={styles.music_video_iframe} src="https://www.youtube.com/embed/z9zM4JPwsVU?si=Tz0B0WfrNsj-8cqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className={styles.contact_container} id="contact">
          <img className={styles.angel_rat} src={angel_rat} alt="angel rat" loading="lazy"></img>
          <img className={styles.devil_rat} src={devil_rat} alt="devil rat" loading="lazy"></img>
          <div className={styles_global.center_column}>
            <div className={styles.contact_title}>
              Contact us
            </div>
            <div className={styles.contact_text}>
              theratskinfamilyband@gmail.com
            </div>
          </div>
          <div className={styles_global.center_column}>
            <a href="https://substack.com/@theratskinfamilyband" target="_blank" rel="noopener noreferrer" className={styles.mailing_list}>
              JOIN OUR MAILING LIST
              <img className={styles.button_image} src={btn_img} alt="button doodle">
              </img>
              <img className={styles.button_image_2} src={btn_img_2} alt="button doodle">
              </img>
            </a>
          </div>
          <div className={styles_global.center_column}>
            <div className={styles.contact_title}>
              Follow us
            </div>
            <div className={styles.contact_text}>
              Instagram: <a href="https://www.instagram.com/drag.band" target="_blank" rel="noopener noreferrer">drag.band</a>
            </div>
            <div className={styles.contact_text}>
              Youtube: <a href="https://www.youtube.com/@TheRatskinFamilyBand" target="_blank" rel="noopener noreferrer">The Ratskin Family Band</a>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}