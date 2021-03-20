import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { CardList } from '../components/CardList';
import { Graph } from '../components/Graph';
import { D3Testing } from '../components/D3Testing';
import { SpellOut } from '../components/SpellOut';
import { SpellOutWithProfile } from '../components/SpellOutWithProfile';
import { TermCount } from '../components/TermCount';

const TestDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: gray;

`
const Main = styled.main`
    /* background-color:#1e1d1d; */
    color: gray;

`
// TODO: render images as fast as possible

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main >
        <h3 style={{ margin: 0 }}>
          Real Time Tweet Stream
        </h3>
        {/* <CardList /> */}
        {/* <Graph /> */}
        {/* <D3Testing /> */}
        {/* <SpellOut /s> */}
        {/* <TermCount /> */}
        <SpellOutWithProfile />
      </Main>


    </div>
  )
}
