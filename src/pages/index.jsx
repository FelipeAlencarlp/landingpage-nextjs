import styles from "./Home.module.scss";
import Contato from "./components/contato";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
        <Header />
        <Welcome />
        <Features />
        <Contato />
        <Footer />
    </main>
  );
}
