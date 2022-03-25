<template>
    <div>
    <Plotly :data="data" :layout="getLayout" :display-mode-bar="displayModeBar"></Plotly>
    </div>
</template>
<script lang="ts">
import {Plotly} from 'vue-plotly'
import { Layout, TickLocation } from '../models/ChartProperties'
export default ({
    name: 'BarChartComponent',
    components: {
        Plotly
    },
    data: ()=> ({
        data:[{
            x: [1,2,3,4],
            y: [10,15,20,25],
            type: "bar"
        },
        {
            x: [1,2,3,4],
            y: [18,28,18,28],
            type: "line"
        }],
        layout: {
            title: 'Sample Bar Chart'
        },
        displayModeBar: false
    }),
    computed: {
        getLayout(): Layout {
            let layout: Layout = {
              title: 'Typescript Bar Chart Example',
              height: 450,
              showlegend: false,
              autosize: true,
              xaxis: {
                title: { standoff: 2, text:'Something X Axis'},
                ticks: TickLocation.outside
              },
              yaxis: {
                title: {standoff: 4, text: 'Something Y Axis'},
                ticks: TickLocation.outside
              },
              margin: {
                l: 40,
                r: 25,
                t: 25,
                b: 40
              }
            };
            return layout
        }
    }
})
</script>
