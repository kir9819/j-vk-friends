<template>
	<div/>
</template>

<script>
import { mutationTypes } from 'Plugins/store'

function parseQuery(queryString) {
	const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')

	return pairs.reduce((query, pair) => {
		const splittedPair = pair.split('=')
		query[decodeURIComponent(splittedPair[0])] = decodeURIComponent(splittedPair[1] || '')
		return query
	}, {})
}

export default {
	created() {
		const { access_token, expires_in, user_id } = parseQuery(this.$route.hash.substr(1))

		if (access_token) {
			this.$store.commit(mutationTypes.SET_TOKEN, { access_token, expires_in, user_id })
		}

		this.$router.replace({ name: 'Home' })
	},
}
</script>