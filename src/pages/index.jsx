import styles from "./Home.module.scss";
import Header from "./components/header";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
        <Header />
    </main>
  );
}
