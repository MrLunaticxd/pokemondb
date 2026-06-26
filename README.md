# PokemonDB
This is a simplitic web-app that fetches data from an API(https://pokeapi.co/api/v2/pokemon) and outputs the data as a stylish list of pokemon names with pagination. I ended up adding a new feature to it, directing to pokemondb.net when clicking on a pokemon for more information.

## Tools
The project was built with the following Tools:
- npm
- Vite + React(javascript)
- tailwindcss
- CSS

## How it works
The project is quite straight-forward in its implementation. here are the general steps of building it:
- Initialized through Vite with the react template with the language of choice being Javascript
- It is comprised of 3 main components and PokemonList.jsx, Pagination.jsx, and PokemonLi.jsx
- In the main app.jsx file the library axios(installed as a dependency) is used to handle api requests and errors
- The API exposes a json with refferences to the previous and next page, along with a list of 20 pokemons (which is customizable but I chose the default for this). The list is provided to the PokemonList component that generates a list of PokemonLi components— using the array.map() method.
- There is a also a loading screen implementation that uses a useState hook(of type boolean) that loads a page allowing the app the time to parse and load the data
- Next comes the pagination implementaiton. The pages are managed with 3 useState hooks one that tracks the current page, and another two that track the previous and next pages— by using the aforementioned data from the API). Then two functions are made to navigate the previous and next page with a check for truthy and falsy values to ensure undefined previous or next does not cause complications. These functions are then supplied to the paginationBar component that sits at the bottom of page to enable a user interface to navigate between the pages by the push of a button.
- It now also redirects to pokemondb.net when clicking on one of the elements in the list.
- Finally the app was themed very tastefully with tailwindcss (It would be worlds better with more time) to ensure The UI feels much like a pokedex.

## The challenges I had to overcome
As any and every project goes there are challenges I had to overcome to realize this.
- Most difficult issue to work around was the time constraits, as I needed it ready by a certain date. This essentially forced me to cut corners and advanced features I wanted to implement into it, i.e— color-coded list elements by type.

- learing the use of new library— axios. This is not something I had used before but it did simplify the error handling a lot. However, it was a real challenge to understand and utilize in the project.

- Pushing the project to github. I am no stranger to github. However, it had been so long since I had uploaded something on the platform, I ended up having to relearn a few things to make it possible.
