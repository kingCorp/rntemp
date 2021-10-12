import { NavigationActions, NavigationNavigateAction } from 'react-navigation';

let _navigator: { dispatch: (arg0: NavigationNavigateAction) => void; };

function setTopLevelNavigator(navigatorRef: { dispatch: (arg0: NavigationNavigateAction) => void; }) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
