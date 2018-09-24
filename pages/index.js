import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Nav from '../components/nav'

const Home = () => (
  <div className="home">
    <Head title="sebastian" />
    <Header />

    <div className="main">
      <h1 className="name">Sebastián Jiménez-Bonnet</h1>
      <div className="row">
        <Nav />
      </div>
    </div>

    <style jsx>{`
      .main {
        position: absolute;
        width: 100%;
        height: 70%;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .name {
        margin: 0;
        max-width: 880px;
        line-height: 1.15;
        font-size: 15px;
        font-weight: normal;
        text-align: center;
      }
      .row {
        margin: 0;
        max-width: 880px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
)

export default Home
