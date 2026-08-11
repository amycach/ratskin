import styles_global from "../styles/App.module.css";
import styles from "../styles/Shows.module.css"

import Show from "../components/Show";

import ratthew from "../assets/rat-pngs/rat-ratthew.avif";
import ratalie from "../assets/rat-pngs/rat-ratalie.avif";
import ratricia from "../assets/rat-pngs/rat-ratricia.avif"

import posterBarrie from "../assets/posters/poster-barrie.avif";
import posterQC from "../assets/posters/poster-qc.avif";
import posterTour from "../assets/posters/poster-tour.avif";

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
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 13"} location={"Toucan"} city={"Kingston, ON"} poster={posterTour} link={"https://www.bandsintown.com/e/108709206-the-ratskin-family-band-at-the-toucan?came_from=209&utm_medium=web&utm_source=artist_page&utm_campaign=ticket_rsvp"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 14"} location={"House of Targ"} city={"Ottawa, ON"} poster={posterTour} link={"https://www.eventbrite.ca/e/friendly-frogs-freak-show-the-ratskin-family-band-the-oscillators-tickets-1994488625168"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratthew}src={ratthew} alt="ratalie"></img>
          <Show showName={"Musique & Draglesque"} showDate={"AUGUST 15"} location={"187 Rue Bigaouette"} city={"Quebec City, QC"} poster={posterQC} link={"https://lepointdevente.com/billets/ratskin?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaduJs8-8idAf_TD1aqpRZOxET8HqmX566VQk8_jn4d-L9Cv8g77Oz9hRWMFMQ_aem_ah-juuXgHW7d1yOF-eZYQQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 16"} location={"Quai des Brumes"} city={"Montreal, QC"} poster={posterTour} link={"https://thepointofsale.com/tickets/frogs-ratskin-quai?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadIZqrfIDw6jK9htVKqmYeflCTcB1RJIVkSgW46pEO-ZhvoMruTXm6AkndrAg_aem_cRIeM0MUjo0sNG9ElrJeRg&utm_source=ig&utm_medium=social&utm_content=link_in_bio"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratricia}src={ratricia} alt="ratalie"></img>
          <Show showName={"Big Gay Weekend"} showDate={"AUGUST 29"} location={"CW Coop's"} city={"Barrie, ON"} poster={posterBarrie} link={"https://tixert.com/events/the-ratskin-family-band--more--cw-coops-barrie-on?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaddOXiadUm8gGq_Nhn9ZnpVa-hnqF2j6mEb3TobFWGi2SqVdwZ7WdmO1flR4w_aem_jEOcfRMmafoS5YZ1waKOdw#tickets"}></Show>
        </div>
      </div>
    </m.div>
  );
}