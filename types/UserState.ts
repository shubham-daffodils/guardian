interface UserState {
  isAuthenticated: boolean;
  loading?: boolean;
  error?: string | null;
  user?: any;
}
export default UserState;
