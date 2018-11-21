<template>
  <div id="app">
    <div id='left'>
      <router-view/>
    </div>
    <div id='right'>
      <NGList />
    </div>
  </div>
</template>

<script>
import NGList from '@/components/NG_list'
export default {
    name: 'App',
    components: {
        NGList
    }
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

#left{
    width:60%;
    float:left;
}
#right{
    width:40%;
    float:right;
    overflow: scroll;
    height: 90vh;
}
</style>
