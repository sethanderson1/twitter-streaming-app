import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Card } from './Card'
const ENDPOINT = "http://localhost:8000";

export const CardList = () => {
    const [response, setResponse] = useState("");
    console.log('response', response)

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('tweet', data => {
            console.log('data', data)
            setResponse(data);
        });
    }, []);



    const tweets = [
        {
            text: `I'm learnding`,
            profilePicUrl: 'https://i.imgur.com/m2Zl4Cu.jpg',
        },
        {
            text: `I'm learnding again`,
            profilePicUrl: 'https://i.imgur.com/m2Zl4Cu.jpg',
        }
    ]
    return (
        <div>
            {tweets.map(tweet => {
                console.log('tweet', tweet)
                return (
                    <Card key={tweet.text} tweet={tweet} />
                )
            })}
        </div>
    )
}
