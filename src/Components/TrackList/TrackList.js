import './TrackList.css';
import React from 'react';
import { Track } from '../Track/Track'

export class TrackList extends React.Component {
    render() {
        let tracks = this.props.playlistTracks;
        const trackArr = tracks.map((track, id) => <Track key={id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} isPlayable={this.props.isPlayable} />);

        return (
            <div className="TrackList">
                {trackArr}
            </div>
        )
    }
}
