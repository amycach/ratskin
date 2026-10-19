import styles_global from "../styles/App.module.css";
import styles from "../styles/Bio.module.css"

import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Bio() {

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
      <div className={styles.bio_container}>
        <div>
           For decades, country and western fans have been begging for an all-drag-queen, -king, 
           and -thing band. The Ratskin Family Band is an answer to these prayers. This glamorous 
           group of critters plays country standards, reimagined pop hits, and original country 
           songs with queer themes. At most drag shows, performers are lip syncing for their lives. 
           But the Ratskin Family Band does not put on your typical drag show. When the 
           self-proclaimed "first and only drag country band in the world" hit the stage, 
           everything is performed live. 
        </div>
        <div>
           In this band you will find familiar faces from Toronto’s 
           drag and music scenes: Amanda Prior (banjo/mando), Kitty Creature (fiddle), 
           Terrie Dickoff (bass), Zephline (acoustic guitar), Pinny Merle (pedal steel/electric 
           guitar/dobro), and Tago Mago (percussion). 
        </div>
        <div>
          Formed in January 2024, The Ratskin Family 
           Band has spent the past two years raising hell and delighting audiences across Canada. 
           In the spring of 2026, The Ratskin Family Band wrapped a 6-month residency at Drom 
           Taberna in downtown Toronto and released their debut EP ‘Back to the Cuntry’ in the 
           fall. They toured all across Ontario & Quebec over the summer in anticipation of this 
           release and will be hitting the road once again to further support it. They have been 
           recognized by the Q Music/Inspire Awards for their contributions to queer music in 
           Canada in addition to being featured in Exclaim!’s “Can’t-Miss” Summer Tours list.

        </div>
        <div> 
           This group sets out to show audiences that country music is for everyone, and as a 
           band, they have carved out the space they wanted to see: an unabashedly queer, country, 
           rollicking good time. The Ratskin Family Band is known for a drag show like no other and 
           a concert the likes of which can’t be found anywhere else on this planet. Laugh, cry, 
           dance, and witness these crossy queers absolutely shred some twangy tunes. 
        </div>
        
      </div>
    </m.div>
  );
}