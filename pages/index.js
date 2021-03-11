import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { CardList } from '../components/CardList';

const TestDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: gray;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h3 style={{ margin: 0 }}>
          Real Time Tweet Stream
        </h3>
        <CardList />
      </main>


    </div>
  )
}
