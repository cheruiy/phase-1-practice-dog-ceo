console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("breed-dropdown");
  
    // Challenge 1: Fetch images and add to DOM
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  
    // Challenge 2: Fetch breeds and add to DOM
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          const listItem = document.createElement("li");
          listItem.textContent = breed;
          breedList.appendChild(listItem);
        });
      });
  
    // Challenge 3: Change font color on breed click
    breedList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "red"; // Change font color to red on click
      }
    });
  
    // Challenge 4: Filter breeds by selected letter
    breedList.addEventListener("change", (event) => {
      const selectedLetter = event.target.value.toLowerCase();
      const breeds = breedList.getElementsByTagName("li");
      for (let breed of breeds) {
        if (breed.textContent.charAt(0).toLowerCase() !== selectedLetter) {
          breed.style.display = "none"; // Hide breeds that don't match selected letter
        } else {
          breed.style.display = "block"; // Show breeds that match selected letter
        }
      }
    });
  });