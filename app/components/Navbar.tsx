"use client"
import styles from "./navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <Link href={'/'}>Home</Link>
        <Link href={'/about-client'}>Client</Link>
        <Link href={'/about-server'}>Server</Link>
        <Link href={'/login'}>Login</Link>
    </nav>
  )
}

export default Navbar