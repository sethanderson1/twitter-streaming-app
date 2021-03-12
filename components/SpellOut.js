import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';

const TweetContainer = styled.div`
        height: 95vh;
        display: flex;
    `

const TweetText = styled.div`
        width: 30%;
        font-size: 2.5vw;
        font-family: 'Roboto', sans-serif;
        margin: 0 auto;
        align-self: center;
    `

const buffer = ['abc', 'def', 'ghi'];

export const SpellOut = () => {
    const [sentence, setSentence] = useState('');
    // const finished = useRef(false);
    const [finished, setFinished] = useState(false);
    const [text, setText] = useState('getting Tweets')

    console.log('sentence', sentence)
    const getAnotherTweet = () => {
        console.log('buffer', buffer)
        return buffer.shift() || ''
    }

    // useSocketIOClient((d) => {
    //     console.log('d', d)

    //     if (buffer.length < 20) {
    //         buffer.push(d.text)
    //     }
    // })


    // useEffect(() => {

    //     const newText = getAnotherTweet();
    //     console.log('newText', newText)
    //     setText(newText)
    // }, [finished])
    const getNextTweet = () => {
        const nextTweet = buffer.shift();
        if (nextTweet) {
            setText(nextTweet)
        }
    }

    useEffect(() => {
        let i = 0;
        let interval = setInterval(() => {
            console.log('i', i)
            console.log('interval', interval)
            setSentence(prevSentence => {
                console.log('prevSentence', prevSentence)
                return prevSentence + text[i]
            })
            if (i >= text.length) {
                setSentence('')
                setFinished(true)
                console.log('finished', finished)
                getNextTweet()
                clearInterval(interval)
            }
            i++
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [text])

    return (
        <TweetContainer>
            <TweetText>{sentence}</TweetText>
        </TweetContainer>
    )
}
