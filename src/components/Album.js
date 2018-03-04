import React, { Component } from 'react';
import albumData from './../data/albums';
import Ionicon from 'react-ionicons';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);
    
  const album = albumData.find( album => {
    return album.slug === this.props.match.params.slug
  });

  const songs = { album: songs};

  this.state = {
    album: album,
    currentSong: album.songs[0],
    isPlaying: false
  };

  this.audioElement = document.createElement('audio');
  this.audioElement.src=album.songs[0].audioSrc;

}

play() {
  this.audioElement.play();
  this.setState({ isPlaying: true });
}

pause() {
  this.audioElement.pause();
  this.setState({ isPlaying: false });
}

setSong(song) {
  this.audioElement.src = song.audioSrc;
  this.setState( { currentSong: song });
}

handleSongClick(song) {
  const isSameSong = this.state.currentSong === song;
  if (this.state.isPlaying  && isSameSong) {
    this.pause();
  } else {
    if (!isSameSong) {this.setSong(song); } 
    this.play();
  }
}

handlePrevClick() {
  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  const newIndex = Math.max(0, currentIndex - 1);
  const newSong = this.state.album.songs[newIndex];
  this.setSong(newSong);
  this.play(newSong);
}

handleNextClick() {
  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  const nextIndex = Math.max(0, currentIndex + 1);
  const nextSong = this.state.album.songs[nextIndex];
  this.setSong(nextSong);
  this.play(nextSong);
}

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
          </section>
          <table id="song-list">
            <colgroup>
              <col id="song-number-column"/>
              <col id="song-title-column"/>
              <col id="song-duration-column"/>
            </colgroup>
            <tbody>
               {this.state.album.songs.map( (songs, index) => {
                  return ( 
                  <tr className="song" key={index} onClick={() => this.handleSongClick(songs)}>
                    <td className="song-number">{index + 1}</td>
                    <td className="song-title">{songs.title}</td>
                    <td className="song-duration">{songs.duration}</td>
                    <td className="song-actions">
                    <Ionicon icon="ios-play" fontSize="35px" color="black"/>
                    <Ionicon icon="ios-pause" fontSize="35px" color="black"/>
                    </td>
                  </tr>
                  )
                })
              }

 
            </tbody>
          </table>
          <PlayerBar 
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          />
      </section>
    );
  }

}

export default Album;