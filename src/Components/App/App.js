import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [ { name: 'x', artist: 'x', album: 'x', id: 0 }, { name: 'y', artist: 'y', album: 'y', id: 1 }, { name: 'z', artist: 'z', album: 'z', id: 2 } ],
      playlistName: 'pis',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(t => t.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    const playlistCopy = this.state.playlistTracks.slice();
    const newPlaylist = playlistCopy.filter(t => t.id !== track.id);
    this.setState({ playlistTracks: newPlaylist });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    Spotify.search(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              savePlaylist={this.savePlaylist}
              onNameChange={this.updatePlaylistName}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    )
  }
}