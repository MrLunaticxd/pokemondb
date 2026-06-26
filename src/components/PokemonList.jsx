import { useState } from "react"
import PokemonLi from "./PokemonLi"
import axios from "axios"

function PokemonList({pokemons}) {

  return (
    <div className="pokemon-list flex flex-col gap-1 p-8 perspective-normal transition-all duration-400">
        {
            pokemons.map((pkmn, i) => (
                <PokemonLi key={i} name={pkmn}/>
            ))
        }
    </div>
  )
}

export default PokemonList