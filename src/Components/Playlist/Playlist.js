import './Playlist.css';
import React from 'react';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        const input = e.target.value;
        this.props.onNameChange(input);
    }

    render() {
        return (
            <div className="Playlist" onChange={this.handleNameChange}>
                <input defaultValue={'New Playlist'}/>
                <TrackList
                    playlistName={this.props.playlistName}
                    playlistTracks={this.props.playlistTracks}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={false}
                />
                <button className="Playlist-save" onClick={this.props.savePlaylist}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}