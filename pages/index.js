import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { CardList } from '../components/CardList';
import { Graph } from '../components/Graph';
import { D3Testing } from '../components/D3Testing';
import { SpellOut } from '../components/SpellOut';
import { TermCount } from '../components/TermCount';

const TestDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: gray;
`

// TODO: render images as fast as possible

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
        {/* <CardList /> */}
        {/* <Graph /> */}
        {/* <D3Testing /> */}
        {/* <SpellOut /> */}
        <TermCount />
      </main>


    </div>
  )
}
