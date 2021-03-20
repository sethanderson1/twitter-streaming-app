import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';
import { nanoid } from 'nanoid'

const TweetContainer = styled.div`
        height: 95vh;
        display: flex;
        /* background-color:#1e1d1d; */
        color:#6a7a8d;
    `

const TweetText = styled.div`
        width: 40%;
        font-size: 2.8vw;
        font-family: 'Roboto', sans-serif;
        margin: 0 auto;
        align-self: center;
    `

const ProfileImage = styled.img`
width: 50%;
height: fit-content;
`

// TODO: Implement logic as in Card such that text doenst start before profile pic loaded
// TODO: maybe combine text and pofile into one state object

// const buffer = ['this is a tweet', 'here is another tweet', 'and yet another tweet'];
// const buffer = ['4567', '89abc'];
const buffer = []
let connected = false
export const SpellOutWithProfile = () => {
    console.log('%cSpellOut renders', 'color:purple')
    const [text, setText] = useState('4344')
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const containerRef = useRef();
    const spansRef = useRef([]);
    spansRef.current = [];

    // useSocketIOClient((d, connected, setConnected) => {
    useSocketIOClient((d) => {
        console.log('d', d.text.length)
        if (buffer.length < 200) {
            // buffer.push(d.text)
            buffer.push(d)
        }
        if (buffer.length >= 3) {
            console.log('buffer.length', buffer.length)
            console.log('connected in socketclient', connected)
            if (connected === false) {
                console.log('%c Set Connected', 'color:green')
                // const nextTweet = buffer.shift()|| '';
                // const nextTweet = buffer.shift() || '';
                const nextTweet = buffer.shift();
                const nextTweetText = nextTweet.text || '';
                setText(nextTweetText)
                setProfilePicUrl(nextTweet.profilePicUrl)
                connected = true;
            }

        }


        console.log('buffer', buffer)
    })


    function addToRefs(el) {
        if (el && !spansRef.current.includes(el)) {
            spansRef.current.push(el)
        }

    }

    useEffect(() => {
        if (!text.length) {
            const nextTweet = buffer.shift();
            const nextTweetText = nextTweet?.text || '';
            console.log('nextTweetText', nextTweetText)
            setText(nextTweetText)
            setProfilePicUrl(nextTweet?.profilePicUrl)

        }
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                if (spansRef.current.length) {
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
            const nextTweet = buffer.shift();
            const nextTweetText = nextTweet?.text || '';
            containerRef.current.style.visibility = 'hiddel';
            setText(nextTweetText)
            setProfilePicUrl(nextTweet?.profilePicUrl)

        }, 2000);
    }

    const handlePicLoaded = () => {
        containerRef.current.style.visibility = 'visible';
        // containerRef.current.style.color = 'black';
    }

    console.log('text', text)
    return (
        <TweetContainer ref={containerRef}
            style={{ visibility: 'hidden' }}
        >
            <ProfileImage onLoad={handlePicLoaded} src={profilePicUrl} />
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
