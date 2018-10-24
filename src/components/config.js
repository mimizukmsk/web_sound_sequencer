const _seqConf = {
  lengthList: [4, 8, 12, 16, 20, 24, 28, 32],
  baseList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  octaveList: [1, 2, 3, 4, 5, 6, 8],
  scaleNames: ['Major', 'Minor', 'Maj-Penta', 'Min-Penta'],
};

export default {
  data () {
    return {
      seqConf: _seqConf,
    }
  }
}