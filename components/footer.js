class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="main-footer" class="py-2">
    <!-- A grid container -->
    <div class="container footer-container">
      <div>
        <img src="../img/logo-bluel.png" alt="NewsGrid" />
        <p>
          Latest news of Ukraine and world online. Sports, politics,
          education, science and culture from the NewsGrid.
        </p>
      </div>
      <div>
        <h3>Email Newsletter</h3>
        <p>Sign up to our daily email</p>
        <form name="contact" method="POST" data-netlify="true">
          <input type="email" name="email" placeholder="Email address" />
          <input type="submit" value="Sign up" class="btn btn-primary" />
        </form>
      </div>
      <div>
        <h3>Site Links</h3>
        <ul class="list">
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div>
        <h2>Join Our Club</h2>
        <p>Available for everyone, funded by our readers</p>
        <a href="#" class="btn btn-primary">Join Now</a>
      </div>
      <div>
        <p>
          Copyright &copy; 2021, NewsGrid
        </p>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
