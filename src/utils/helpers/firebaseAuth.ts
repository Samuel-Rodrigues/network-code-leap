export const getAuthError = (error: unknown | any): string => {
  if (!error?.message) return 'Error creating user';

  const [, message] = error?.message.split(']');

  return message;
};
