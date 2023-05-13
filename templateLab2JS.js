const data = [
  {
    title: "Card Title",
    content: "Lorem",
    url: "http://via.placeholder.com/300x200",
    alt: "300x200 placeholder",
  },
  {
    title: "Card Title 2",
    content: "Ipsum",
    url: "http://via.placeholder.com/300x200",
    alt: "300x200 placeholder",
  },
  {
    title: "Card Title 2",
    content: "Blah",
    url: "http://via.placeholder.com/300x200",
    alt: "300x200 placeholder",
  },
];

const artists = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        alt: "Self Portrait of Van Gogh",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        alt: "Van Gogh's 'Sky'",
      },
      {
        title: "Starry Night",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        alt: "Van Gogh's 'Starry Night'",
      },
      {
        title: "The Bedroom",
        url: "https://cdn.britannica.com/78/69678-050-491A5ED8/Bedroom-oil-canvas-Vincent-van-Gogh-Art-1889.jpg",
        alt: "Van Gogh's 'The Bedroom'",
      },
      {
        title: "Sunflowers",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436524/800285/main-image",
        alt: "Van Gogh's 'Sunflowers'",
      },
    ],
  },
];

// function addCard(card) {
//     const template = document.getElementById("card-template").content.cloneNode(true);
//     // console.log(document.getElementById("card-list"))
//     template.querySelector('.card-title').innerText = card.title;
//     template.querySelector('.card-text').innerText = card.content;
//     template.querySelector('.card-img').src = card.url;
//     template.querySelector('.card-img').alt = card.alt;
//     document.querySelector('#card-list').appendChild(template);
// }

function addCard(item) {
  const artist = document
    .getElementById("artist-portfolio")
    .content.cloneNode(true);
  console.log(artist);
  artist.querySelector("#artist-name").innerText = item.name;
  document.querySelector("#artist-list").appendChild(artist);
  item.portfolio.map((itemPortfolio) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    console.log(document.getElementById("card-list"));
    template.querySelector(".card-title").innerText = itemPortfolio.title;
    template.querySelector(".card-img").src = itemPortfolio.url;
    template.querySelector(".card-img").alt = itemPortfolio.alt;
    document.querySelector("#card-list").appendChild(template);
  });
}

if ("content" in document.createElement("template")) {
  // data.map((card) => { //.map is a type of loop function - look into this later
  //     addCard(card);
  // })
  artists.map((item) => {
    addCard(item);
  });
}
