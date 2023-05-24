function Footer() {
    return <footer className="page-footer brown">
        <div className="container">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} | prod by Bagaeva Olesya for RTU MIREA
                    <a className="grey-text text-lighten-4 right" href="https://github.com/olesyaay/SPA-react-project
" target="_blank">Repository</a>
                </div>
            </div>
        </div>
    </footer>
}
export { Footer };
