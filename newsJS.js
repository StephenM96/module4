// // Part 1 - Use the following array to populate
// // a web page which contains news. When the
// // page loads up, it will display the news in the
// // array.

// // Use an interval function to read the array
// // every 5 seconds. Every time the array is
// // read, remove all news elements from the
// // news container and fill it in with the latest
// // news – so it is always in sync.

let news=[

    { id: 1, title: 'News1', content:"bla"},
    { id: 2, title: 'News2', content:"ble"},
    { id: 3, title: 'News3', content:"blu"}
    ];

function showNews() {
    // access news Info
    let newsInfo = document.getElementById('newsInfo');

    // clear items
    newsInfo.innerHTML ='';

    // loop and add to newsInfo
    news.forEach(item => {
        let newsItem = document.createElement('div');
        newsItem.className='newsItem';

        // populate title and content elements
        let newsTitle = document.createElement('hs');
        newsTitle.className = 'newsTitle';
        newsTitle.textContent = item.title;

        let newsContent = document.createElement('p');
        newsContent.className = 'newsContent';
        newsContent.textContent=item.content;

        // add title and content to news item
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);

        // add news item to news container
        newsInfo.appendChild(newsItem);
    });
}

setInterval(showNews, 5000)
