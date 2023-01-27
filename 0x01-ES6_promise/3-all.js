import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then(([photo, user]) => {
        resolve(
          console.log(photo.body, user.firstName, user.lastName),
        );
        reject((new Error('Signup system offline')));
      });
  });
}
