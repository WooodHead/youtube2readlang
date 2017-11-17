import React, { Component } from 'react'
import './App.css'
import { Grid } from 'react-bootstrap'
import ConversionPage from './ConversionPage'

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="a2a_kit a2a_kit_size_24 a2a_floating_style a2a_vertical_style"
          style={{ right: '0px', top: '200px' }}
        >
          {/* eslint-disable */}
          <a className="a2a_button_facebook" />
          <a className="a2a_button_twitter" />
          <a className="a2a_button_reddit" />
          <a className="a2a_dd" href="https://www.addtoany.com/share" />
          {/* eslint-enable */}
        </div>

        <Grid>
          <br />
          <ConversionPage />
        </Grid>
      </div>
    )
  }
}

export default App
