const TOKEN_LOCATION = 'token';

export function saveToSession(userUrls) {
  const preSession = JSON.parse(sessionStorage.getItem('userUrls')) || [];

  const urlSets = Array.from(new Set([...preSession, ...userUrls]));

  sessionStorage.setItem('userUrls', JSON.stringify(urlSets));
}

export function removeFromSession(id) {
  const newSession = JSON.parse(sessionStorage.getItem('userUrls')).filter(
    (url) => url.id !== id
  );

  sessionStorage.setItem('userUrls', JSON.stringify(newSession));
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
