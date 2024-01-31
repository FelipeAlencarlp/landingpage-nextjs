import styles from "./Home.module.scss";
import Features from "./components/features";
import Header from "./components/header";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
        <Header />
        <Welcome />
        <Features />
    </main>
  );
}
