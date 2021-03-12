import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';

const TweetContainer = styled.div`
        height: 95vh;
        display: flex;
    `

const TweetText = styled.div`
        width: 40%;
        font-size: 2.8vw;
        font-family: 'Roboto', sans-serif;
        margin: 0 auto;
        align-self: center;
    `

const buffer = ['abc', 'def', 'hi'];
// const buffer = []
// 
// TODO: prevent last word of line from becoming first
// word on next line 

export const SpellOut = () => {
    const [sentence, setSentence] = useState('testing testing ');
    // const finished = useRef(false);
    const [count, setCount] = useState(0);
    const [text, setText] = useState('getting Tweets')
    const [connected, setConnected] = useState(false)
    const [isHidden, setIsHidden] = useState(true)
    console.log('text', text)

    // useSocketIOClient((d) => {
    //     console.log('d', d)

    //     if (buffer.length < 200) {
    //         buffer.push(d.text)
    //     }
    //     if (buffer.length >= 3) {
    //         setConnected(true)
    //     }
    //     console.log('buffer', buffer)
    // })

    useEffect(() => {
        const nextTweet = buffer.shift() || '';
        console.log('nextTweet', nextTweet)

        setText(nextTweet)
    }, [count, connected])

    useEffect(() => {


        

        return () => {
            // clearInterval(interval)
        }
    }, [text])

    return (
        <TweetContainer>
            <TweetText>
                {text.split('').map((el, i) => <span key={i} style={{visibility:`${isHidden[i]}`}}>{el}</span>)}
                </TweetText>
            {/* <TweetText>{sentence}</TweetText> */}
        </TweetContainer>
    )
}
