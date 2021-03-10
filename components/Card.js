import React from 'react'

export const Card = ({tweet}) => {
    console.log('tweet', tweet)
    const {profilePicUrl, text} = tweet;
    return (
        <div>
            <img src={profilePicUrl} />
            <p>{text}</p>
        </div>
    )
}
