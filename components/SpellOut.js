import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';
import { nanoid } from 'nanoid'

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
// const buffer = ['4567', '89abc'];
const buffer = []
let connected = false
export const SpellOut = () => {
    console.log('%cSpellOut renders', 'color:purple')
    const [text, setText] = useState('4344')
    // const [connected, setConnected] = useState(false)
    // console.log('connected top', connected)
    const spansRef = useRef([]);
    spansRef.current = [];

    // useSocketIOClient((d, connected, setConnected) => {
    useSocketIOClient((d) => {
        console.log('d', d.text.length)
        if (buffer.length < 200) {
            buffer.push(d.text)
        }
        if (buffer.length >= 3) {
            console.log('buffer.length', buffer.length)
            console.log('connected in socketclient', connected)
            if (connected === false) {
                console.log('%c Set Connected', 'color:green')
                const nextTweet = buffer.shift() || '';
                // console.log('nextTweet', nextTweet)
                setText(nextTweet)
                // setConnected(true)
                connected = true;
            }

        }


        console.log('buffer', buffer)
    })

    // useEffect(() => {
    //     const nextTweet = buffer.shift() || '';
    //     // console.log('nextTweet', nextTweet)
    //     setText(nextTweet)
    // }, [connected])



    // useEffect(() => {




    //     return () => {
    //         // clearInterval(interval)
    //     }
    // }, [text])

    function addToRefs(el) {
        // console.log('el in addtorefs', el)
        // console.log('spansRef.current in addtorefs', spansRef.current)
        if (el && !spansRef.current.includes(el)) {
            spansRef.current.push(el)
        }

    }

    useEffect(() => {
        // console.log('text 1 ', text)
        // console.log('spansRef.current in useEffect', spansRef.current)
        if (!text.length) {
            setText(buffer.shift() || '')
        }
        for (let i = 0; i < text.length; i++) {
            // console.log('i in loop', i)
            setTimeout(() => {
                // console.log('text.length', text.length)
                // console.log('i', i)
                // console.log(`spansRef.current in timeout i = ${i}`, spansRef.current)
                // console.log('spansRef', spansRef)
                if (spansRef.current.length) {
                    console.log('spansRef', spansRef)
                    spansRef.current[i].style.visibility = 'visible';
                }
                if (i === text.length - 1) {
                    spellComplete()
                }
            }, 50 * i)

        }
    }, [text])

    const spellComplete = () => {
        setTimeout(() => {
            spansRef.current = []
            setText(buffer.shift() || '')
        }, 2000);
    }

    return (
        <TweetContainer>
            <TweetText>
                {text.split('').map((el, i, arr) => {
                    // console.log('el in return', el)
                    const nan = nanoid()
                    // console.log('nan', nan)
                    return (
                        <span key={nan} ref={addToRefs} style={{ visibility: `hidden` }}>{el}</span>
                    )
                })}
            </TweetText>
        </TweetContainer>
    )
}
