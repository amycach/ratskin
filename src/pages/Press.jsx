import styles_global from "../styles/App.module.css";
import styles from "../styles/Press.module.css"

import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Press() {

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
      <div className={styles.press_container}>
        {/* <div>
          <div className={styles_global.titles}>
            ACCOLADES
          </div>
          <div>
          </div>
        </div> */}
        <div className={styles_global.center_column}>
          <div className={styles_global.titles}>
            ARTICLES AND REVIEWS
          </div>
          <div className={styles.press_links}>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://thebuzzmag.ca/2026/09/the-ratskin-family-band-the-worlds-first-and-only-drag-country-band-are-having-an-ep-release-party-in-their-hometown-of-toronto-on-sept-25-2026/">
                The Ratskin Family Band – the world’s first and only drag country band are having an EP release party in their hometown of Toronto on Sept 25, 2026
              </a>
              <div>
                The Buzz
              </div>
              <div>
                September 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://moosicentertainment.com/2026/09/18/a-heartfelt-hootenanny-and-ditty-filled-debut-the-ratskin-family-band-release-debut-ep/">
                A Heartfelt Hootenanny and Ditty-Filled Debut: The Ratskin Family Band release debut EP
              </a>
              <div>
                Moosic Entertainment
              </div>
              <div>
                September 18, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://rainbowrodeomag.com/interview-the-ratskin-family-band-celebrate-drag-everywhere-you-look/">
                INTERVIEW: The Ratskin Family Band Celebrate Drag Everywhere You Look
              </a>
              <div>
                Rainbow Rodeo
              </div>
              <div>
                September 18, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://moosicentertainment.com/2026/07/11/serving-classic-country-with-a-side-of-fresh-and-fierce-face-the-ratskin-family-band-performs-live-at-collingwood-pride/">
                Serving Classic Country With A Side of Fresh and Fierce Face: The Ratskin Family Band performs live at Collingwood Pride
              </a>
              <div>
                Moosic Entertainment
              </div>
              <div>
                July 11, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.partonandpearl.com/blog/eh-material-ratskin-family-band-debuts-music-video">
                Eh Material: Ratskin Family Band debuts music video
              </a>
              <div>
                Patron and Pearl
              </div>
              <div>
                May 22, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cupsncakespod.com/news/2026/1/22/7454kmrus1hcwbyy372p5ymsxk0d27-s9wea-5pbre-tp3yd-3fdkc (https://www.cupsncakespod.com/news/2026/1/22/7454kmrus1hcwbyy372p5ymsxk0d27-s9wea-5pbre-tp3yd-3fdkc)">
                Premiere: The Ratskin Family Band - "All You Fascists (Bound to Lose)"
              </a>
              <div>
                Cups n Cakes
              </div>
              <div>
                April 8, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.thegrindmag.ca/the-ratskin-family-band-keep-the-spirit-of-queer-country-music-alive/">
                The Ratskin Family Band Keep the Spirit of Queer Country Music Alive
              </a>
              <div>
                The Grind
              </div>
              <div>
                March 25, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://exclaim.ca/music/article/the-ratskin-family-band-extend-toronto-residency">
                The Ratskin Family Band Extend Toronto Residency
              </a>
              <div>
                exclaim!
              </div>
              <div>
                Jan 23, 2026
              </div>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.awesomefoundation.org/en/projects/547735-the-ratskin-family-band-back-to-the-cuntry ">
                The Ratskin Family Band - Back to the Cuntry
              </a>
              <div>
                The Awesome Foundation
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}