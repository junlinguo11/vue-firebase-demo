<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
