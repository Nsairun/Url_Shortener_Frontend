/* eslint-disable import/prefer-default-export */
import { httpClient } from './axios';

export function registerUrl(url) {
  return httpClient.post(`Urls`, url);
}

export function getUrlByUserId(UserId) {
  return httpClient.get(`urls/userId/:${UserId}`).then(({ data }) => data);
}

export function deleteOneUrl(id) {
  return httpClient.delete(`urls/${id}`, id);
}
