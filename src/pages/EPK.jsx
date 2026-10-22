import styles_global from "../styles/App.module.css";

import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function EPK() {

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles_global.epk_container}>
<iframe
        src="/EPK-TheRatskinFamilyBand.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
      </div>
      
    </m.div>
  );
}