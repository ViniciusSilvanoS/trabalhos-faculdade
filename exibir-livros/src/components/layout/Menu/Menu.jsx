import React from 'react'
import styles from './Menu.module.css';
import brand from '../../../assets/brand.svg'

export const Menu = () => {
  return (
    <div className={styles.menu}>
        <div>
            <img src={brand} alt="Marca" />
        </div>
    </div>
  )
}
