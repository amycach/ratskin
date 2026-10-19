import styles_global from "../styles/App.module.css";
import styles from "../styles/Meet.module.css";

import { motion as m } from "framer-motion";
import { useEffect } from "react";

import amanda from "../assets/solo-shots/amanda.png";
import kitty from "../assets/solo-shots/kitty.png";
import pinny from "../assets/solo-shots/pinny.png";
import tago from "../assets/solo-shots/tago.png";
import terrie from "../assets/solo-shots/terrie.png";
import zeph from "../assets/solo-shots/zephline.png";
import jelly from "../assets/solo-shots/jelly.png";

export default function MeetTheRats() {

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
      <div className={styles.meet_rats_container}>
        <div className={styles_global.center_column}>
          <div className={styles.names}>
            Amanda Prior
          </div>
          <img className={styles.photos} src={amanda}></img>
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
          <img className={styles.photos} src={kitty}></img>
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
          <img className={styles.photos} src={pinny}></img>
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
          <img className={styles.photos} src={tago}></img>
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
          <img className={styles.photos} src={terrie}></img>
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
          <img className={styles.photos} src={zeph}></img>
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
          <img className={styles.photos} src={jelly}></img>
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