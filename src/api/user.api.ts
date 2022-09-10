import { userFireBaseAuthServices, userFireStoreService } from '~/services';

export const createUserAccountReq = async ({
  email,
  password,
  username,
}: FormLogin) => {
  const response = await userFireBaseAuthServices.createUser({
    email,
    password,
  });

  userFireStoreService.createUserDoc({ email, username });

  const user: User = {
    email: response.user.email || '',
    id: response.user.uid,
    username,
  };
  return user;
};

export const signInReq = async ({ email, password }: FormLogin) => {
  const response = await userFireBaseAuthServices.signIn({ email, password });
  const { username } = await userFireStoreService.getUserDocumentByEmail(email);

  const user: User = {
    email: response.user.email || '',
    id: response.user.uid,
    username: username,
  };

  return user;
};

export const signInAnonymouslyReq = async ({
  username,
}: Partial<FormLogin>) => {
  const response = await userFireBaseAuthServices.signInAnonymously();

  const user: User = {
    email: '',
    username,
    id: response.user.uid,
  };
  return user;
};

export const signOutReq = async () => {
  await userFireBaseAuthServices.signOut();
};
