import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <head>
        <title>
          Praktikum Next.js Pages Router
        </title>
      </head>
        <h1>Praktikum Next.js Pages Router </h1> <br />
        <p>Mahasiswa D4  Pengembangan Web</p>
    </div>
  )
}
