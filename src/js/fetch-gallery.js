import axios from 'axios';

axios.defaults.baseURL = 'https://drinkify.b.goit.study/api/v1/';
END_POINT = `cocktails/search/?`


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  },
);
async function fetch_coctailsByName(query) {
  const searchParams = new URLSearchParams({
    f: query,
  });
  try{
    const response = await axios(
    `${END_POINT}${searchParams}`,
  );
  return response.data; 
} catch (error) {
  console.error(error);
}
}
export { fetch_coctailsByName };