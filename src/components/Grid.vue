<template>
  <div class="grid">
    <table class="note-list" >
      <tr v-bind:class="note" v-for="note in scale" :key="note.id">
        <td v-for="num in length" :key="num.id">
          <input type="radio" :name="num + '-note'" :id="num + '-' + note" @click="testPlay(note), check(num, note)">
          <label :for="num + '-' + note">{{num}} - {{ note }}</label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Tone from 'tone'
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
  props: {
    length: Number,
    scale: Array,
  },
  methods: {
    testPlay: function(item) {
      synth.triggerAttackRelease(item, '8n');
    },
    check: function(num, note) {
      let index = num - 1
      if (!this.$parent.playNotes) {
        this.$parent.playNotes = []
        for (let i = 0; i < this.length; i++) {
          this.$parent.playNotes.push(null);
        };
      }
      this.$parent.playNotes.splice(index, 1, note);
      console.log(this.$parent.playNotes)
    },
  }
}
</script>

<style scoped>
.note-list {
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px #aaa solid;
}

td {
  border: 1px #aaa dashed;
  padding: 10px;
  text-align: left;
}

.note-list input {
  display: none;
}
.note-list input:checked + label {
  background-color: #aff;
}
</style>
