<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
#app {
    height: 100%;
    > div {
        height: 100%;
    }
}
</style>
