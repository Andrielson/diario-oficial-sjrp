import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diário Oficial SJRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Newsletter do <br />
          Diário Oficial de <br />
          <a href="https://riopreto.sp.gov.br" target="_blank">
            São José do Rio Preto-SP
          </a>
        </h1>

        <p className={styles.description}>
          Receba diariamente as publicações do diário oficial em seu e-mail
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <form action="" method="post">
              <p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail principal"
                  autoFocus
                  required
                  className={styles.inputtext}
                />
              </p>
              <p>
                <button type="submit" className={styles.btnsend}>
                  Inscrever-se
                </button>
              </p>
            </form>
          </div>
          <div className={styles.disclaimer}>
            <small>
              <i>
                Esta página não possui nenhuma relação com a prefeitura de São
                José do Rio Preto-SP, sendo mantida por um desenvolvedor
                independente para facilitar o acesso às publicações do diário
                oficial.
              </i>
            </small>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>
            <a
              href="https://github.com/Andrielson"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; 2021 - Andrielson Silva
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
