import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul>
            <li>Modified with love by the Clever Programmer team ♥️</li>
           </ul>

           <ul className="copyright">
              <li>&copy; All credit goes to <a href="https://www.cleverprogrammer.com/">Clever Programmers</a> - Copyright 2020 Parth Patel</li>
              <li>Design by <a title="Styleshout" href="http://www.liquidcharcoal.com/">LiquidCharcoal</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
