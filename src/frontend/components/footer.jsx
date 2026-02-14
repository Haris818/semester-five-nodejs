function Footer() {
  return (
    <footer>
      <div className="footer-area black-bg">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="single-footer-caption mb-50 text-center animate__animated animate__fadeInUp">
              {/* Logo */}
              <div className="footer-logo">
                <a href="/">
                  <img src="/assets/img/logo/logo2_footer.png" alt="Footer Logo" />
                </a>
              </div>

              {/* Menu */}
              <div className="main-menu main-menu2 text-center">
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/* Social */}
              <div className="footer-social mt-30">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copy-right text-center">
              <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by 
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
