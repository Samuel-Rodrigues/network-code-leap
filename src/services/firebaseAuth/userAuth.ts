import auth from '@react-native-firebase/auth';

export const createUser = async ({ email, password }: Partial<FormLogin>) =>
  await auth().createUserWithEmailAndPassword(email!, password!);

export const signIn = async ({ email, password }: Partial<FormLogin>) =>
  await auth().signInWithEmailAndPassword(email!, password!);

export const signInAnonymously = async () => await auth().signInAnonymously();

export const signOut = async () => await auth().signOut();
