import { useEffect, useState } from "react"
import PokemonLi from "./components/PokemonLi"
import PokemonList from "./components/PokemonList"
import PaginationBar from "./components/PaginationBar"
import axios from "axios"

function App() {
  //List of pokemon that the API will serve
  const [pokemons, setPokemons] = useState([])

  const [activeUrl, setActiveUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState("")
  const [prevUrl, setPrevUrl] = useState("")
  
  const [loading, setLoading] = useState(true)

//Pagination implementation
function gotoNextPage(){
  if (nextUrl) {
    setActiveUrl(nextUrl)
  }
}

function gotoPrevPage(){
  if (prevUrl) {
  setActiveUrl(prevUrl)
  }
}

//Use axios to render the page on mount
useEffect(()=> {
    let cancel
    axios.get(activeUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    setPokemons(res.data.results.map(p => p.name))
    setLoading(false)
  }, )

  return () => cancel()
  

}, [activeUrl])


if(loading) return (
  <div className="p-4 bg-linear-180 from-cyan-300 to-blue-800 min-h-screen w-full text-white">
    <span className="bg-black/30 border border-black/40 rounded px-2 py-0.5">
      Loading...
    </span>
  </div>
)

  return (
    <section className="flex flex-col gap-2 p-4 bg-linear-180 from-red-500 to-red-600 min-h-screen w-full text-white">
      <div>
        <span className="bg-black/30 border border-black/40 text-2xl my-12 rounded px-2 py-0.5">
          Pokédex
        </span>
      </div>
      <PokemonList pokemons={pokemons}/>
      <PaginationBar onPrev={gotoPrevPage} onNext={gotoNextPage}/>
    </section>
  )
}

export default App