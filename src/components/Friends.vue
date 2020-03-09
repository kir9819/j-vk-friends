<template>
	<div>
		<p>Всего друзей: {{ friendsWithPersons.length }}</p>

		<div style="display: flex; flex-wrap: wrap;">
			<Friend
				v-for="friend in friendsWithPersons"
				:key="friend.id"
				:friend="friend"
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Friend from './Friend'

export default {
	name: 'Friends',
	components: {
		Friend,
	},
	computed: {
		...mapState([
			'friends',
			'friendsWithPersons',
		]),
	},
}
</script>