let counter = 0;

function alertUser() {
  if (counter < 8) {
    const container = document.querySelector('.right ul')
    const object = document.createElement('li')
    object.innerText = randomText(Math.floor(Math.random() * 35))
    container.appendChild(object)
    counter++
  } else {
    const container = document.querySelector('.right ul');
    container.innerHTML = '';
    counter = 0
  }
}

function randomText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
