import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const TweetContainer = styled.div`
    display: flex;
`

const ProfileImage = styled.img`
    width: 50%;
    height: fit-content;
`

const TweetText = styled.div`
    width: 30%;
    font-size: 2.5vw;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
    align-self: center;
`

export const Card = ({ tweet }) => {
    const containerRef = useRef();

    console.log('tweet', tweet)
    const { profilePicUrl, text } = tweet;

    // useEffect(() => {

    // }, [])

    const handlePicLoaded = () => {
        containerRef.current.style.visibility = 'visible';
        // containerRef.current.style.color = 'black';
    }

    return (
        <TweetContainer ref={containerRef} 
        style={{ visibility: 'hidden' }}
        >
            <ProfileImage onLoad={handlePicLoaded} src={profilePicUrl} />
            <TweetText >{text}</TweetText>
        </TweetContainer>
    )
}
