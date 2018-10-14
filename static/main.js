const Tone = require('tone');
const $ = require('jquery');
const midic = require('midiconvert');

// 使用準備
const synth = new Tone.Synth().toMaster();
let state = true; // 入力状態

// マウス、キーボードを押した際のイベント処理
window.addEventListener('keydown', playSound);
window.addEventListener('mousedown', playSound);

// 離した際のイベント処理
window.addEventListener('keyup', offSound);
window.addEventListener('mouseup', offSound);

function playSound(e) {
  if (!state) return;

  let key = e.keyCode || e.target.dataset.key;
  div = document.querySelector('div[data-key="'+ key +'"]');
  if (div) {
    synth.triggerAttackRelease(div.textContent, '8n');
    state = false;
    div.classList.add("activekey");
  }
}
function offSound(e) {
  state = true;
  div.classList.remove("activekey");
}