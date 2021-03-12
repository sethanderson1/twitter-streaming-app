import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import _ from 'lodash';
import { useSocketIOClient } from "../hooks/useSocketIOClient";
import { select } from 'd3';

const TweetStream = styled.div`
    font-family: 'Roboto', sans-serif;
`

export const Graph = () => {
    // const data = [10, 22, 4, 33]
    // const data = { tweetsPerMin: 200 }
    const [data, setData] = useState({})
    console.log('data', data)
    const svgRef = useRef();

    // const { tweetsPerMin } = data;

    useSocketIOClient((d) => {
        setData(d);
    })

    let tweetsPerMin = [];
    if (!_.isEmpty(data)) {
        // console.log('data', data)
        tweetsPerMin = [data.tweetsPerMin]
    }

    // const tweetsPerMin = data?.tweetsPerMin;
    console.log('tweetsPerMin', tweetsPerMin)

    useEffect(() => {
        const svg = select(svgRef.current);
        svg
            .selectAll("circle")
            .data(tweetsPerMin)
            .join(
                enter => enter.append("circle"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            )
            .attr("r", value => {
                console.log('value', value)
                return value
            })

        console.log('svg', svg)
    }, [data])



    return (
        <TweetStream>
            <svg ref={svgRef}></svg>
            <p style={{ 'fontSize': '48px' }}>tweets per minute: {tweetsPerMin}</p>
        </TweetStream>
    )
}

