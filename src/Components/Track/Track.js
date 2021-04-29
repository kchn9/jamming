import './Track.css';
import React from 'react';
import Spotify from '../../util/Spotify';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
            isPlaying: false
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.renderPlay = this.renderPlay.bind(this);
        this.playTrack = this.playTrack.bind(this);
        this.pauseTrack = this.pauseTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    playTrack() {
        Spotify.getTrackPreview(this.props.track.id).then((prevUrl => {
            this.setState( { audio: new Audio(prevUrl) } );
            this.state.audio.addEventListener('canplay', () => {
                this.state.audio.play();
            })
        }))
    }

    pauseTrack() {
        if (this.state.audio !== null) {
            this.state.audio.pause();
        }
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        } else {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
    }

    renderPlay() {
        if (this.props.isPlayable) {
            return (
                <div>
                    <button className="Track-play" onClick={this.playTrack}>PLAY</button>
                    <button className="Track-pause" onClick={this.pauseTrack}>PAUSE</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
                {this.renderPlay()}
            </div>
        );
    }
}