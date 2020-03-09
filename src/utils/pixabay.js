function getPhotos({ searchWord, page = 1, perPage = 20 }) {
  return fetch(
    `https://pixabay.com/api/?key=13083480-36e6529ec243ccac1724af6b3&q=${searchWord}&page=${page}&per_page=${perPage}`,
  )
    .then(res => res.json())
    .then(data => data.hits);
}

export { getPhotos };
