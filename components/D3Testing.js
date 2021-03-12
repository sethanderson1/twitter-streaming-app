import React, { useEffect, useRef } from 'react';
import { select } from 'd3';

// const data = [10, 22, 4, 33]

export const D3Testing = (data) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);
        svg
            .selectAll("circle")
            .data(data)
            .join(
                enter => enter.append("circle"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            )
            .attr("r", value => value)

    }, [])

    return (
        <>
            <svg ref={svgRef}></svg>
            <div>
                Test
            </div>
        </>
    )
}
