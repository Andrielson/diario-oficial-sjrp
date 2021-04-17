import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState<string>();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => setSubmitDisabled(!!!email || email.length < 10), [email]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Diário Oficial SJRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/bandeira-rio-preto.png" width="128"/>
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail principal"
                  autoFocus
                  required
                  className={styles.inputtext}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <button
                  type="submit"
                  disabled={submitDisabled}
                  className={styles.btnsend}
                >
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
                independente visando facilitar o acesso às publicações do diário
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
