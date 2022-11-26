<template>
  <div class="container-fluid home">
    <div class="row h-100">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img height="500" width="500" class="poke-pic" :class="revealed == 1 ? '' : 'unrevealed'"
          :src="activePokemon.img" alt="pokemon img">
        <p class="name" v-if="revealed == 1"> {{ activePokemon?.name }}
        </p>
      </div>

      <div class="col-md-6">
        <button class="btn" type="button" @click="toggleRevealed()">Reveal</button>
        <button class="btn" type="button" @click="getRandomPokemon()">Next Pokemon</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
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
    return {
      activePokemon: computed(() => AppState.activePokemon),
      revealed: computed(() => AppState.revealed),
      toggleRevealed() {
        AppState.revealed = 1
      },
      async getRandomPokemon() {
        try {
          AppState.activePokemon = {}
          AppState.revealed = 0
          await pokemonService.getRandomPokemon()
        } catch (error) {
          Pop.error('[GetRandomPokemon]', error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  background-image: url('https://external-preview.redd.it/e5zoQw-hgw-LCjdhC_4G8IAcHxex5pzda_BD_FPTcBY.png?auto=webp&s=c0b96b5ec20010a15864b8a0c9b202c119e52fe8');
  background-size: cover;
  background-position: center;
  min-height: 100%;
}

.poke-pic {
  transition: all 0.3s ease;
}

.name {
  font-size: 60px;
  font-weight: 700;
}

.unrevealed {
  filter: grayscale(100%);
  filter: brightness(0%);
}
</style>
