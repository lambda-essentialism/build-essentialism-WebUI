const appHost = 'https://essentialismapp.netlify.com';

class Nav {
  constructor(element) {
    this.element = element;
    this.navLinks = this.element.querySelectorAll('.nav-link');
    this.navBtn = document.querySelector('.nav-btn');
    this.navBtn.addEventListener('click', () => this.toogleSidebar());
    this.login = document.querySelector('.login').href = appHost;
    this.isOpen = false;
  }

  toogleSidebar() {
    if (!this.isOpen) {
      TweenMax.to(this.element, 1, {
        width: '100%',
        onComplete: () => {
          this.navBtn.classList.replace('fa-bars', 'fa-times');
          this.navBtn.style.color = '#fcf9ED';
        }
      });
      this.navLinks.forEach(nav => {
        TweenMax.to(nav, 1, { delay: 0.3, opacity: 1 });
      });
    } else {
      this.navLinks.forEach(nav => {
        TweenMax.to(nav, 1, { opacity: 0 });
      });
      TweenMax.to(this.element, 1, {
        delay: 0.48,
        width: '0%',
        onComplete: () => {
          this.navBtn.style.color = '#2D283D';
          this.navBtn.classList.replace('fa-times', 'fa-bars');
        }
      });
    }
    this.isOpen = !this.isOpen;
  }
}

const NavElement = document.querySelector('.navlinks');
const nav = new Nav(NavElement);
