import React from 'react'

const Product = ({ node, props }) => (
    <li>
    <a href="javascript:;" onClick={() => {props.onOpenArticle(`${node.slug}`)}}>{node.title.title}</a>
    </li>
  )
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        
        <div className="content">
            <div className="inner">
                <h1>{props.home.title}</h1>
                <p>{props.home.leadingText.leadingText}</p>
            </div>
        </div>
        <nav>
            <ul>
            {props.art.map(({ node }, i) => (
                <Product node={node} key={node.id} props={props} />                
              ))}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
