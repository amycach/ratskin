import styles_global from "../styles/App.module.css";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";
import ReactCurvedText from "react-curved-text";
import { motion as m } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/ratskinlogo.avif";
import collingwood from "../assets/band-pics/collingwood.jpg";
import buddies from "../assets/band-pics/buddies.jpg";
import family from "../assets/band-pics/family.jpeg";
import thumbnail from "../assets/band-pics/thumbnail.avif";

import angel_rat from "../assets/rat-pngs/rat-angel.avif";
import devil_rat from "../assets/rat-pngs/rat-devil.avif"
import rat_frog from "../assets/rat-pngs/rat-and-frog.avif"

export default function Home() {

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    // Handler to check the screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Attach listener
    window.addEventListener('resize', handleResize);

    // Clean up listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <div className={styles.band_text}>
            <div>
              <ReactCurvedText
                width={isMobile ? 300 : 600}
                height={isMobile ? 60 : 80}
                cx={isMobile ? 140 : 350}
                cy={130}
                rx={300}
                ry={100}
                startOffset={isMobile ? 300 : 200}
                reversed={true}
                text="The World's First and only"
              />
            </div>
            <div className={styles.band_text_2}>
              <ReactCurvedText
                width={isMobile ? 300 : 600}
                height={90}
                cx={isMobile ? 150 : 390}
                cy={isMobile ? 120 : 130}
                rx={200}
                ry={100}
                startOffset={isMobile ? 230 : 160}
                reversed={true}
                text="Drag Country Band"
              />
            </div>

          </div>
          <div className={styles.photo_grid}>
            <img className={styles.photo_thumbnail} src={thumbnail} alt="rats in music video thumbnail" />
            <img className={styles.photo_collingwood} src={collingwood} alt="rats at collingwood pride" />
            <img className={styles.photo_family} src={family} alt="rats in a family portrait" />
            <img className={styles.photo_buddies} src={buddies} alt="rats at buddies" />
            <img className={styles.logo} src={logo} alt="the ratskin family band" />
          </div>
          <div className={styles.photo_creds}>
            Photos taken by Rey Nemati
          </div>
          <a href="https://distrokid.com/hyperfollow/theratskinfamilyband/back-to-the-cuntry"
            target="_blank" rel="noopener noreferrer" className={styles_global.presave_link}>
            → PRESAVE OUR EP!!! ←
            <FontAwesomeIcon icon={['fas', 'arrow-pointer']} />
          </a>

        </div>

        <div className={styles_global.center_column}>
          <div className={styles.trucker_title}>
            Tucker music video out now!
          </div>
          <iframe className={styles.music_video_iframe} src="https://www.youtube.com/embed/z9zM4JPwsVU?si=Tz0B0WfrNsj-8cqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className={styles_global.center_column}>
          <div className={styles.next_show_title}>
            Where can you see us next?
          </div>
          <div className={styles.tour_container}>
            <div className={styles_global.center_column}>
              <div className={styles.tour_title}>
                The Friendly Frogs Freakshow
              </div>
              <div className={styles.tour_locations}>
                Ontario tour
              </div>
            </div>
            <img src={rat_frog} alt="frog and rat making out" className={styles.tour_image} loading="lazy"></img>
            <div className={styles.tour_locations}>
              <a href="https://www.bandsintown.com/e/108709206-the-ratskin-family-band-at-the-toucan?came_from=209&utm_medium=web&utm_source=artist_page&utm_campaign=ticket_rsvp"
                target="_blank" rel="noopener noreferrer">
                Kingston - August 13th - Toucan
              </a>
              <a href="https://www.eventbrite.ca/e/friendly-frogs-freak-show-the-ratskin-family-band-the-oscillators-tickets-1994488625168"
                target="_blank" rel="noopener noreferrer">
                Ottawa - August 14th - House of TARG
              </a>
              <a href="https://thepointofsale.com/tickets/frogs-ratskin-quai?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadIZqrfIDw6jK9htVKqmYeflCTcB1RJIVkSgW46pEO-ZhvoMruTXm6AkndrAg_aem_cRIeM0MUjo0sNG9ElrJeRg&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank" rel="noopener noreferrer">
                Montreal - August 16th - Quai des Brumes
              </a>
            </div>
          </div>
          <NavLink className={styles.next_show_link} to="/shows">
            All Upcoming Shows
          </NavLink>
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