import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class Timeline extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Timeline | ${siteTitle}`} />
        <ul>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <span style={{ marginRight: 10 }}>{node.frontmatter.date}</span>
              <Link
                style={{ boxShadow: 'none' }}
                to={node.fields.slug}
                style={{ textDecoration: 'none' }}
              >
                {title}
              </Link>
            </li>
          )
        })}
        </ul>
      </Layout>
    )
  }
}

export default Timeline

export const timelineQuery = graphql`
  query TimelineQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
