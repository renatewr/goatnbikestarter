import React from 'react'
import Link from 'gatsby-link'


const SecondPage = (props) => {

  const articles = props.art
  return (
    <div id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>  
    {articles.map(({ node: { title, slug, body, featuredImage } }) => (
      <article key={slug} id={slug} className={`${props.article === slug ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{title.title}</h2>
          <span className="image main"><img src={featuredImage.responsiveResolution.src} alt="" /></span>
          <div dangerouslySetInnerHTML={ { __html: body.childMarkdownRemark.html } }></div>
          {props.close}
        </article>
    ))}
    <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {props.close}
        </article>
  </div>
  )
}

class Main extends React.Component {
  
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <SecondPage art={this.props.art} article={this.props.article} timeout={this.props.timeout} articleTimeout={this.props.articleTimeout} close={close}/>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  art: React.PropTypes.array,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main