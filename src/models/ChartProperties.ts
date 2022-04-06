export interface ChartLayout {
    title: string,
    height: number,
    autosize: boolean,
    showlegend?: boolean
    margin: {
        l: number, r: number, t:number, b:number
    },
    xaxis: Axis,
    yaxis: Axis
}

interface Axis {
    title?: {
        automargin?: boolean,  // a value of true and standoff of 4 is a good starting point
        standoff?: number,     // automargin will adjust as the graph grows.
        text: string
    }
    ticks?: TickLocation,
    tickangle?: number,
    color?: string,
    linecolor?: string,
    linewidth?: number,
    showticklabels?: boolean,
    automargin?: boolean,
    showgrid?: boolean,
    side?: Side
}
enum TickLocation {
    outside = 'outside',
    inside = 'inside',
    none = ''
}
enum Side {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right'
}

export interface Trace {
    x: string[] | number[] | Date[]
    y: string[] | number[]
    type: string
}