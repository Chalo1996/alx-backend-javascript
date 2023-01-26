export default function handleResponseFromAPI(promise) {
  promise.then(
    (resolve = 'Got a response from the API') => {
      console.log(resolve);
      return { status: 200, body: 'Success' };
    },
    (err = new Error()) => err,
  );
}
