<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  appearance: none;
  list-style: none;
  box-sizing: border-box
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}

</style>
