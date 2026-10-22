import styles_global from "../styles/App.module.css";
import styles from "../styles/About.module.css"

import pose from "../assets/band-pics/prom.avif"
import amanda from "../assets/solo-shots/amanda.png";
import kitty from "../assets/solo-shots/kitty.png";
import pinny from "../assets/solo-shots/pinny.png";
import tago from "../assets/solo-shots/tago.png";
import terrie from "../assets/solo-shots/terrie.png";
import zeph from "../assets/solo-shots/zephline.png";
import jelly from "../assets/solo-shots/jelly.png";

import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function About() {

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
        <div className={styles.bio_text}>
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
        <img className={styles.family_photo} src={pose} alt="ratskin family band"></img>
      </div>
      <div className={styles_global.titles}>
        MEET THE RATS
      </div>
      <div className={styles.meet_rats_container}>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Amanda Prior
          </div>
          <img className={styles.photos} src={amanda} alt="Amanda Prior"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Banjo and mandolin player, worker of the mic, email warrior, music producer
              </div>
            </div>
            {/* <div className={styles.quote_container}>
              <div>
                ""
              </div>
              <div className={styles.quote_citation}>
                -
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Kitty Creature
          </div>
          <img className={styles.photos} src={kitty} alt="Kitty Creature"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Fiddler, master of puppets, master of posters, master of drawing all the little rats throughout this website
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Pinny Merle
          </div>
          <img className={styles.photos} src={pinny} alt="Pinny Merle"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Electric guitar and pedal steel player, riff queen, bluegrass expert
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Tago Mago
          </div>
          <img className={styles.photos} src={tago} alt="Tago Mago"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Drummer, VAN MAMA!!!
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Terrie Dikoff
          </div>
          <img className={styles.photos} src={terrie} alt="Terrie Dikoff"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Bassist, high notes
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Zephline
          </div>
          <img className={styles.photos} src={zeph} alt="Zephline"></img>
          <div className={styles.descriptions}>
            <div>
              <div className={styles.roles_title}>
                Band roles:
              </div>
              <div className={styles.roles}>
                Acoustic guitar player, resident crafty girl, snack provider
              </div>
            </div>
          </div>
        </div>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Jelly
          </div>
          <img className={styles.photos} src={jelly} alt="Jelly"></img>
          <div className={styles.descriptions}>
            <div className={styles.quote_container}>
              <div>
                "Oi oi mate wot's all this then? xx"
              </div>
              <div className={styles.quote_citation}>
                -Jelly after leaving us for London, England
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}