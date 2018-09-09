import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="header">
    <p>
      <Link prefetch href="/">
        <a>sebastian.mx</a>
      </Link>{' '}
      (
      <Link href="https://github.com/sjbp">
        <a target="_blank">src</a>
      </Link>
      )
    </p>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-size: 13px;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
      }
      :global(a) {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      div {
        display: flex;
        text-align: center;
        padding: 20px 50px;
      }
    `}</style>
  </div>
)

export default Header
