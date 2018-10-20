<template>
  <div>
    <div class="grid">
      <table class="note-list" >
        <tr v-bind:class="note" v-for="note in scale" :key="note.id">
          <td v-for="num in 8" :key="num.id">
            <input type="radio" :name="num + '-note'" :id="num + '-' + note" @click="testPlay(note), check(num, note)">
            <label :for="num + '-' + note">{{num}} - {{ note }}</label>
          </td>
        </tr>
      </table>
    </div>
    <div class="player">
      <button @click="play()">Play</button>
      <button @click="stop()">Stop</button>
    </div>
  </div>
</template>

<script>
import Tone from 'tone';
const scaleList = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
const synth = new Tone.Synth().toMaster();

export default {
  name: 'Grid',
  data () {
    return {
      scale: scaleList.reverse(),
      chk_note: []
    }
  },
  methods: {
    // Grid
    testPlay: function(item) {
      synth.triggerAttackRelease(item, '8n');
    },
    check: function(num, note) {
      let index = num - 1
      if (!this.chk_note[index]) {
        this.chk_note.push(note);
      }
      this.chk_note.splice(index, 1, note);
      console.log(this.chk_note)
    },
    // Player
    play: function() {
      Tone.Transport.stop();
      let melody = new Tone.Sequence(
        function (time, note) {
          synth.triggerAttackRelease(note, '8n', time);
        },
        this.chk_note,
      )
      .start();
      Tone.Transport.bpm.value = 150;
      Tone.Transport.start();
    },
    stop: function() {
      Tone.Transport.stop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.note-list {
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px #aaa solid;
}

td {
  border: 1px #aaa dashed;
  padding: 10px;
}

.note-list input {
  display: none;
}
.note-list input:checked + label {
  background-color: #aff;
}
</style>
