import React, { useState, useEffect } from "react";
import styles from "./BookList.module.css";
import { CardBook } from "../../CardBook/CardBook";

export const BookList = () => {
  const [livros, setLivros] = useState([]);

  function resolveDepois5s() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("sucesso!");
      }, 5000);
    });
  }

  const url =
    "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json";

  async function carregaLivro() {
    await resolveDepois5s();
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return Object.values(dados);
  }

  useEffect(() => {
    const carregaLivros = async () => {
      try {
        const livrosCarregados = await carregaLivro();
        setLivros(livrosCarregados);
      } catch (err) {
        console.error(err);
        alert("Ocorreu um erro ao carregar os livros!");
      }
    };

    carregaLivros();
  }, []);

  return (
    <div className={styles.bookList}>
      {livros.map((livro, index) => (
        <CardBook 
          key={index} 
          cover={livro.cover}
          title={livro.title}
          price={livro.price}
          author={livro.author}
          language={livro.language}
          genre={livro.genre}
          pages={livro.pages}
          publication_year={livro.publication_year}
          publisher={livro.publisher}
          format={livro.format}
          rating={livro.rating}
        />
      ))}
    </div>
  );
};
