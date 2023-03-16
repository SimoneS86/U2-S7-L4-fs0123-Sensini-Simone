const loadImagesBtn = document.getElementById("load-images-btn");
const arrayCardSvg = document.querySelectorAll(".changePic");

loadImagesBtn.addEventListener("click", async () => {
  try {
    const query = "natura";
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
      if (index < arrayCardSvg.length) {
        const img = document.createElement("img");
        img.src = photo.src.large2x;
        img.alt = photo.photographer;
        img.width = 300;
        img.height = 200;
        arrayCardSvg[index].parentNode.replaceChild(img, arrayCardSvg[index]);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
