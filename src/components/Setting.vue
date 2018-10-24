<template>
  <div class="setting">
    <label for="scaleName">Scale: </label>
    <select name="scaleName" v-model="selectedScaleName">
      <option v-for="item in seqConf.scaleNames" :value="item" :key="item.id">{{ item }}</option>
    </select>
    <label for="length">Length: </label>
    <select name="length" v-model="selectedLength">
      <option v-for="item in seqConf.lengthList" :value="item" :key="item.id">{{ item }}</option>
    </select>
    <label for="base">Base: </label>
    <select name="base" v-model="selectedBase">
      <option v-for="item in seqConf.baseList" :value="item" :key="item.id">{{ item }}</option>
    </select>
    <label for="octave">Octave: </label>
    <select name="octave" v-model="selectedOctave">
      <option v-for="item in seqConf.octaveList" :value="item" :key="item.id">{{ item }}</option>
    </select>
    <button @click="setting">Set</button>
  </div>
</template>

<script>
import seqConf from './config.js'

export default {
  name: 'Setting',
  mixins: [seqConf],
  // 初期値
  data () {
    return {
      selectedScaleName: 'Major',
      selectedLength: 8,
      selectedBase: 4,
      selectedOctave: 1,
    }
  },
  methods: {
    // Setting内にて指定された値をまとめて親に渡す
    setting () {
      this.$emit(
        'setting',
        this.selectedScaleName,
        this.selectedLength,
        this.selectedBase,
        this.selectedOctave,
      )
    }
  },
  // vm.$elとしてインスタンスがマウント(表示された際)に実行する処理
  mounted () {
    // $nextTick => DOMが更新されたあとに実行
    this.$nextTick(function () {
      this.setting()
    })
  },
}
</script>
