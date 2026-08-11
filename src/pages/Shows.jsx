import styles_global from "../styles/App.module.css";
import styles from "../styles/Shows.module.css"

import Show from "../components/Show";

import ratthew from "../assets/Ratthew NO BG.png";
import ratalie from "../assets/Ratalie NO BG.png";
import ratricia from "../assets/Ratricia NO BG.png"

import posterBarrie from "../assets/poster-barrie.png";
import posterQC from "../assets/poster-qc.png";
import posterTour from "../assets/poster-tour.png";

import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 13"} location={"Toucan"} city={"Kingston, ON"} poster={posterTour} link={"https://l.instagram.com/?u=https%3A%2F%2Fwww.bandsintown.com%2Fe%2F108709206-the-ratskin-family-band-at-the-toucan%3Fcame_from%3D209%26utm_medium%3Dweb%26utm_source%3Dartist_page%26utm_campaign%3Dticket_rsvp%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafqNPKcPADBTnfM_ned5F9gy-3uNjm65fhfbj33WSYqWO7bgMlhKnuj0O9eWA_aem_dOtr4OXhi-p6Hctkgyx2Vg&e=AUB26N85-wlcL4bRBic3S-jTSVgQwWPFvdgCd5KeRF4FTvNozstTuuVHE4QkLhDA-Y_rFWv_9y987W9IORomC86GLrNq7GUy5O2tWhOf0_SmebZf25Pv9Dvmt-SAtvxYpJBiMGvxVsYBrEltw-d-h8Y"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 14"} location={"House of Targ"} city={"Ottawa, ON"} poster={posterTour} link={"https://l.instagram.com/?u=https%3A%2F%2Fwww.eventbrite.ca%2Fe%2Ffriendly-frogs-freak-show-the-ratskin-family-band-the-oscillators-tickets-1994488625168%3Faff%3Dweb%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafs159NaNp0l6VO8upuH_nmZP1h5TSLC1mVkjnYcGEPigfbyTFBnmh66Gpqhg_aem_jEqiregH8YazG_SJY0m7CA&e=AUD5iWKDPObZ6iAK7PrQVaK6w2TRBvY5MIr-jBKdIQ_zqxzNmfrHgQp4NGEh9Oi9-uYFWRVMtcZRLsFfbtNTO_-Gsk-1V0cfv9Pq1Ng4SRxFaaRzNYPtjIX_Q2aJZ9mXEFEHwryUbeNyJwZ_Wflt490"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratthew}src={ratthew} alt="ratalie"></img>
          <Show showName={"Musique & Draglesque"} showDate={"AUGUST 15"} location={"187 Rue Bigaouette"} city={"Quebec City, QC"} poster={posterQC} link={"https://lepointdevente.com/billets/ratskin?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaduJs8-8idAf_TD1aqpRZOxET8HqmX566VQk8_jn4d-L9Cv8g77Oz9hRWMFMQ_aem_ah-juuXgHW7d1yOF-eZYQQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <Show showName={"The Friendly Frogs Freak Show"} showDate={"AUGUST 16"} location={"Quai des Brumes"} city={"Montreal, QC"} poster={posterTour} link={"https://l.instagram.com/?u=https%3A%2F%2Fthepointofsale.com%2Ftickets%2Ffrogs-ratskin-quai%3Ffbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafONmBz02dG3XkaHFw7bZDNrumnbQz_904WHMOqqJCAQfcC8I3eU9tulKjZig_aem_YR1Er5Y119abQcZHlRi3kQ%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUBy-PoJeG7hdNp8zUXffiXUu03z2jLKtRV2AL1gL3aSu_SGvHQF35Y6wHy47kTZTMW2nkDRxydz1t-xQN4aj_UYbas8-LZS5A7r2HmhqFZlSGQKrJVFQTIYExrK7z27GA_0p4ce-BdNMdVekFRuctE"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratricia}src={ratricia} alt="ratalie"></img>
          <Show showName={"Big Gay Weekend"} showDate={"AUGUST 29"} location={"CW Coop's"} city={"Barrie, ON"} poster={posterBarrie} link={"https://tixert.com/events/the-ratskin-family-band--more--cw-coops-barrie-on?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaddOXiadUm8gGq_Nhn9ZnpVa-hnqF2j6mEb3TobFWGi2SqVdwZ7WdmO1flR4w_aem_jEOcfRMmafoS5YZ1waKOdw#tickets"}></Show>
        </div>
      </div>
    </m.div>
  );
}