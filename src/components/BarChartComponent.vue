<template>
    <div>
    <Plotly :data="data" :layout="getLayout" :display-mode-bar="displayModeBar"></Plotly>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Plotly} from 'vue-plotly'
import { ChartLayout, Trace } from '../models/ChartProperties'
import barChartLayout from '../data/barChartLayout.json'
import barChartData from '../data/barChartData.json'

const BarChartComponent = Vue.extend({
    name: 'BarChartComponent',
    components: {
        Plotly
    },
    data:()=> ({
        data: barChartData as Trace[],
        displayModeBar: false
    }),
    computed: {
        getLayout(): ChartLayout {
            let layout: ChartLayout = JSON.parse(JSON.stringify(barChartLayout))
            return layout
        }
    }
})
export default BarChartComponent
</script>
