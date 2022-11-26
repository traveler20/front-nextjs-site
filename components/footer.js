import styles from "styles/footer.module.css";
import Container from "components/container";
import Logo from "components/logo";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [social]
        </div>
      </Container>
    </footer>
  );
}
