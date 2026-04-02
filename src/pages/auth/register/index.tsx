import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";

const RegisterPage = () => {
  const { push } = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push("/auth/login");
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Halaman Register</h1>

      <form className={styles.form} onSubmit={handleRegister}>
        <input className={styles.input} placeholder="Nama" required />
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>

      <p className={styles.footer}>
        Sudah punya akun? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;