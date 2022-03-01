import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const userName = writable (
		browser
			&& (localStorage.getItem ('userName') ?? "webjeda")
	)

userName
	.subscribe (val => browser && (localStorage.userName = val))