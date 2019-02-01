import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/layout'

class Tags extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const tags = get(this, 'props.data.allMarkdownRemark.group')
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Tags | ${siteTitle}`} />
        <table>
          <thead>
            <tr>
              <th>
                <i className="iconfont icon-tags" style={{ marginRight: 10 }} />
                标签
              </th>
              <th>文章篇数</th>
            </tr>
          </thead>
          <tbody>
            {tags.map(tag => {
              return (
                <tr key={tag.fieldValue}>
                  <td style={{ color: 'skyblue', margin: '0 20px' }}>
                    {tag.fieldValue}
                  </td>
                  <td>{tag.totalCount}篇</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query TagQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
