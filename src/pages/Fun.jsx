import styles_global from "../styles/App.module.css";
import CardSet from "../components/CardSet.jsx"

import pinupAmanda from "../assets/cards/pinup/pinup-amanda.PNG";
import pinupKitty from "../assets/cards/pinup/pinup-kitty.PNG";
import pinupPinny from "../assets/cards/pinup/pinup-pinny.png";
import pinupTago from "../assets/cards/pinup/pinup-tago.PNG";
import pinupTerrie from "../assets/cards/pinup/pinup-terrie.PNG";
import pinupZeph from "../assets/cards/pinup/pinup-zephline.PNG";

import pixelAmanda from "../assets/cards/pixel/pixel-amanda.png";
import pixelKitty from "../assets/cards/pixel/pixel-kitty.png";
import pixelPinny from "../assets/cards/pixel/pixel-pinny.png";
import pixelTago from "../assets/cards/pixel/pixel-tago.png";
import pixelTerrie from "../assets/cards/pixel/pixel-terrie.png";
import pixelZeph from "../assets/cards/pixel/pixel-zephline.png";

import waterAmanda from "../assets/cards/watercolour/watercolour-amanda.png";
import waterKitty from "../assets/cards/watercolour/watercolour-kitty.png";
import waterPinny from "../assets/cards/watercolour/watercolour-pinny.png";
import waterTago from "../assets/cards/watercolour/watercolour-tago.png";
import waterTerrie from "../assets/cards/watercolour/watercolour-terrie.png";
import waterZeph from "../assets/cards/watercolour/watercolour-zephline.png";

import spookyAmanda from "../assets/cards/spooky/j-dexter.png";
import spookyJelly from "../assets/cards/spooky/j-jelly.png";
import spookyKitty from "../assets/cards/spooky/j-kitty.png";
import spookyTago from "../assets/cards/spooky/j-tago.PNG";
import spookyTerrie from "../assets/cards/spooky/j-terrie.png";
import spookyZeph from "../assets/cards/spooky/j-zephline.png";

import sketchAmanda from "../assets/cards/sketch/t-dexter.png";
import sketchJelly from "../assets/cards/sketch/t-jelly.png";
import sketchKitty from "../assets/cards/sketch/t-kitty.png";
import sketchTago from "../assets/cards/sketch/t-tago.png";
import sketchTerrie from "../assets/cards/sketch/t-terrie.png";
import sketchZeph from "../assets/cards/sketch/t-zephline.png";

import cartoonAmanda from "../assets/cards/cartoon/z-dexter.png";
import cartoonJelly from "../assets/cards/cartoon/z-jelly.png";
import cartoonKitty from "../assets/cards/cartoon/z-kitty.png";
import cartoonTago from "../assets/cards/cartoon/z-tago.png";
import cartoonTerrie from "../assets/cards/cartoon/z-terrie.png";
import cartoonZeph from "../assets/cards/cartoon/z-zephline.png";

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Fun() {

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
      <div>
        Dress up Terrie, Trading card catalog, Which rat are you quiz
      </div>
      <div>
        <div>
          Ratskin trading card catalog
        </div>
        <CardSet setName={"Pinup"} artist={"Zephline"} images={[pinupAmanda, pinupKitty, pinupPinny, pinupTago, pinupTerrie, pinupZeph]}></CardSet>
        <CardSet setName={"Pixel"} artist={"Terrie Dikoff"} images={[pixelAmanda, pixelKitty, pixelPinny, pixelTago, pixelTerrie, pixelZeph]}></CardSet>
        <CardSet setName={"Watercolour"} artist={"Terrie Dikoff"} images={[waterAmanda, waterKitty, waterPinny, waterTago, waterTerrie, waterZeph]}></CardSet> 
        <CardSet setName={"Spooky"} artist={"Jelly"} images={[spookyAmanda, spookyJelly, spookyKitty, spookyTago, spookyTerrie, spookyZeph]}></CardSet>
        <CardSet setName={"Sketchy"} artist={"Terrie Dikoff"} images={[sketchAmanda, sketchJelly, sketchKitty, sketchTago, sketchTerrie, sketchZeph]}></CardSet>
        <CardSet setName={"Cartoon"} artist={"Zephline"} images={[cartoonAmanda, cartoonJelly, cartoonKitty, cartoonTago, cartoonTerrie, cartoonZeph]}></CardSet>
      </div>
    </m.div>
  );
}