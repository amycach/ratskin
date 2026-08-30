import styles_global from "../styles/App.module.css";
import styles from "../styles/Shows.module.css"

import Show from "../components/Show";

import ratthew from "../assets/rat-pngs/rat-ratthew.avif";
import ratalie from "../assets/rat-pngs/rat-ratalie.avif";
import ratricia from "../assets/rat-pngs/rat-ratricia.avif"

import posterBarnHaus from "../assets/posters/poster-barn-haus.avif";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Shows() {

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
      <div className={styles.shows_container}>
        
        <div className={styles.show_container_relative}>
          <img className={styles.ratalie}src={ratalie} alt="ratalie"></img>
          
          <Show showName={"Barn Haus"} showDate={"SEPTEMBER 11"} location={"Buddies in Bad Times Theatre"} city={"Toronto, ON"} poster={posterBarnHaus} link={"https://www.showpass.com/gay-rights-vol-14/?source_channel=discovery"}></Show>
        </div>
        {/* <div className={styles.show_container_relative}>
          <img className={styles.ratricia}src={ratricia} alt="ratalie"></img>
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 13"} location={"Toucan"} city={"Kingston, ON"} poster={posterTour} link={"https://www.bandsintown.com/e/108709206-the-ratskin-family-band-at-the-toucan?came_from=209&utm_medium=web&utm_source=artist_page&utm_campaign=ticket_rsvp"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratthew}src={ratthew} alt="ratalie"></img>
          <Show showName={"Musique & Draglesque"} showDate={"AUGUST 15"} location={"187 Rue Bigaouette"} city={"Quebec City, QC"} poster={posterQC} link={"https://lepointdevente.com/billets/ratskin?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaduJs8-8idAf_TD1aqpRZOxET8HqmX566VQk8_jn4d-L9Cv8g77Oz9hRWMFMQ_aem_ah-juuXgHW7d1yOF-eZYQQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio"}></Show>
        </div> */}
      </div>
    </m.div>
  );
}