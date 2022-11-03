import { error } from '@sveltejs/kit';
export let id="";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.id === undefined) {
    throw error(404, 'Not found');

  } else {
    id = params.id
  }
}
