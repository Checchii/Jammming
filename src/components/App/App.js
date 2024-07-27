import React, { useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "example track name 1",
      artist: "example track artist 1",
      album: "example track album 1",
      id: 1,
    },
    {
      name: "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2,
    }
  ]);

  const [playlistName, setPlaylistName] = useState('Example Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 11,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 22,
    }
  ]);

  function addTrack(track) {

  };

  function removeTrack(track) {

  };

  function updatePlaylistName(name) {

  };

  function savePlaylist() {

  };

  function search(term) {

  };

  return (
    <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={search} />
          
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist 
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
            />

          </div>
        </div>
      </div>
  );
}

export default App;
