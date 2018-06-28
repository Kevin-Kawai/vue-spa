import Vue from 'vue'

Vue.component('app', {
  template: `
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <a href="/">
          <img src="http://bit.ly/vue-img" alt="Vue SPA">
        </a>
      </div>
    </nav>
    <section class="main-section section"></section>
    <footer class="footer">
      <div class="container">
        Follow us on
        <a href="https://twitter.com/bstavroulakis" target="_blank">Twitter</a>
      </div>
    </footer>
  </div>
  `
})

const app = new Vue({
  render: h => h('app')
})

export { app }
