<template>
  <div class="grid">
    <div class="contents">
      <div class="svg-wrapper">
        <svg :viewbox="viewBox"
             :width="viewWidth"
             :height="viewHeight">
          <g v-for="(note, scaleIndex) in scale"
             :class="note"
             :key="note.id">
            <rect v-for="num in length"
                  :key="num.id"
                  class="note"
                  :class="paintNote(num, note)"
                  @click="testPlay(note), check(num, note)"
                  :width="getNoteWidth(length)"
                  :height="getNoteHeight(scale.length)"
                  :x="getNoteX(length, num)"
                  :y="getNoteY(scale.length, scaleIndex)">
            </rect>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// 課題 : SVG表示領域(viewBox)を可変にしたい
import seqConf from './config.js'

export default {
  name: 'Grid',
  props: {
    length: Number,
    scale: Array,
    playNotes: Array
  },
  data () {
    return {
      viewBox: '0 0 640 400',
      viewWidth: 640,
      viewHeight: 400,
      noteMargin: 1
    }
  },
  // 子から親のメソッドへ値を渡す
  methods: {
    // 親クラスメソッド呼び出し
    testPlay (note) {
      this.$emit('testPlay', note);
    },
    check (index, note) {
      this.$emit('check', index, note);
    },

    // Grid内処理
    // <svg>内 note 描画処理
    getNoteWidth (length) {
      return (this.viewWidth / length) - this.noteMargin;
    },
    getNoteHeight (scaleLength) {
      return (this.viewHeight / scaleLength) - this.noteMargin;
    },
    getNoteX (length, num) {
      let index = num - 1;
      return this.noteMargin + ((this.viewWidth - this.noteMargin) / length) * index;
    },
    getNoteY (scaleLength, scaleIndex) {
      return this.noteMargin + ((this.viewHeight - this.noteMargin) / scaleLength) * scaleIndex;
    },
    // それぞれのnoteのactiveクラス付け外し
    paintNote (num, note) {
      let index = num - 1;
      if (this.playNotes[index] === note) {
        console.log()
        return {
          active: true
        };
      } else if (this.playNotes[index] === null) {
        return {
          active: false
        };
      };
    }
  }
}
</script>

<style scoped>
.contents {
  max-width: 640px;
  height: 400px;
  margin: auto;
}
.svg-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.svg-wrapper svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #999;
}

.note {
  fill: #fff;
}
.note.active {
  fill: #000;
}
</style>