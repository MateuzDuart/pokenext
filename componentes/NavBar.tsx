import Link from "next/link"
import Image from "next/image"
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/imagens/pokeball.png" width={30} height={30} alt="Pokenext" />
                    <h1>Pokenext</h1>
                </div>
                <ul className={styles.link_itens}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}