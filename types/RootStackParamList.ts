import { ParamListBase } from '@react-navigation/native';

// Define the types for your stack navigator
type RootStackParamList = ParamListBase & {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Profile: undefined;
  Activity: undefined;
  ResetPassword: {
    id: string;
  };
  Search: undefined;
  Notification: undefined;
  Setting: undefined;
  Chat: undefined;
  AddPost: undefined;
  Drawer: undefined;
}

export default RootStackParamList;
