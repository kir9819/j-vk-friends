<template>
	<div>
		<h1>Person {{ id }}</h1>
		<h2>Friends:</h2>
		<p v-for="friendId in personFriends" :key="friendId">
			<span>{{ friends[friendId].first_name }} {{ friends[friendId].last_name }}</span>
		</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'PersonPage',
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	computed: {
		...mapState([
			'persons',
			'friends',
		]),
		person() {
			return this.persons[this.id]
		},
		personFriends() {
			return this.person.friendIds
		},
	},
}
</script>