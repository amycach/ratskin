import styles_global from "../styles/App.module.css";
import styles from "../styles/Home.module.css";

import ReactCurvedText from "react-curved-text";
import { motion as m } from "framer-motion";
import { NavLink } from "react-router-dom";

import logo from "../assets/ratskinlogo.avif";
import collingwood from "../assets/band-pics/collingwood.jpg";
import buddies from "../assets/band-pics/buddies.jpg";
import family from "../assets/band-pics/family.jpeg";
import thumbnail from "../assets/band-pics/thumbnail.avif";

import angel_rat from "../assets/rat-pngs/rat-angel.avif";
import devil_rat from "../assets/rat-pngs/rat-devil.avif"
import rat_frog from "../assets/rat-pngs/rat-and-frog.avif"

export default function Home() {

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
                width={600}
                height={80}
                cx={350}
                cy={130}
                rx={300}
                ry={100}
                startOffset={200}
                reversed={true}
                text="The World's First and only"
                textProps={{ style: { fontFamily: "Henny Penny", fontSize: "2rem" } }}
              />
            </div>
            <div className={styles.band_text_2}>
              <ReactCurvedText
                width={600}
                height={90}
                cx={390}
                cy={130}
                rx={200}
                ry={100}
                startOffset={160}
                reversed={true}
                text="Drag Country Band"
                textProps={{ style: { fontFamily: "Henny Penny", fontSize: "2rem" } }}
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
        </div>
        {/* <div className={styles_global.center_column}>
          <div className={styles.trucker_title}>
            Tucker music video out now!
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t36H54831oM?si=8bNirz9sjRcYEnZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> */}

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
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.bandsintown.com%2Fe%2F108709206-the-ratskin-family-band-at-the-toucan%3Fcame_from%3D209%26utm_medium%3Dweb%26utm_source%3Dartist_page%26utm_campaign%3Dticket_rsvp%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafqNPKcPADBTnfM_ned5F9gy-3uNjm65fhfbj33WSYqWO7bgMlhKnuj0O9eWA_aem_dOtr4OXhi-p6Hctkgyx2Vg&e=AUB26N85-wlcL4bRBic3S-jTSVgQwWPFvdgCd5KeRF4FTvNozstTuuVHE4QkLhDA-Y_rFWv_9y987W9IORomC86GLrNq7GUy5O2tWhOf0_SmebZf25Pv9Dvmt-SAtvxYpJBiMGvxVsYBrEltw-d-h8Y"
                target="_blank" rel="noopener noreferrer">
                Kingston - August 13th - Toucan
              </a>
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.eventbrite.ca%2Fe%2Ffriendly-frogs-freak-show-the-ratskin-family-band-the-oscillators-tickets-1994488625168%3Faff%3Dweb%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafs159NaNp0l6VO8upuH_nmZP1h5TSLC1mVkjnYcGEPigfbyTFBnmh66Gpqhg_aem_jEqiregH8YazG_SJY0m7CA&e=AUD5iWKDPObZ6iAK7PrQVaK6w2TRBvY5MIr-jBKdIQ_zqxzNmfrHgQp4NGEh9Oi9-uYFWRVMtcZRLsFfbtNTO_-Gsk-1V0cfv9Pq1Ng4SRxFaaRzNYPtjIX_Q2aJZ9mXEFEHwryUbeNyJwZ_Wflt490"
                target="_blank" rel="noopener noreferrer">
                Ottawa - August 14th - House of TARG
              </a>
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fthepointofsale.com%2Ftickets%2Ffrogs-ratskin-quai%3Ffbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafONmBz02dG3XkaHFw7bZDNrumnbQz_904WHMOqqJCAQfcC8I3eU9tulKjZig_aem_YR1Er5Y119abQcZHlRi3kQ%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUBy-PoJeG7hdNp8zUXffiXUu03z2jLKtRV2AL1gL3aSu_SGvHQF35Y6wHy47kTZTMW2nkDRxydz1t-xQN4aj_UYbas8-LZS5A7r2HmhqFZlSGQKrJVFQTIYExrK7z27GA_0p4ce-BdNMdVekFRuctE"
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