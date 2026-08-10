import styles_global from "../styles/App.module.css";

import {motion as m } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function MeetTheRats() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div>
        In no particular order (except for alphabetical)
      </div>
      <div>
        <div>
          Amanda Prior
        </div>
        <div>
          Kitty Creature
        </div>
        <div>
          Pinny Merle
        </div>
        <div>
          Tago Mago
        </div>
        <div>
          Terrie Dikoff
        </div>
        <div>
          Zephline
        </div>
      </div>
      <div>
        Friends of the rats
      </div>
    </m.div>
  );
}