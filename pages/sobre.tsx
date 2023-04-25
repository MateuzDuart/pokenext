import Image from "next/image"

import styles from "../styles/Sobre.module.css"

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo placeat voluptatibus animi, ut ex vitae! Et, praesentium facilis repellendus magni aspernatur incidunt reprehenderit nobis natus vitae provident itaque ea possimus?</p>
            <Image src="/imagens/charizard.png" height={300} width={300} alt="charizard"/>
        </div>
    )
}