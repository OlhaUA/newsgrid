class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav id="main-nav">
      <div class="container">
        <a href="../index.html"
          ><img src="../img/logo-blue.png" alt="NewsGrid" class="logo"
        /></a>
        <div class="social">
          <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
        </div>
        <ul>
          <li><a href="../index.html" class="current">Home</a></li>
          <li><a href="../about.html">About</a></li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('header-component', Header);
