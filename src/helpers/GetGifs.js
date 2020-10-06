const apiKey = 'cg7kVp59eA66qa1oWQEkCfuLx4ZrZS4N';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(({ id, title, images }) => ({
    id: id,
    title: title,
    url: images?.downsized_medium.url,
  }));

  return gifs;
};
