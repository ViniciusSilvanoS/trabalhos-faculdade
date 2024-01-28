import React from 'react'
import styles from './CardBook.module.css';

export const CardBook = ({ cover, title, price, author, language, genre, pages, publication_year, publisher, format, rating }) => {
  return (
    <div className={styles.cardBook}>
        <div className={styles.containerHeader}>
          <img src={cover} alt="Capa do livro" className={styles.img} />
          <div className={styles.titlePrice}>
            <h3 className={styles.titlePrice__title}>{title}</h3>
            <h3>$ {price}</h3>
          </div>
        </div>
        <div className={styles.description}>
          <span className={styles.descriptionItem}><h4><strong>Autor:</strong></h4><p>{author}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Idioma:</strong></h4><p>{language}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Gênero:</strong></h4><p>{genre}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Páginas:</strong></h4><p>{pages}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Ano publicação:</strong></h4><p>{publication_year}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Editora:</strong></h4><p>{publisher}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Formato:</strong></h4><p>{format}</p></span>
          <span className={styles.descriptionItem}><h4><strong>Avaliação:</strong></h4><p>{rating}</p></span>
        </div>
    </div>
  )
}
