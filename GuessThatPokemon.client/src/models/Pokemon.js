export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.sprites.other['official-artwork'].front_default;
    this.height = data.height
    this.weight = data.weight
    this.abilities = data.abilities
    this.moves = data.moves
    this.stats = data.stats
    this.types = data.types
  }
}