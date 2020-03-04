<template>
	<div>
		<p>Friends: {{ sortedFriends.length }}</p>

		<div style="display: flex; flex-wrap: wrap;">
			<router-link
				v-for="friend in sortedFriends"
				:key="friend.id"
				:to="{ name: 'Friend', params: { id: friend.id } }"
				style="flex-grow: 1; text-align: center; margin: 4px; padding: 16px; border: 1px solid;"
			>
				<span>{{ friends[friend.id].first_name }} {{ friends[friend.id].last_name }} </span>
				<span>{{ friend.persons.length }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Friends',
	computed: {
		...mapState([
			'friends',
			'friendsWithPersons',
		]),
		sortedFriends() {
			const sortedFriends = [...this.friendsWithPersons]
			return sortedFriends.sort((friend1, friend2) => friend2.persons.length - friend1.persons.length)
		},
	},
}
</script>