import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/404.module.scss";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan."
        />
      </Head>

      <div className={styles.error}>
        <Image
          className={styles.error_image}
          src="/404.png"
          alt="Ilustrasi 404"
          width={300}
          height={300}
          priority
        />

        <h1 className={styles.error_title}>404 - Halaman Tidak Ditemukan</h1>
        <p className={styles.error_desc}>
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>

        <div className={styles.error_actions}>
          <Link className={styles.error_button} href="/">
            Kembali ke Home
          </Link>
        </div>
      </div>
    </>
  );
}