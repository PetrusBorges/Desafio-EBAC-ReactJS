import React from "react";

import HeaderFooter from "./components/Header";
import Section from "./components/Section";

import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <HeaderFooter content="Meus Livros" />
      </header>
      <section>
        <Section />
      </section>
      <footer>
        <HeaderFooter content="Feito por Petrus Borges | Github: PetrusBorges" />
      </footer>
    </>
  );
}
