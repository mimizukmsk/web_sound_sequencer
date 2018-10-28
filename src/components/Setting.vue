<template>
  <div class="setting">
    <h1>Setting</h1>
    <p>
      <label for="scaleName">Scale: </label>
      <select name="scaleName" v-model="selectedScaleName">
        <option v-for="item in Object.keys(config.scales)" :value="item" :key="item.id">{{ item }}</option>
      </select>
      <label for="length">Length: </label>
      <select name="length" v-model="selectedLength">
        <option v-for="item in config.lengthList" :value="item" :key="item.id">{{ item }}</option>
      </select>
      <label for="base">Base: </label>
      <select name="base" v-model="selectedBase">
        <option v-for="item in config.baseList" :value="item" :key="item.id">{{ item }}</option>
      </select>
      <label for="octave">Octave: </label>
      <select name="octave" v-model="selectedOctave">
        <option v-for="item in config.octaveList" :value="item" :key="item.id">{{ item }}</option>
      </select>
      <label for="tempo">Tempo: </label>
      <select name="tempo" v-model="selectedTempo">
        <option v-for="item in config.tempoList" :value="item" :key="item.id">{{ item }}</option>
      </select>
    </p>
    <button @click="setting">Set</button>
  </div>
</template>

<script>
import config from './config.js'

export default {
  name: 'Setting',
  mixins: [ config ],
  // 初期値
  data () {
    return {
      selectedScaleName: 'Major(Ionian)',
      selectedLength: 8,
      selectedBase: 4,
      selectedOctave: 1,
      selectedTempo: 120,
    }
  },
  methods: {
    // Setting内にて指定された値で親メソッド呼び出し
    setting () {
      this.$emit(
        'setting',
        this.selectedScaleName,
        this.selectedLength,
        this.selectedBase,
        this.selectedOctave,
        this.selectedTempo
      )
    }
  },
  // vm.$elとしてインスタンスがマウント(表示された際)に実行する処理
  mounted () {
    // $nextTick => DOMが更新されたあとに実行
    this.$nextTick (function () {
      this.setting();
    });
  },
}
</script>
