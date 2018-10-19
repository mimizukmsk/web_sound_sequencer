<template>
  <div class="grid">
    <table class="note-list" >
      <tr v-bind:class="tone.note" v-for="tone in scale" :key="tone.id">
        <td v-for="num in 8" :key="num.id">
          <input type="checkbox" :name="num + '-' + tone" :id="num + '-' + tone" @click="play(tone)">
          <label :for="num + '-' + tone">{{num}} - {{ tone }}</label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Tone from 'tone';
const scaleList = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];

export default {
  name: 'Grid',
  data () {
    return {
      length: 0,
      scale: scaleList.reverse(),
      chk_tone: []
    }
  },
  methods: {
    play: function(item) {
      let synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(item, '8n');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note-list {
  border-collapse: collapse;
  border: 1px #aaa solid;
}

td {
  border: 1px #aaa dashed;
  padding: 10px;
}

</style>
