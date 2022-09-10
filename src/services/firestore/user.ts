import firestore from '@react-native-firebase/firestore';

import { FIRE_STORE_COLLECTIONS } from '~/utils';

export const createUserDoc = async ({ username, email }: User) => {
  await firestore()
    .collection(FIRE_STORE_COLLECTIONS.USERS)
    .add({ email, username });
};

export const getUserDocumentByEmail = async (email: string) => {
  const { docs }: FireStoreResponse = await firestore()
    .collection(FIRE_STORE_COLLECTIONS.USERS)
    .where('email', '==', email)
    .limit(1)
    .get();

  const userDoc = docs[0]['_data'];

  return { email: userDoc.email, username: userDoc.username } as User;
};
