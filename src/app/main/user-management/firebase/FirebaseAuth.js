import React, { Component } from 'react';
 
class FirebaseAuth extends Component {
 
  componentDidMount () {
      let links = [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://cdn.jsdelivr.net/npm/jquery-load-json@1.3.3/src/jquery.loadJSON.min.js",
        "https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js",
        "https://www.gstatic.com/firebasejs/7.13.2/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js",
        "/firebase-auth.js"
      ];
      for (let index = 0; index < links.length; index++) {
        const link = links[index];
        const script = document.createElement("script");

        script.src = link;
        script.async = false;

        document.body.appendChild(script);
      }
      
  }

  render() {
 
    return (
      <div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        
        <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

        <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-auth.js"></script>
        
        <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>
        

        <button id='googleSignIn'>Google Sign In</button>
        <button id='facebookSignIn'>Facebook Sign In</button>

        <script src="/firebase-auth.js"></script>
      </div>
    );
  }
}
 
export default FirebaseAuth;
