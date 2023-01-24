export default function handleResponseFromAPI(promise) {
  promise.then((msg = 'Got a response from the API') => {
    console.log(msg);
    return {
      status: 200,
      body: 'Success',
    };
  }).catch(Error());
}
