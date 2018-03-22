import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }  

  render() {
    const art = this.props.data.art.edges
    const siteDescription = this.props.data.siteMetadata.edges[0].node.metaDescription
    const homepage = this.props.data.siteMetadata.edges[0].node
    const siteTitle = this.props.data.siteMetadata.edges[0].node.metaTitle
    const gbBackgroundImage = this.props.data.siteMetadata.edges[0].node.backgroundImages[0].responsiveResolution.src

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="google-site-verification" content="MCxY6L1Z6T2zILpt_7rT_xxsHt2K_PgDnAJtDITNxxo" />
        </Helmet>

        <div id="wrapper">

          <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} art={art} home={homepage} />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
            art={art}
          />
          <SignUp />
          <Footer timeout={this.state.timeout} />

        </div>
        <div id="bg" style={{backgroundImage: "url(" + gbBackgroundImage + ")"}}></div>
      </div>
    )
  }
}

Template.propTypes = {
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
      art:allContentfulPost {
        edges {
          node {
            id
            slug
            title {
              title
            }
            body{
              childMarkdownRemark{
                html
              }
            }
            featuredImage {
              responsiveResolution(width: 600) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      },
      siteMetadata:allContentfulHome {
        edges {
          node {
            id
            title
            metaTitle
            metaDescription
            leadingText{
              leadingText
            }
            backgroundImages{
              responsiveResolution(width: 2800) {
                  width
                  height
                  src
                  srcSet
                }
            }
            logo {
              file {
                url
              }
              }
          }
        }
      }
  }
`