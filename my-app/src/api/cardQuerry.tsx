export const cardQuerry = async () => {
  try {
    return await (await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)).json();
  } catch (error) {
    return Promise.reject(error);
  }
};
