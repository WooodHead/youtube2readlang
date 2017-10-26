import React, {Component} from 'react';
import './App.css';
import {FormControl, FormGroup} from 'react-bootstrap'
import VideoQuery from './VideoQuery'

class SearchForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      videoQuery: '',
    };
  }

  handleVideoQueryChange(e) {
    this.setState({
      videoQuery: e.target.value
    })
  }

  render() {
    const { videoQuery } = this.state

    return (
      <FormGroup>
        <FormControl
          type="text"
          value={videoQuery}
          placeholder="Search or enter a YouTube URL"
          onChange={this.handleVideoQueryChange.bind(this)}
        />
        <br/>
        <VideoQuery videoQuery={this.state.videoQuery}/>
      </FormGroup>
    );
  }
}

export default SearchForm
