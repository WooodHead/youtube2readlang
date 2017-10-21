import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import ConversionPage from './ConversionPage'
import readlang from './readlang'

class App extends Component {
  componentDidMount() {
    readlang.requestAuth()

    // TODO: load properly
    window.addEventListener('load', function() {
      // TODO: apparently, this is not working..
      if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        window.gapi.auth2.getAuthInstance().signIn()
      }
    })
  }

  render() {
    return (
      <div>
        <div className="a2a_kit a2a_kit_size_24 a2a_floating_style a2a_vertical_style" style={{right: '0px', top: '200px'}}>
          {/* eslint-disable */}
          <a className="a2a_button_facebook"></a>
          <a className="a2a_button_twitter"></a>
          <a className="a2a_button_reddit"></a>
          <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
          {/* eslint-enable */}
        </div>

        <Grid>
          <ConversionPage/>

          <footer>
            <hr/>
            Made in Korea.
            &nbsp;
            <a href="https://github.com/ryanbrainard/youtube2readlang" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
            <hr/>
          </footer>
        </Grid>
      </div>
    );
  }
}

export default App;
