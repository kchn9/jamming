import './TrackList.css';
import React from 'react';
import { Track } from '../Track/Track'

export class TrackList extends React.Component {

    render() {
        const tracks = this.props.searchResults;
        const trackArr = tracks.map((track) => <Track track={track} />)

        return (
            <div className="TrackList">
                {trackArr}
            </div>
        )
    }
}