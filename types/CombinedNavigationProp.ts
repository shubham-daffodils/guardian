import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from './RootStackParamList';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type CombinedNavigationProp<T extends string> = NativeStackScreenProps<
  RootStackParamList,
  T
> & {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

export default CombinedNavigationProp;
