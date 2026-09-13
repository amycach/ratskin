import styles_global from "../styles/App.module.css";
import styles from "../styles/Shows.module.css"

import Show from "../components/Show";

import ratthew from "../assets/rat-pngs/rat-ratthew.avif";
import ratalie from "../assets/rat-pngs/rat-ratalie.avif";
import ratricia from "../assets/rat-pngs/rat-ratricia.avif"

import posterEPRelease from "../assets/posters/ep-poster.png"
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
          
          <Show showName={"Back to the Cuntry EP Release Party"} showDate={"SEPTEMBER 25"} location={"Drom Taberna"} city={"Toronto, ON"} poster={posterEPRelease} link={"https://www.eventbrite.ca/e/the-ratskin-family-band-back-to-the-cuntry-ep-release-party-at-drom-tickets-1999938817841"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratthew}src={ratthew} alt="ratalie"></img>
          <Show showName={"The Ratskin Family Band with Mother Of & Ensh"} showDate={"NOVEMBER 7"} location={"The Pilot"} city={"Toronto, ON"} poster={""} link={"https://www.eventbrite.ca/e/the-ratskin-family-band-with-mother-of-ensh-tickets-1999028367660"}></Show>
        </div>
        {/*
        <div className={styles.show_container_relative}>
          <img className={styles.ratricia}src={ratricia} alt="ratalie"></img>
          <Show showName={"Musique & Draglesque"} showDate={"AUGUST 15"} location={"187 Rue Bigaouette"} city={"Quebec City, QC"} poster={posterQC} link={"https://lepointdevente.com/billets/ratskin?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaduJs8-8idAf_TD1aqpRZOxET8HqmX566VQk8_jn4d-L9Cv8g77Oz9hRWMFMQ_aem_ah-juuXgHW7d1yOF-eZYQQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio"}></Show>
        </div> */}
      </div>
    </m.div>
  );
}