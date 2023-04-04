import React, { Component } from 'react'
import './Chat.css';

export class Chat extends Component {
    componentDidMount() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"39e9fe0ebe247660e589b46ad47f33b70","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
  render() {
    return (
      <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src="pic/home.png" alt="" class="home"/>
                <h1>chatbotdemo</h1>
            </div>
        </nav>
        
        
        <div class="pic-ctn">
            <img src="pic/daia.jpg" alt="" class="pic"/>
            <img src="pic/mie.jpg" alt="" class="pic"/>
            <img src="pic/giv.jpg" alt="" class="pic"/>
            <img src="pic/soklin.jpg" alt="" class="pic"/>
            <img src="pic/ekonomi.jpg" alt="" class="pic"/>
        </div>
        
      </div>
    )
  }
}

export default Chat