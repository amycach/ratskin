import styles_global from "../styles/App.module.css";
import CardSet from "../components/CardSet.jsx"

import pinupAmanda from "../assets/pinup-amanda.PNG";
import pinupKitty from "../assets/pinup-kitty.PNG";
import pinupPinny from "../assets/pinup-pinny.png";
import pinupTago from "../assets/pinup-tago.PNG";
import pinupTerrie from "../assets/pinup-terrie.PNG";
import pinupZeph from "../assets/pinup-zephline.PNG";

import pixelAmanda from "../assets/pixel-amanda.png";
import pixelKitty from "../assets/pixel-kitty.png";
import pixelPinny from "../assets/pixel-pinny.png";
import pixelTago from "../assets/pixel-tago.png";
import pixelTerrie from "../assets/pixel-terrie.png";
import pixelZeph from "../assets/pixel-zephline.png";

import waterAmanda from "../assets/watercolour-amanda.png";
import waterKitty from "../assets/watercolour-kitty.png";
import waterPinny from "../assets/watercolour-pinny.png";
import waterTago from "../assets/watercolour-tago.png";
import waterTerrie from "../assets/watercolour-terrie.png";
import waterZeph from "../assets/watercolour-zephline.png";

import spookyAmanda from "../assets/j-dexter.png";
import spookyJelly from "../assets/j-jelly.png";
import spookyKitty from "../assets/j-kitty.png";
import spookyTago from "../assets/j-tago.PNG";
import spookyTerrie from "../assets/j-terrie.png";
import spookyZeph from "../assets/j-zephline.png";

import sketchAmanda from "../assets/t-dexter.png";
import sketchJelly from "../assets/t-jelly.png";
import sketchKitty from "../assets/t-kitty.png";
import sketchTago from "../assets/t-tago.png";
import sketchTerrie from "../assets/t-terrie.png";
import sketchZeph from "../assets/t-zephline.png";

import cartoonAmanda from "../assets/z-dexter.png";
import cartoonJelly from "../assets/z-jelly.png";
import cartoonKitty from "../assets/z-kitty.png";
import cartoonTago from "../assets/z-tago.png";
import cartoonTerrie from "../assets/z-terrie.png";
import cartoonZeph from "../assets/z-zephline.png";

import {motion as m } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Fun() {

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