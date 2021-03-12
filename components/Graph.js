import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSocketIOClient } from "../hooks/useSocketIOClient";


const TweetStream = styled.div`
    font-family: 'Roboto', sans-serif;
`

export const Graph = () => {
    useSocketIOClient((data)=> {
        console.log('data asdfasdfasfasdf', data)
    })


    // const tweetsPerMin = data?.tweetsPerMin;
    // console.log('tweetsPerMin', tweetsPerMin)




    return (
        <TweetStream>
            {/* <p>{tweetsPerMin}</p> */}
        </TweetStream>
    )
}

