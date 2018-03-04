import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
                <section id="buttons">
                    <button id="previous" onClick={this.props.handlePrevClick}>
                        <Ionicon icon ="ios-skip-backward"/>
                    </button>
                    <button id="play-pause" onClick={this.props.handleSongClick}>
                        <Ionicon icon={this.props.isPlaying ? 'ios-pause': 'ios-play'}/>
                    </button>
                    <button id="next" onClick={this.props.handleNextClick}>
                        <Ionicon icon="ios-skip-forward"/>
                    </button>
                </section>
                <section id="time-control">
                    <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                    <input 
                     type="range"
                     className="seek-bar" 
                     value={(this.props.currentTime / this.props.duration) || 0}
                     max="1"
                     min="0"
                     step="0.01"
                     onChange= {this.props.handleTimeChange}
                     />
                    <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
                </section>
                <section id="volume-control">
                    <div className="volume-low">
                        <Ionicon icon="ios-volume-low"/>
                    </div>
                    <input 
                    type="range" 
                    className="volume-bar" 
                    value={this.props.volume}
                    max="1"
                    min="0"
                    step="0.01"
                    onChange={this.props.handleVolumeChange}
                    />
                    <div className="volume-high">
                        <Ionicon icon="ios-volume-high"/>
                    </div>
                </section>
            </section>
        );
    }
}

export default PlayerBar;