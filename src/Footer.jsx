function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <p><center>Welcome to Vertigo, the ultimate online extravaganza brought to you by Technovation ! Get ready to immerse yourself in a whirlwind of excitement and gaming brilliance.</center> </p>
                </div>
                <div className="footer-social" style={{ marginTop: '10px', marginRight: '10px' }}>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" style={{ fontSize: '20px', color: 'red', marginLeft: '10px' }}></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" style={{ fontSize: '20px', color: 'red', marginLeft: '10px' }}></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" style={{ fontSize: '20px', color: 'red', marginLeft: '10px' }}></i></a></li>
                        <li><a href="#"><i className="fa fa-address-book" style={{ fontSize: '20px', color: 'red', marginLeft: '10px' }}></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Vertigo. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}
export default Footer;
