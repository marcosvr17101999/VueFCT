<template>
  <div id="app" class="row">
    <cabecera class="col-12"></cabecera>
    <div id="nav" class="col-12">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/FInicioP">Fase Inicio Practicas</router-link> |
      <router-link to="/FEjecucionP">Fase Ejecucion Practicas</router-link> |
      <router-link to="/FFinalP">Fase Final Practicas</router-link> |
    </div>
    <router-view/>
      <PiePagina class="col-12"></PiePagina>
  </div>
</template>
<script>
import Cabecera from './components/Cabecera.vue';
import PiePagina from './components/PiePagina.vue'

export default {
  name: 'App',
  components: {
    Cabecera,PiePagina
  }
}
</script>
<style>
a{
  color: #AB42B3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-colr: #B3FF78;
  justify-content: center;
}

#nav {
  padding: 30px;
  height: 100px;
}

#nav a {
  font-weight: bold;
  color: #F891FF;
}

#nav a.router-link-exact-active {
  color: #AB42B3;
}
</style>
