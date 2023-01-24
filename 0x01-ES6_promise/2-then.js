export default function handleResponseFromAPI(promise) {
  promise.then({
    status: 200,
    body: 'Success',
  }).catch(console.error);
  promise.then(console.log('Got a response from the API'));
}
