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
                    <button id="next">
                        <Ionicon icon="ios-skip-forward"/>
                    </button>
                </section>
                <section id="time-control">
                    <div className="current-time">-:--</div>
                    <input type="range" className="seek-bar" value="0" />
                    <div className="total-time">-:--</div>
                </section>
                <section id="volume-control">
                    <div className="volume-low">>
                        <Ionicon icon="ios-volume-low"/>
                    </div>
                    <input type="range" className="seek-bar" value="80"/>
                    <div className="volume-high">
                        <Ionicon icon="ios-volume-high"/>
                    </div>
                </section>
            </section>
        );
    }
}

export default PlayerBar;