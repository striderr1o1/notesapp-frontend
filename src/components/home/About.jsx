import "../../styles/about.css"

function About(){
    return(
        <section id="#about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">Why We Exist</h2>
                <div className="about-content">
                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>To empower thinkers and creators by providing the ultimate digital canvas. We believe that every great idea starts with a simple note.</p>
                    </div>
                    <div className="about-card">
                        <h3>Our Vision</h3>
                        <p>A world where no thought is lost. We strive to create tools that seamlessly blend structure with creativity, making organization effortless.</p>
                    </div>
                    <div className="about-card">
                        <h3>Our Values</h3>
                        <p>Simplicity, Beauty, and Functionality. We don't just build software; we craft experiences that inspire you to write more.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About