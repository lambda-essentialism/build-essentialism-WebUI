class Index {
  constructor(element) {
    this.element = element;
    this.pageIndex = document.querySelector('.page-index');
  }

  createIndex() {
    let div = document.createElement('div');
    div.classList.add('item');

    let i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-circle');

    div.appendChild(i);
    this.pageIndex.appendChild(div);
  }
}

class About {
  constructor(element) {
    this.element = element;
    this.contents = this.element.querySelectorAll('.main-about');
    this.contents.forEach(item => new Index(item).createIndex());
    this.index = 0;

    this.pageIndex = document.querySelectorAll('.page-index .item i');
    this.pageIndex[this.index].classList.replace('far', 'fas');
    window.addEventListener('scroll', (e) => this.screenPosition()); 
  }

  screenPosition(e) {
    let element = document.querySelectorAll('.main-about')[this.index];
    let position = element.getBoundingClientRect();
  
    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      this.pageIndex[this.index].classList.replace('fas', 'far');
      this.index++;
      this.pageIndex[this.index].classList.replace('far', 'fas');
    } 
  }
}

const aboutContainer = document.querySelector('.about-container');
const aboutComponent = new About(aboutContainer);
