import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/readings', label: 'readings' },
  { href: '/essays', label: 'essays' },
  { href: '/tools', label: 'tools' },
  { href: 'https://twitter.com/sebastianjbp', label: 'twitter' },
  { href: 'mailto:sebastian.jbp@gmail.com', label: 'email' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      nav > ul {
        display: flex;
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 12px;
      }
    `}</style>
  </nav>
)

export default Nav
