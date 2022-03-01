import { writable } from 'svelte/store'
import { browser } from '$app/env'

console.log(browser)

export const userName = writable (
		browser
			&& (localStorage.getItem ('userName') ?? "webjeda")
	)

userName
	.subscribe (val => browser && (localStorage.userName = val))