import styles from '@component/styles/Home.module.css'
import Image from 'next/image';
import Card from '../componentes/Card';

interface Pokemon{
  name: string;
  url: string;
  id: number
}

export async function getStaticProps() {

  const maxPokemons = 250
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const resp = await fetch(`${api}/?limit=${maxPokemons}`)
  const dados = await resp.json()

  dados.results.forEach((item:Pokemon, index:number) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: dados.results,
    }
  }

}

export default function Home({ pokemons }:{pokemons: Array<Pokemon>}) {

  return (
    <>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/imagens/pokeball.png" width={50} height={50} alt='Pokenext'/>
      </div>
      <div className={styles.pokemonConatiner}>
      
        {pokemons.map((pokemon: Pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </>
  )
}
