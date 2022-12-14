import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  // async getAllPokemon() {
  //   const res = await pokeApi.get("pokemon/poke")
  //   console.log(res.data)
  // }
  async getRandomPokemon() {
    const id = Math.floor(Math.random() * 1000)
    const res = await pokeApi.get(`pokemon/${id}`)
    console.log('activePokemon', res.data)
    AppState.activePokemon = new Pokemon(res.data)
    console.log('pokemon', AppState.activePokemon)
  }
  async toggleRevealed() {
    AppState.revealed = 1
  }
}
export const pokemonService = new PokemonService()