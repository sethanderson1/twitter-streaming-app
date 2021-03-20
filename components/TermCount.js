import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';

const TweetContainer = styled.div`
        height: 95vh;
        display: flex;
    `

const TweetCountsWrap = styled.div`
        font-size: 2rem;
        margin: 0 auto;
        margin-top: 50px;
    `

const TweetCounts = styled.div`
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        width: 20vw;
        p {
            margin:10px;
        }
    `
 
export const TermCount = () => {

    const [counts, setCounts] = useState({})
    console.log('counts', counts)

    useSocketIOClient((d) => {
        const { terms, hasTermObj } = d;
        console.log('hasTermObj', hasTermObj)

        terms.forEach(term => {
            console.log('term', term)

            if (hasTermObj[term]) {
                counts[term] = counts[term] === undefined ? 0 : counts[term] + 1;
            }

            console.log('counts22', counts)

        })

        setCounts({ ...counts })

    })

    const sortedCountsArr = Object
        .entries(counts)
        .sort((a, b) => b[1] - a[1])

    console.log('sortedCountsArr', sortedCountsArr)

    return (
        <TweetContainer>
            <TweetCountsWrap>
                {sortedCountsArr.map(el => <TweetCounts><p>{el[0]}</p> <p>{el[1]}</p> </TweetCounts>)}
            </TweetCountsWrap>

        </TweetContainer>
    )
}
