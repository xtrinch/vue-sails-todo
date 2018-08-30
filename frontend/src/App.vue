<template>
  <div id="app">
    <div class="nav-container">
      <b-nav tabs>
        <b-nav-item exact :to="{ name: 'HelloWorld' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'Todos' }">Todos</b-nav-item>
      </b-nav>
    </div>
    <router-view/>
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
  margin-top: 40px;
}

.nav-container {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
