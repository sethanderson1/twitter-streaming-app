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

// const buffer = ['this is a tweet', 'here is another tweet', 'and yet another tweet'];
const buffer = ['4567','89abc'];
// const buffer = []

export const SpellOut = () => {
    // const finished = useRef(false);
    // const [count, setCount] = useState(0);
    const [text, setText] = useState('123')
    
    // const [connected, setConnected] = useState(false)
    // const [isHidden, setIsHidden] = useState(true)
    console.log('text 0', text)

    const spansRef = useRef([]);
    spansRef.current = [];



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

    // useEffect(() => {
    //     const nextTweet = buffer.shift() || '';
    //     console.log('nextTweet', nextTweet)

    //     setText(nextTweet)
    // }, [count, connected])

    // useEffect(() => {




    //     return () => {
    //         // clearInterval(interval)
    //     }
    // }, [text])

    function addToRefs(el) {
        console.log('el in addtorefs', el)

        console.log('spansRef.current in addtorefs', spansRef.current)
        if (el && !spansRef.current.includes(el)) {
            spansRef.current.push(el)
        }

    }

    useEffect(() => {
        console.log('text 1 ', text)
        console.log('spansRef.current in useEffect', spansRef.current)
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                console.log('text.length', text.length)
                console.log('i', i)
                console.log(`spansRef.current in timeout i = ${i}`, spansRef.current)
                spansRef.current[i].style.visibility = 'visible';
                if (i === text.length - 1) {
                    console.log('done')
                    console.log('text 3', text)
                    spellComplete()
                }
            }, 500 * i)

        }
    }, [text])

    const spellComplete = () => {
        spansRef.current = []
        console.log('spansRef.current', spansRef.current)
        setText(buffer.shift() || '')
    }



    return (
        <TweetContainer>
            <TweetText>
                {text.split('').map((el, i, arr) => {
                    console.log('el in return', el)
                    return (
                        <span key={el.toString()} ref={addToRefs} style={{ visibility: `hidden` }}>{el}</span>
                    )
                })}
            </TweetText>
        </TweetContainer>
    )
}
