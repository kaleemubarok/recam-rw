import { error } from '@sveltejs/kit';
export let id="";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.id === undefined) {
    throw error(404, 'Not found');

  } else {
    id = params.id
  }

  // let characterName;

	// fetch('https://swapi.dev/api/people/1')
	// 	.then((response) => response.json())
	// 	.then((character) => {
	// 		characterName = character.name;
	// 	})

  // throw error(404, 'Not found');
}
