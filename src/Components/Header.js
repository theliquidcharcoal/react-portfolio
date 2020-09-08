import React, { Component } from 'react';
import '../utilities/lc-text-rotation';



class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
        <video id="videoBG" className="video-bg" poster="./images/header-background.jpg" autoPlay muted loop>
            <source src="./images/banner-video.mp4" type="video/mp4" /> 
        </video>

        <div className="banner-text">
          <h1 className="responsive-headline">I'm <span class="txt-rotate" data-type-speed="200" data-type="[ &quot;Web Designer.&quot;, &quot;Front-end Freak.&quot;, &quot;Graphics Designer.&quot;, &quot;Nature Lover.&quot;, &quot;Out Doorsy.&quot;, &quot;Tech Enthusiast.&quot;, &quot;Care Taker.&quot;,&quot;Loving.&quot;, &quot;Latte Lover.&quot;, &quot;Chai Specialist.&quot;, &quot;Smart Human.&quot; ]"></span></h1>
          <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
          <hr />
          <ul className="social">
              {networks}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

