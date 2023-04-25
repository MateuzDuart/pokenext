import styles from "@component/styles/Pokemon.module.css"
import { spawn } from "child_process";
import Image from "next/image";


interface Pokemon{
    name: string;
    url: string;
    id: number
    types: Array<any>;
    height: number;
    weight: number;
}

export const getStaticPaths = async() => {

    const maxPokemons = 250
    const api = "https://pokeapi.co/api/v2/pokemon/"
  
    const resp = await fetch(`${api}/?limit=${maxPokemons}`)
    const dados = await resp.json()

    const paths = dados.results.map((item:Pokemon, index:number) => {
        return {
            params: {pokemonId: (index + 1).toString()}
        }
      })
      return {
        paths,
        fallback: false,
      }
}
export const getStaticProps = async(context:any) => {

    const id = context.params.pokemonId

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const dados = await resp.json()

    return {
        props: {
            pokemon: dados, 
        }
    }
}

export default function Pokemon({ pokemon }:{pokemon: Pokemon}) {
    return (
        <div className={styles.pokemonContainer}>
            <h1 className={styles.titulo}>{pokemon.name}</h1>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={200} height={200} alt={pokemon.name}/>
            <div>
                <h3>Numero: </h3>
                <p>#{pokemon.id}</p>
            </div>
            <div className={styles.tipoContainer}>
                <h3>Tipo: </h3>
                <div className={styles.tipoPai}>
                    {pokemon.types.map((item, index) => 
                    <span 
                    className={`${styles.tipo} ${styles['type_' + item.type.name]}`} 
                    key={index}>   
                        {item.type.name}
                    </span>)}
                </div>
            </div>
            <div className={styles.dadosContainer}>
                <div className={styles.dadosAltura}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.dadosPeso}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} Kg</p>
                </div>
            </div>
        </div>
    )
}