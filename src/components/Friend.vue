<template>
	<router-link
		:to="{ name: 'Friend', params: { id: friend.id } }"
		class="friend-item"
		:class="`frequency-${frequency}`"
	>
		<span>{{ friends[friend.id].first_name }} {{ friends[friend.id].last_name }} </span>
	</router-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Friend',
	props: {
		friend: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState([
			'friends',
			'filteredPersons',
		]),
		personsCount() {
			return this.friend.persons.length
		},
		frequency() {
			return Math.round((this.personsCount / this.filteredPersons.length) * 7)
		},
	},
}
</script>

<style lang="scss" scoped>
.friend-item {
	flex-grow: 1;
	text-align: center;
	margin: 4px;
	padding: 16px;
	border-radius: 8px;
	color: white;

	&:not(:hover) {
		text-decoration: none;
	}
}
</style>