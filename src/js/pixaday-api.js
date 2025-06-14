export const photoApi = (searchedQuery) => {
    return fetch(
    `https://pixabay.com/api/?key=50834675-61314f789662a68656002458b&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
}

