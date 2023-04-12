function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '1-800-HEY-LISTEN!'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Great Plateau, Kakariko Village, Hyrule Kingdom'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/map-zelda.jpg'
    restaurantLocation.alt = 'Restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact