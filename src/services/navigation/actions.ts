import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef,
} from '~/utils';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef<any>;

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any>,
): void {
  navigator = navigatorRef;
}

export function navigate(routeName: string, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}
