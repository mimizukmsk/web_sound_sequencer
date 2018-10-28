<template>
  <div class="player">
    <h1>Player</h1>
    <button @click="play">Play</button>
    <button @click="stop">Stop</button>
  </div>
</template>

<script>
import seqConf from './config.js'

export default {
  name: 'Player',
  methods: {
    // 親クラスメソッド呼び出し
    play () {
      this.$emit('play');
    },
    stop () {
      this.$emit('stop');
    }
  }
}
</script>