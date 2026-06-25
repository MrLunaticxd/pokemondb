import { useState } from "react"
import PokemonLi from "./PokemonLi"
import axios from "axios"

function PokemonList({pokemons}) {

  return (
    <div className="flex flex-col gap-1">
        {
            pokemons.map((pkmn, i) => (
                <PokemonLi key={i} name={pkmn}/>
            ))
        }
    </div>
  )
}

export default PokemonList