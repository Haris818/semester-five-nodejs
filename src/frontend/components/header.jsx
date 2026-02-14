function Header() {
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">

              {/* Logo */}
              <div className="logo">
                <a href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>

              {/* Main Menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li>
                      <a href="/blog">Blog</a>
                      <ul className="submenu">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                        <li><a href="/elements">Elements</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/* Button */}
              <div className="header-btns d-none d-lg-block f-right">
                <a href="/contact" className="btn">Contact me</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
