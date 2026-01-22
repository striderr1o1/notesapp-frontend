import "../../styles/contact.css"

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="your.email@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" placeholder="Tell us what's on your mind..."></textarea>
                    </div>
                    <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
