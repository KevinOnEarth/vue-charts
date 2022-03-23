export interface Layout {
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
        standoff?: number,
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
export enum TickLocation {
    outside = 'outside',
    inside = 'inside',
    none = ''
}
export enum Side {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right'
}
