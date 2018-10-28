<template>
  <div class="grid">
    <table class="note-list" >
      <tr v-for="note in scale"
          :class="note"
          :key="note.id">
        <td v-for="num in length"
            :key="num.id">
          <input type="radio"
                 :name="num + '-note'"
                 :id="num + '-' + note"
                 @click="testPlay(note), check(num, note)">
          <label :for="num + '-' + note">
            {{num}} - {{ note }}
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import seqConf from './config.js'

export default {
  name: 'Grid',
  props: {
    length: Number,
    scale: Array,
    playNotes: Array
  },
  // 子から親のメソッドへ値を渡す
  methods: {
    testPlay (note) {
      this.$emit('testPlay', note)
    },
    check (num, note) {
      this.$emit('check', num, note)
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

.contents {
  max-width: 640px;
  margin: auto;
}
.svg-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
}
.svg-wrapper svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>