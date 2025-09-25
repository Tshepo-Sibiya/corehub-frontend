const ACCESS_TOKEN_KEY = 'access_token';

export function setAccessToken(token: string): void {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, 'Bearer ' + token);
}

export function getAccessToken(): string | null {
    let _token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    console.log('Retrieved token:', _token);
    return _token;
}

export function removeAccessToken(): void {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}