<template>

</template>

<script>
import { onMounted } from 'vue';
import { pokemonService } from '../services/PokemonService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getRandomPokemon() {
      try {
        await pokemonService.getRandomPokemon()
      } catch (error) {
        Pop.error('[GetRandomPokemon]', error)
      }
    }
    onMounted(() => {
      getRandomPokemon()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
