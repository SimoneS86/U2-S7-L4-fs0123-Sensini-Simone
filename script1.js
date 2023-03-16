const loadImagesBtn = document.getElementById("load-images-btn");
const loadSecondImagesBtn = document.getElementById("load-second-images-btn");
const arrayCard = document.querySelectorAll(".card");

loadImagesBtn.addEventListener("click", async () => {
  try {
    const query = "tigri";
    const url = `https://api.pexels.com/v1/search?query=${query}`;
    const response = await fetch(url, {
      headers: {
        Authorization: "a2zxBaLOgwriXftJaDVT8KEyFDhu1C7rgsQ4R4ZTXoedL5ZrJyUf0Csb",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const photos = data.photos;

    photos.forEach((photo, index) => {
      if (index < arrayCard.length) {
        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        img.width = 300;
        img.height = 200;
        arrayCard[index].replaceChild(img, arrayCard[index].firstElementChild);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

loadSecondImagesBtn.addEventListener("click", async () => {
  try {
    const query2 = "natura";
    const url = `https://api.pexels.com/v1/search?query=${query2}`;
    const response = await fetch(url, {
      headers: {
        Authorization: "a2zxBaLOgwriXftJaDVT8KEyFDhu1C7rgsQ4R4ZTXoedL5ZrJyUf0Csb",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const photos = data.photos;

    photos.forEach((photo, index) => {
      if (index < arrayCard.length) {
        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        img.width = 300;
        img.height = 200;
        arrayCard[index].replaceChild(img, arrayCard[index].firstElementChild);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
