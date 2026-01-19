import "../styles/hero.css"

function Hero(){
    return(
        <>
        <div className="herosection">
            <div className="hero-content text-section first">
                <h2>Capture Your Thoughts</h2>
                <p>Before they fly away into the abyss of forgotten ideas.</p>
            </div>
            <div className="hero-content image-section">
                <img src="/src/assets/rocketpaper.png" alt="Rocket Paper" />
            </div>
            <div className="hero-content text-section">
                <h2>Structure Your Chaos</h2>
                <p>Transform scattered notes into a masterpiece of organization.</p>
            </div>
        </div>
        </>
    )
}

export default Hero