export default function handleResponseFromAPI(promise) {
  promise
    .then((obj = { status: 200, body: 'success' }) => obj)
    .catch((err = new Error()) => err)
    .finally(console.log('Got a response from the API'));
}
