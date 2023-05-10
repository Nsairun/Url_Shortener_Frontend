const TOKEN_LOCATION = 'token';

export function saveToSession(userUrls) {
  const preSession = JSON.parse(sessionStorage.getItem('userUrls')) || [];

  sessionStorage.setItem(
    'userUrls',
    JSON.stringify([...preSession, ...userUrls])
  );
}

export function existInSession(longUrl) {
  return JSON.parse(sessionStorage.getItem('userUrls'))?.some(
    (url) => url?.long_url === longUrl
  );
}

export function saveToken(token) {
  localStorage.setItem(TOKEN_LOCATION, token);
}

export function readToken() {
  return localStorage.getItem(TOKEN_LOCATION);
}
