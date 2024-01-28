import React from 'react'
import { Menu } from '../../components/layout/Menu/Menu';
import styles from './BookListPage.module.css';
import { BookList } from '../../components/layout/BookList/BookList';

export const BookListPage = () => {
  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <BookList />
      </div>
    </div>
  )
}
