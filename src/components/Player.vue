<template>
  <div class="player">
    <button @click="play">Play</button>
    <button @click="stop">Stop</button>
  </div>
</template>

<script>
import seqConf from './config.js'

export default {
  name: 'Player',
  // 子から親のメソッドを呼ぶ
  methods: {
    play () {
      this.$emit('play')
    },
    stop () {
      this.$emit('stop')
    }
  },
  beforeUpdate () {
    
  }
}
</script>