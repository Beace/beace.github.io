import React from 'react'
import './font.css';
import "prismjs/themes/prism-solarizedlight.css"
import Nav from './Nav';
import Bio from './Bio';


class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Nav />
        <div className="section">
          <Bio />
          {children}
        </div>
      </React.Fragment>
    )
  }
}

export default Template
