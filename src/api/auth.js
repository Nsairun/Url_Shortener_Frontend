/* eslint-disable camelcase */
import { httpClient } from './axios';

export function register(user) {
  return httpClient.post(`Users`, user);
}

export function getCurrentUser() {
  return httpClient.get('current-user').then(({ data }) => data);
}

export function login(email_address, password) {
  return httpClient.post('login', { email_address, password });
}
