import "../../styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-brand">Likho</div>
            <nav className="footer-links">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <p className="footer-copy">&copy; {new Date().getFullYear()} Likho. All rights reserved.</p>
        </footer>
    )
}

export default Footer
