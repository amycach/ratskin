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
      <div className={styles_global.page_container_inner}>
        <div className={styles.press_links}>
<a target="_blank" rel="noopener noreferrer" href="https://moosicentertainment.com/2026/07/11/serving-classic-country-with-a-side-of-fresh-and-fierce-face-the-ratskin-family-band-performs-live-at-collingwood-pride/">
          Moosic Entertainment
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://exclaim.ca/artists/ratskin_family_band">
          exclaim!
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.awesomefoundation.org/en/projects/547735-the-ratskin-family-band-back-to-the-cuntry ">
          The Awesome Foundation
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.partonandpearl.com/blog/eh-material-ratskin-family-band-debuts-music-video">
          Patron & Pearl
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.cupsncakespod.com/news/2026/1/22/7454kmrus1hcwbyy372p5ymsxk0d27-s9wea-5pbre-tp3yd-3fdkc (https://www.cupsncakespod.com/news/2026/1/22/7454kmrus1hcwbyy372p5ymsxk0d27-s9wea-5pbre-tp3yd-3fdkc)">
          Cups n cakes
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.thegrindmag.ca/the-ratskin-family-band-keep-the-spirit-of-queer-country-music-alive/">
          The Grind
        </a>
        </div>
        
      </div>
    </m.div>
  );
}