import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    

    return (
      <div>
       <Helmet>
            <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
            <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>
        
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    art:allContentfulPost {
      edges{
        node {
          title {
            title
          }
          body {
            body
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
