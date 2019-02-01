import React from 'react'
import { Link } from 'gatsby'
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <nav className="top-nav">
        <div className="top-nav-container">
          <Link
            to="/"
            className="top-nav-item"
            activeStyle={{
              color: 'skyblue',
              borderBottom: '1px solid skyblue',
            }}
          >
            <i className="iconfont icon-home" />
            HOME
          </Link>
          <Link
            to="/tags"
            className="top-nav-item"
            activeStyle={{
              color: 'skyblue',
              borderBottom: '1px solid skyblue',
            }}
          >
            <i className="iconfont icon-tags" />
            TAGS
          </Link>
          <Link
            to="/timeline"
            className="top-nav-item"
            activeStyle={{
              color: 'skyblue',
              borderBottom: '1px solid skyblue',
            }}
          >
            <i className="iconfont icon-timeline" />
            TIMELINE
          </Link>
          <Link
            to="/about/"
            className="top-nav-item"
            activeStyle={{
              color: 'skyblue',
              borderBottom: '1px solid skyblue',
            }}
          >
            <i className="iconfont icon-about" />
            About
          </Link>
          <a
            href="https://github.com/BeAce"
            target="_blank"
            className="top-nav-item"
            activeStyle={{
              color: 'skyblue',
              borderBottom: '1px solid skyblue',
            }}
          >
            <i className="iconfont icon-GitHub" />
            GitHub
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav
