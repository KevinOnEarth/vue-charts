<template>
  <div>
    <Plotly
      :data="data"
      :layout="getLayout"
      :display-mode-bar="displayModeBar"
    ></Plotly>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Plotly } from "vue-plotly";
import { ChartLayout, Trace } from "../models/ChartProperties";
import ganttChartayout from "../data/ganttChartLayout.json";
import ganttChartData from "../data/ganttChartData.json";

const GanttChartComponent = Vue.extend({
  name: "GanttChartComponent",
  components: {
    Plotly,
  },
  data: () => ({
    data: ganttChartData as Trace[],
    displayModeBar: false,
  }),
  computed: {
    getLayout(): ChartLayout {
      let layout: ChartLayout = JSON.parse(JSON.stringify(ganttChartayout));
      return layout;
    },
  },
});
export default GanttChartComponent;
</script>
