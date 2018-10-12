// 使用準備
var synth = new Tone.PolySynth().toMaster();
var state = true; // 入力状態

// マウス、キーボードを押した際のイベント処理
window.addEventListener('keydown', playSound);
window.addEventListener('mousedown', playSound);

// 離した際のイベント処理
window.addEventListener('keyup', offSound);
window.addEventListener('mouseup', offSound);

function playSound(e) {
  if (!state) return;

  var key = e.keyCode || e.target.dataset.key;
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