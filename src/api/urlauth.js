/* eslint-disable import/prefer-default-export */
import { httpClient } from './axios';

export function registerUrl(url) {
  return httpClient.post(`Urls`, url);
}

export function getUrls() {
  return httpClient.get(`urls`).then(({ data }) => data);
}
