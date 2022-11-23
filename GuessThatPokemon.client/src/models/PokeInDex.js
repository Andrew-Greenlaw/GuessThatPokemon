export class PokiInDex {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.sprites.other["official-artwork"].front_default

  }
}