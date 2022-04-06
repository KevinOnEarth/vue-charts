<template>
  <div id="app">
    <BarChartComponent />
    <hr />
    <GanttChartComponent />
  </div>
</template>

<script lang="ts">
import BarChartComponent from "./components/BarChartComponent.vue";
import GanttChartComponent from "./components/GanttChartComponent.vue";
export default {
  components: {
    BarChartComponent,
    GanttChartComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
