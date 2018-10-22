<template>
  <div>
    <Grid :length="length" :scale="scaleNotesShow"></Grid>
    <div class="player">
      <div class="player__button">
        <button @click="play()">Play</button>
        <button @click="stop()">Stop</button>
      </div>
      <div class="player__setting">
        <label for="scaleName">Scale: </label>
        <select name="scaleName" v-model="selectedScaleName" @change="setScaleNotes()">
          <option v-for="sn in scaleNames" :value="sn" :key="sn.id">{{ sn }}</option>
        </select>
        <label for="length">Length: </label>
        <select name="length" v-model="selectedLength" @change="setLength()">
          <option v-for="len in lengthList" :value="len" :key="len.id">{{ len }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Tone from 'tone'
import Grid from './Grid.vue'
const synth = new Tone.Synth(
  {
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustaion: 0.3,
      release: 1
    }
  }
).toMaster();

export default {
  name: 'Sequencer',
  components: {
    Grid
  },
  data: function () {
    return {
      lengthList: [4, 8, 12, 16, 20, 24, 28, 32],
      selectedLength: '',
      octaveList: [1, 2, 3, 4],
      selectedOctave: '',
      scaleNames: ['Major', 'Minor', 'Maj-Penta', 'Min-Penta'],
      selectedScaleName: '',
      scaleNotes: [],
      scaleNotesShow: [],
      playNotes: null,
    }
  },
  methods: {
    // Player
    play: function() {
      Tone.Transport.cancel();
      let melody = new Tone.Sequence(
        function (time, note) {
          synth.triggerAttackRelease(note, '8n');
        },
        this.playNotes,
        '8n'
      )
      .start();
      Tone.Transport.bpm.value = 150;
      Tone.Transport.toggle();
    },
    stop: function() {
      Tone.Transport.stop();
    },

    // scaleList
    setScaleNotes: function() {
      this.scaleNotes = [];
      this.scaleNotesShow = [];
      let notes;
      switch (this.selectedScale) {
        case 'Major':
          notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
          break;
        case 'Minor':
          notes = ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4'];
          break;
        case 'Maj-Penta':
          notes = ['C4', 'D4', 'E4', 'G4', 'A4'];
          break;
        case 'Min-Penta':
          notes = ['C4', 'Eb4', 'F4', 'G4', 'Bb4'];
          break;
        default:
          notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
          break;
      }
      for (let i = 0; i < this.octave; i++) {
        notes.forEach(element => {
          this.scaleNotes.push(element);
        });
      }
      this.scaleNotesShow = this.scaleNotes.reverse();
    },
    // length
    setLength: function() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
