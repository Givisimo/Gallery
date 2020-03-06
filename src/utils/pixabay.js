 function getPhotos({ searchWord, page = 1, perPage = 20 }) {
  const result =  fetch(
    `https://pixabay.com/api/?key=13083480-36e6529ec243ccac1724af6b3&q=${searchWord}&page=${page}&per_page=${perPage}`,
  );

  return result;
}

export { getPhotos };
