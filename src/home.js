function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const linkImage = document.createElement("img");
    linkImage.src = "images/zelda-cooking-camp.gif";
    linkImage.alt = "Link";
  
    home.appendChild(createParagraph("The most delicious recipes in all of Hyrule Kingdom!"));
    home.appendChild(createParagraph("It's dangerous to go alone...without a good meal!"));
    home.appendChild(linkImage);
    home.appendChild(createParagraph("The travel is worth it!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;