import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <ul className="icons">            
            <li><a href="https://www.instagram.com/goatnbike/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
        
    
    <div id="mc_embed_signup">
    <form action="https://goatnbike.us12.list-manage.com/subscribe/post?u=d0d83b49d8fcb13f79207dfc6&amp;id=f6b4838105" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">                        
        <div className="clear">
        <input type="submit" value="Sign up for updates!" name="subscribe" id="mc-embedded-subscribe" className="button"/>
        </div>
        </div>
    </form>
    </div>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> <a href="https://github.com/renatewr">By Renate W Ravnaas</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
