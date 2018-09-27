import React from 'react'
import "prismjs/themes/prism-solarizedlight.css"
import Bio from './Bio';

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="section">
        <Bio />
        {children}
      </div>
    )
  }
}

export default Template
