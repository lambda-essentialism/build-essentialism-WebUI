const teamMembers = [
  { name: 'Eileen Cuevas', role: 'Team Lead', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UB0EQ6VR9-be0cd63ad566-72'},
  { name: 'Marlene Salangsang', role: 'UX/UI Designer', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UG1BSJV4J-3f2ddcbd7f67-72' },
  { name: 'Jason Prince', role: 'UI Developer', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UH0CJC1S6-bfbf4e8b9519-72' },
  { name: 'Noble Obioma', role: 'UI Developer', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UJ28HMZ9C-67cb841769a9-72' },
  { name: 'Raymond Pugh', role: 'Front-end Enginner', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UFJBRHKJ9-0a535d3d1abe-72'},
  { name: 'Garrett Weems', role: 'Back-end Enginner', avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UFMLDRQ3S-76a0616dcea8-72' },
];

class Gallery {
  constructor(array) {
    this.members = array;
    this.gallerySection = document.querySelector('.gallery');
    this.appendNewMembers();
  }

  appendNewMembers() {
    const newMembersArray = this.createNewMember();
    newMembersArray.forEach(item => this.gallerySection.appendChild(item))
  }

  createAvatar(imageLink) {
    const avatar = document.createElement('div');
    avatar.classList.add('avatar')

    const image = document.createElement('img');
    image.setAttribute('src', imageLink);
    avatar.appendChild(image);

    return avatar;
  }

  createInfo(name, role) {
    let info = document.createElement('div');
    info.classList.add('info')
    
    let nameDiv = document.createElement('p');
    nameDiv.classList.add('name')
    nameDiv.textContent = name;
    info.appendChild(nameDiv);
    
    let roleDiv = document.createElement('p');
    roleDiv.classList.add('role')
    roleDiv.textContent = role;
    info.appendChild(roleDiv);

    return info;
  }

  createNewMember(){
    const newMembers = this.members.map(item => {
      let newMember = document.createElement('div');
      newMember.setAttribute('data-aos', 'zoom-in-up');
      newMember.classList.add('member');

      let image = this.createAvatar(item.avatar);
      newMember.appendChild(image)

      let info = this.createInfo(item.name, item.role);
      newMember.appendChild(info);

      return newMember;
    })

    return newMembers;
  }
}

const teamGallery = new Gallery(teamMembers);
