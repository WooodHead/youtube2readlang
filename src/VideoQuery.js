import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-refetch'
import youtube from './youtube'
import VideoQueryResult from './VideoQueryResult'
import PromiseStateContainer from './PromiseStateContainer'

class VideoQuery extends Component {
  static propTypes = {
    videoQuery: PropTypes.string.isRequired,
  }

  render() {
    return <PromiseStateContainer
      ps={this.props.videosFetch}
      onPending={() => null}
      onFulfillment={(videos) =>
        videos.items.map((video) =>
          <VideoQueryResult key={video.id} video={video} />
        )
      }/>
  }
}

const YOUTUBE_REGEX = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/

export default connect(({ videoQuery }) => {
  const urlMatches = videoQuery.match(YOUTUBE_REGEX)
  const videoId = urlMatches && urlMatches[5]

  if (videoId) {
    return {
      videosFetch: youtube.buildApiV3Request('GET', '/videos', {
        id: videoId,
        part: 'snippet'
      })
    }
  } else if (videoQuery.length > 2) {
    return {
      videosFetch: youtube.buildApiV3Request('GET', '/search', {
        type: 'video',
        part: 'snippet',
        videoCaption: 'closedCaption',
        q: videoQuery,
      })
    }
  } else {
    return {}
  }
})(VideoQuery)
