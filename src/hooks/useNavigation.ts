import {createNavigationContainerRef} from '@react-navigation/native';
const navigationRef = createNavigationContainerRef();

const useNavigation = () => {
  return {
    navigationRef,
  };
};

export default useNavigation;
