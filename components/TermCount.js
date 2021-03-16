import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSocketIOClient } from '../hooks/useSocketIOClient';

const TweetContainer = styled.div`
        height: 95vh;
        display: flex;
    `

export const TermCount = () => {
    // const [data, setData] = useState({});
    // const initialCounts = {
    //     lol: 0,
    //     omg: 0,
    //     wtf: 0,
    // }
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
            setCounts({ ...counts })

        })

        // setCounts()


        // setData(d)






    })

    // useEffect(() => {

    // }, [data])




    return (
        <TweetContainer>

        </TweetContainer>
    )
}
