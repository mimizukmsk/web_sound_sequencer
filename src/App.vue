<template>
  <div id="app">
    <h1 class="app__title">Web Sound Sequencer</h1>
    <p class="app__desc">ピアノロールに指定したとおりに音を鳴らします(Cスケール)</p>
    <div class="app__text">
      <p>クリックで選択 / 再度クリックで消去</p>
      <p>[Set]ボタンで音符を消去してSettingを反映します</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__text {
  margin: 0 auto 5px;
  font-size: 12px;
}
.app__text p {
  margin: 0;
}
</style>
