export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL as string;

export enum ApiEndpoint {
  PreAuth = '/user/pre-auth',
  AuthLogin = '/user/auth',
  AuthLogout = '/user/disconnect',
}
