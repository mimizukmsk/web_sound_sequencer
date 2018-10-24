<template>
  <div class="sequencer">
    <Grid :scale="scaleNotesShow"
          :length="selectedLength"
          :playNotes="playNotes"
          @testPlay="testPlay"
          @check="check"></Grid>
    <Player @play="play"
            @stop="stop"></Player>
    <Setting @setting="setting"></Setting>
  </div>
</template>

<script>
import Tone from 'tone'
import Grid from './Grid'
import Player from './Player'
import Setting from './Setting'
const synth = new Tone.Synth().toMaster()

export default {
  name: 'Sequencer',
  components: {
    Grid,
    Player,
    Setting
  },
  data () {
    return {
      // Settingから受け取る値
      selectedScaleName: '',
      selectedLength: 0,
      selectedBase: 0,
      selectedOctave: 0,

      // 処理用/表示用ノーツ、再生するメロディ
      scaleNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'],
      scaleNotesShow: ['B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4'],
      playNotes: [],
    }
  },
  methods: {
    // Grid
    // 試し聴き
    testPlay (item) {
      synth.triggerAttackRelease(item, '8n');
    },
    // 指定された音をplayNotesに入れる
    check (num, note) {
      let index = num - 1;
      if (this.playNotes.length === 0) {
        for (let i = 0; i < this.selectedLength; i++) {
          this.playNotes.push(null)
        }
      }
      if (this.playNotes[index] === note) {
        this.playNotes.splice(index, 1, null)
      }
      this.playNotes.splice(index, 1, note)
      console.log(this.playNotes)
    },

    // Player
    play () {
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
      Tone.Transport.start();
    },
    stop () {
      Tone.Transport.stop();
    },

    // Setting
    setting (scale, length, base, octave) {
      this.selectedScaleName = scale;
      this.selectedLength = length;
      this.selectedBase = base;
      this.selectedOctave = octave;

      this.playNotes = [];
      this.scaleNotes = [];
      let notes;
      switch (this.selectedScaleName) {
        case 'Major':
          notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
          break;
        case 'Minor':
          notes = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
          break;
        case 'Maj-Penta':
          notes = ['C', 'D', 'E', 'G', 'A'];
          break;
        case 'Min-Penta':
          notes = ['C', 'Eb', 'F', 'G', 'Bb'];
          break;
        default: // Major
          notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
          break;
      }
      // 指定された基底音程から指定されたオクターブ分だけ表示
      for (let i = this.selectedBase; i < this.selectedBase + this.selectedOctave; i++) {
        if (i > 9) {
          break;
        }
        notes.forEach(item => {
          this.scaleNotes.push(item + i);
        });
      }
      // 表示用に整形
      this.scaleNotesShow = this.scaleNotes.reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
