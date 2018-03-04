import React from 'react'

const Product = ({ node, props }) => (
    <li>
    <a href="javascript:;" onClick={() => {props.onOpenArticle(`${node.slug}`)}}>{node.title.title}</a>
    </li>
  )
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dimension</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
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