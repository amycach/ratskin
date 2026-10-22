import styles_global from "../styles/App.module.css";
import styles from "../styles/Shows.module.css"

import Show from "../components/Show";

import ratthew from "../assets/rat-pngs/rat-ratthew.avif";
import ratalie from "../assets/rat-pngs/rat-ratalie.avif";
import ratricia from "../assets/rat-pngs/rat-ratricia.avif"

import valuesPoster from "../assets/posters/values-poster.png"
import doomPoster from "../assets/posters/cuntry-doom-poster.png"
import halloweenPoster from "../assets/posters/halloween-poster.png"
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Shows() {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
     const element = document.getElementById('showsContainer');
     element.scrollIntoView();
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles.shows_container} id="showsContainer">
        <div className={styles.show_container_relative}>
          <img className={styles.ratalie}src={ratalie} alt="ratalie"></img>    
          <Show showName={"Ratskin Family Values- Halloween Edition"} showDate={"OCTOBER 24"} location={"Drom Taberna"} city={"Toronto, ON"} poster={valuesPoster} link={"https://www.eventbrite.ca/e/ratskin-family-values-halloween-edition-tickets-2003223901615"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratthew}src={ratthew} alt="ratalie"></img>
          <Show showName={"Halloween Double Dip of Doom"} showDate={"OCTOBER 31"} location={"Honey Dip"} city={"London, ON"} poster={halloweenPoster} link={"https://honey-dip.bloomtickets.ca/event/3919"}></Show>
        </div>
        <div className={styles.show_container_relative}>
          <img className={styles.ratricia}src={ratricia} alt="ratalie"></img>
          <Show showName={"Cuntry Doom"} showDate={"NOVEMBER 7"} location={"The Pilot"} city={"Toronto, ON"} poster={doomPoster} link={"https://www.eventbrite.ca/e/the-ratskin-family-band-with-mother-of-ensh-tickets-1999028367660"}></Show>
        </div>
      </div>
      <div className={styles.shows_container_past}>
        <div className={styles_global.titles}>
          PAST SHOWS
        </div>
        <div>
          September 25, 2026 | The Ratskin Family Band EP Release Party | Drom Taberna, Toronto, ON
        </div>
        <div>
          September 11, 2026 | Barn Haus | Buddies in Bad Times, Toronto, ON
        </div>
        <div>
          August 29, 2026 | Big Gay Weekend | CW Coops, Barrie, ON
        </div>
        <div>
          August 16, 2026 | The Friendly Frogs Freak Show tour | Quai des Brumes, Montreal, QC
        </div>
        <div>
          August 15, 2026 | Musique & Draglesque | Maison de L'Amité, Quebec City, QC
        </div>
        <div>
          August 14, 2026 | The Friendly Frogs Freak Show tour | House of Targ, Ottawa, ON
        </div>
        <div>
          August 13, 2026 | The Friendly Frogs Freak Show tour | Toucan, Kingston, ON
        </div>
        <div>
          July 10, 2026 | Collingwood Pride Main Stage | Collingwood, ON
        </div>
        <div>
          July 9, 2026 | Queer Folk Music of the World | Drom Taberna, Toronto, ON
        </div>
        <div>
          June 24, 2026 | Godspeed Brewery, Toronto, ON
        </div>
        <div>
          June 22, 2026 | Queer Shorts for Palestine | Glad Day, Toronto, ON
        </div>
        <div>
          June 6, 2026 | Pride night | Collective Arts, Hamilton, ON
        </div>
        <div>
          May 24, 2026 | The Funkton Tailgate | Dina's Tavern, Toronto, ON
        </div>
        <div>
          May 15, 2026 | Cuntry Queers | The Hayloft Dance Hall, Prince Edward County, ON
        </div>
        <div>
          May 9, 2026 | Resistance Revue | The River Run Centre, Guelph, ON
        </div>
        <div>
          May 1, 2026 | Single Release Line Dance Party | The Pilot, Toronto, ON
        </div>
        <div>
          April 9, 2026 | The Ratskin Family Band at Drom: 2 Year Anniversary party | Drom Taberna, Toronto, ON
        </div>
        <div>
          March 12, 2026 | The Ratskin Family Band at Drom | Drom Taberna, Toronto, ON
        </div>
        <div>
          February 12, 2026 | The Ratskin Family Band at Drom: Queer Valentines Party | Drom Taberna, Toronto, ON
        </div>
        <div>
          January 8, 2026 | The Ratskin Family Band at Drom: Jelly's Return | Drom Taberna, Toronto, ON
        </div>
        <div>
          December 20, 2025 | Dumpster Raccoon Cinema | Revue Cinema, Toronto, ON
        </div>
        <div>
          December 11, 2025 | The Ratskin Family Band at Drom: Holi-gay | Drom Taberna, Toronto, ON
        </div>
        <div>
          November 28, 2025 | Sondos Family Fundraiser | Tapestry, Toronto, ON
        </div>
        <div>
          November 13, 2025 | The Ratskin Family Band at Drom | Drom Taberna, Toronto, ON
        </div>
        <div>
          October 30, 2025 | Halloween Hootenanny Spurs Night | Lula Lounge, Toronto, ON
        </div>
        <div>
          October 9, 2025 | Live Vermin in Concert with Trash Panda Brass | The Pilot, Toronto, ON
        </div>
        <div>
          August 23, 2025 | Xana & Maurie's Wedding | Hamilton, ON
        </div>
        <div>
          July 29, 2025 | Sapphic Sirens | Bampot Tea House, Toronto, ON
        </div>
        <div>
          June 21, 2025 | Opening for Pigeon Pit | The Arcade, Toronto, ON
        </div>
        <div>
          May 10, 2025 | Barn Burner | Buddies in Bad Times, Toronto, ON
        </div>
        <div>
          April 23, 2025 | Queer Open Mic | Three Dollar Bill, Toronto, ON
        </div>
        <div>
          February 14, 2025 | Valentines day with Trash Panda Brass | Drom Taberna, Toronto, ON
        </div>
        <div>
          December 12, 2024 | The Ratskin Family Band Holiday Show | Houndstooth, Toronto, ON
        </div>
        <div>
          November 15-17, 2024 | Son of the Horse Lord with Alexander Showcase Theatre | Papermill Theatre , Toronto, ON
        </div>
        <div>
          October 31, 2024 | The Rocky Horror Country Show | Drom Taberna, Toronto, ON
        </div>
        <div>
          October 3, 2024 | Queer Open Mic | Three Dollar Bill, Toronto, ON
        </div>
        <div>
          September 21, 2024 | Artists for Palestine | 3030 Dundas W, Toronto, ON
        </div>
        <div>
          September 13, 2024 | bratskin | The Rivoli, Toronto, ON
        </div>
        <div>
          August 7, 2024 | Queer Open Mic | Three Dollar Bill, Toronto, ON
        </div>
        <div>
          June 15, 2024 | Rootin' Tootin' Gay Cowtheys | Three Dollar Bill, Toronto, ON
        </div>
        <div>
          May 30, 2024 | Hag Radio | Drom Taberna, Toronto, ON
        </div>
        <div>
          May 9, 2024 | Absolut Empires Ball | The Great Hall, Toronto, ON
        </div>
        <div>
          April 18, 2024 | The Ratskin Family Band DEBUT | Drom Taberna, Toronto, ON
        </div>
      </div>
    </m.div>
  );
}