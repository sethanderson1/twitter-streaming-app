import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Card } from './Card'
import styled from 'styled-components';

const ENDPOINT = "http://localhost:8000";

const TweetStream = styled.div`
    font-family: 'Roboto', sans-serif;

`
// TODO: buffer do onload in image tag and change loading state to false
// then unhide image
export const CardList = () => {
    const [tweets, setTweets] = useState([]);
    console.log('tweets', tweets)

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('tweet', data => {
            console.log('tweets in useEffect', tweets)
            console.log('data', data)
            setTweets(prevTweets => [...prevTweets, data]);
            // setTweets(prevTweets => [data, ...prevTweets]);
        });
    }, []);



    // const tweets = [
    //     {
    //         text: `I'm learnding`,
    //         profilePicUrl: 'https://i.imgur.com/m2Zl4Cu.jpg',
    //     },
    //     {
    //         text: `I'm learnding again`,
    //         profilePicUrl: 'https://i.imgur.com/m2Zl4Cu.jpg',
    //     }
    // ]
    return (
        <TweetStream>
            {tweets.map((tweet, i) => {
                console.log('tweet', tweet)
                return (
                    <Card key={i} tweet={tweet} />
                )
            }).reverse()}
        </TweetStream>
    )
}
