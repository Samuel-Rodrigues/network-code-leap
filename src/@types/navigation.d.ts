const { ROUTES_TYPE, STACKS_TYPE } = Modules;

declare type RootParamList = {
  [STACKS_TYPE.STACK_PUBLIC]: undefined;
  [STACKS_TYPE.STACK_PRIVATE]: undefined;

  [ROUTES_TYPE.LOGIN]: undefined;
  [ROUTES_TYPE.USER]: undefined;
  [ROUTES_TYPE.POST_FORM]: { career: Career };
  [ROUTES_TYPE.WELCOME]: undefined;
};
