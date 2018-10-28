const config = {
  lengthList: [4, 8, 12, 16, 20, 24, 28, 32],
  baseList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  octaveList: [1, 2, 3, 4, 5, 6, 8],
  tempoList: [80, 90, 100, 110, 120, 130, 140, 150, 160],
  scales: {
    'All': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    'Major(Ionian)': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'Minor(Aeolian)': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    'Lydian': ['C', 'D', 'E', 'F#', 'G', 'A', 'B'],
    'Mixolydian': ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
    'Dorian': ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    'Phrigian': ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    'Locrian': ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
    'Maj-Penta': ['C', 'D', 'E', 'G', 'A'],
    'Min-Penta': ['C', 'Eb', 'F', 'G', 'Bb'],
  }
};

export default {
  data () {
    return {
      config: config,
    }
  }
}