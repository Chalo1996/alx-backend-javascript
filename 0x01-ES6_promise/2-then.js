export default function handleResponseFromAPI(promise) {
  promise
    .then((obj = { status: 200, body: 'Success' }) => obj)
    .catch((err = new Error()) => err);

  console.log('Got a response from the API');
}
