import React from 'react'
import { Link } from 'gatsby'
import "prismjs/themes/prism-solarizedlight.css"
import Bio from './Bio';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1>
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Beace Blog
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3>
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Beace Blog
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div style={{ padding: '50px 200px' }}>
        <Bio />
        {children}
      </div>
    )
  }
}

export default Template
