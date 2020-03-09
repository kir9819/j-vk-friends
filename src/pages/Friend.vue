<template>
	<div v-if="friend">
		<h1>ID друга {{ id }}</h1>
		<h2>У кого в друзьях:</h2>
		<p v-for="personId in friendPersons" :key="personId">
			<span>{{ persons[personId].first_name }} {{ persons[personId].last_name }}</span>
		</p>

		<template v-if="!error">
			<h2>Стена:</h2>
			<div v-for="wallItem in wall" :key="wallItem.id">
				<div style="white-space: pre-wrap;">{{ wallItem.text }}</div>
				<div>
					<a
						:href="`//vk.com/wall${wallItem.from_id}_${wallItem.id}`"
						target="_blank"
					>Перейти к источнику</a>
				</div>
				<hr>
			</div>
		</template>

		<div v-else style="color: red;">{{ error }}</div>
	</div>

	<div v-else>Друг не найден</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'FriendPage',
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	data() {
		return {
			wall: [],
			error: '',
		}
	},
	computed: {
		...mapState([
			'persons',
			'friendsWithPersons',
		]),
		friend() {
			return this.friendsWithPersons.find(friend => friend.id === +this.id)
		},
		friendPersons() {
			return this.friend.persons
		},
	},
	watch: {
		id: {
			immediate: true,
			handler: 'getWall',
		},
	},
	methods: {
		async getWall() {
			if (!this.friend) return
			this.error = ''

			try {
				this.wall = await this.$http.getWall(this.id)
			} catch (error) {
				if (error.error_code === 30) this.error = 'Приватный профиль. Стена недоступна'
				else this.error = error.error_msg
			}
		},
	},
}
</script>