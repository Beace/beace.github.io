import React from 'react'
import { Link } from 'gatsby'
import './Bio.css'

class Bio extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/" style={{ marginRight: 20, flexShrink: 0, }}>
          <img
            src="https://imgs.beacelee.com/logo.jpg"
            alt={`Beace Lee`}
            style={{
              marginRight: 20,
              marginBottom: 0,
              width: 80,
              height: 80,
              borderRadius: '50%',
            }}
          />
        </Link>
        <div style={{ padding: 0, margin: 0 }}>
          <h3 style={{ marginBottom: 6 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>Beace Blog</Link>
          </h3>
          <div className="description">
            Written by <strong>Beace Lee</strong> who lives and works in China
            building useful things.{' '}
            <a href="https://twitter.com/beaceshimin">
              You should follow him on Twitter
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
