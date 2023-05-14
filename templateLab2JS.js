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
        text: "Van Gogh did this self-portrait with straw hat in the summer of 1887. It is notable for its loose, sketchy style. The painting is highly discolored, so that the background color has almost completely disappeared. Van Gogh made at least 27 self-portraits during this period."
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        alt: "Van Gogh's 'Sky'",
        text: "White House at Night is an oil-on-canvas painting created on 16 June 1890 in the small town of Auvers-sur-Oise by Vincent van Gogh, six weeks before his death. It is displayed at the Hermitage Museum, St. Petersburg."
      },
      {
        title: "Starry Night",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        alt: "Van Gogh's 'Starry Night'",
        text: "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village."
      },
      {
        title: "The Bedroom",
        url: "https://cdn.britannica.com/78/69678-050-491A5ED8/Bedroom-oil-canvas-Vincent-van-Gogh-Art-1889.jpg",
        alt: "Van Gogh's 'The Bedroom'",
        text: "The painting depicts van Gogh's bedroom at 2, Place Lamartine in Arles, Bouches-du-Rhône, France, known as the Yellow House."
      },
      {
        title: "Sunflowers",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436524/800285/main-image",
        alt: "Van Gogh's 'Sunflowers'",
        text: "Drawing on his early experiences with the firm of art dealers Goupil et Cie, in March 1887 Van Gogh organized an exhibition of Japanese prints at the Cafe du Tambourin, and later turned to Japanese motifs for several of his paintings."
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
    template.querySelector(".card-text").innerText = itemPortfolio.text;
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
