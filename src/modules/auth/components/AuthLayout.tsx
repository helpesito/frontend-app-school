import escudo from '../../../assets/img/escudo.png'
import studentsBg from '../../../assets/img/studentsBg.png'
import styles from './authLayout.module.css'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AuthLayout = ({ children } : Props) => {
  return (
    <div className={styles.containerAuthLayout}>
      <div className={styles.containerForm}>
      <img src={escudo} alt="Logo del Colegio" className={styles.schoolShield}/>
        {children}
        <p className={styles.nav}>Powered By Helpe-School ®️</p>
      </div>
      <img src={studentsBg} alt="students-class-background" className={styles.studentsBg}/>
    </div>
  )
}
