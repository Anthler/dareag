const Footer = () => {
    return(
      <div id="footer">
        <div className="footer-basic">
            <footer>
                <div className="social" style={{color:"green"}}>
                    <a href="#"><i className="icon ion-social-twitter"></i></a>
                    <a href="#"><i className="icon ion-social-youtube"></i></a>
                    <a href="#"><i className="icon ion-social-facebook"></i></a>
                    <a href="#"><i className="icon ion-social-instagram"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Our tokens</a></li>
                    <li className="list-inline-item"><a href="#">Crowdsale</a></li>
                    <li className="list-inline-item"><a href="#">Team</a></li>
                    <li className="list-inline-item"><a href="#">FAQ</a></li>
                    <li className="list-inline-item"><a href="#">Whitepaper</a></li>
                </ul>
                <p className="copyright">ABC 2021</p>
            </footer>
        </div>
      </div>
    )
}

export default Footer;