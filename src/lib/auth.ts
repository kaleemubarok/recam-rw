import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('authToken') ?? defaultValue : defaultValue;
 
const authToken = writable<string>(initialValue);
// console.log(browser)
 
authToken.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('authToken', value);
  }
});


export default authToken;