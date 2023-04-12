function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Creamy Heart Soup",
        "Hydromelon, a voltfruit, fresh milk, and a hearty radish(gives health boost)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Clam Chowder",
        "Fresh milk, tabantha wheat, goat butter, and a hearty blueshell snail(gives health boost)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Seafood Curry",
        "Goron spice and Hylian rice(Boosts attack and defense)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Hasty Fruit And Mushroom Mix",
        "Mix any fruit with a Rushroom(increases speed)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Seafood Fried Rice",
        "Hylian rice and rock salt(just a fun dish to make! Who says it needs a purpose?)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Hearty Fruitcake",
        "Apple or a wildberry, a hearty durian, wheat, and cane sugar(maxes out hearts)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Hearty Veggie Rice Balls",
        "Hearty Radish or its bigger variant with Hylian Rice(full recovery with 12 more hearts-health boost)"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Fairy Tonic",
        "Combine a fairy with either a monster part, Guardian part, animal part, or a type of gemstone(restorative effect)"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = 'images/heart-beat.gif';
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;