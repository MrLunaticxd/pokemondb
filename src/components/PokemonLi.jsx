import { useState } from "react"
import pokeball from "../assets/2.svg"

function PokemonLi({name}) {

    return (
        <div className="flex items-center gap-3 bg-red-600 border-4 border-black p-2 pr-4 rounded-full font-mono text-sm uppercase tracking-wide text-white">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white border-2 border-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                <img className="w-5 h-5" src={pokeball} alt="" />
            </div>
            <span className="bg-black/30 border border-black/40 rounded px-2 py-0.5">
                {name}
            </span>
        </div>
    )
}

export default PokemonLi