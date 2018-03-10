import React from 'react';
import './../App.css';

const Landing = () => (
    <section className = "landing">
        <section className="hero-title">
            <div className="text-blocks">
                <h2>Bloc Jams</h2>
                <p>Turn the music up!</p>
            </div>
        </section>
    
        <section className ="selling-points">
            <div className="point1">
                <div className="text-blocks">
                    <h2 className="point-title">Choose your music</h2>
                    <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
                </div>
            </div>
            <div className="point2">
                <div className="text-blocks">
                    <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                    <p className="point-description">No arbitrary limits. No distractions.</p>
                </div>
            </div>
            <div className="point3">
                <div className="text-blocks">
                    <h2 className="point-title">Mobile enabled</h2>
                    <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                </div>
            </div>
    </section>
</section>
);

export default Landing;