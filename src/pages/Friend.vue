<template>
	<div
		v-if="friend"
		id="page-friend"
		:class="`frequency-${frequency}`"
	>
		<div class="friend-info">{{ friendInfo.last_name }} {{ friendInfo.first_name }}</div>
		<div class="friend-id">ID друга: {{ id }}</div>
		<div class="friend-persons d-flex">
			<div>У кого в друзьях:</div>

			<div class="friend-persons-list">
				<div v-for="personId in friendPersons" :key="personId">
					<span>{{ persons[personId].first_name }} {{ persons[personId].last_name }}</span>
				</div>
			</div>
		</div>

		<div v-if="wall.length > 0" class="friend-wall">
			<div class="friend-wall-label">Стена:</div>

			<WallItem
				v-for="wallItem in wall"
				:key="wallItem.id"
				:item="wallItem"
				class="friend-wall-item"
			/>
		</div>
	</div>

	<div v-else>Друг не найден</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mutationTypes } from 'Plugins/store'
import WallItem from 'Components/WallItem'

export default {
	name: 'FriendPage',
	components: {
		WallItem,
	},
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	data() {
		return {
			wall: [],
		}
	},
	computed: {
		...mapState([
			'persons',
			'friendsWithPersons',
			'filteredPersons',
			'friends',
		]),
		friend() {
			return this.friendsWithPersons.find(friend => friend.id === +this.id)
		},
		friendInfo() {
			return this.friends[this.id]
		},
		friendPersons() {
			return this.friend.persons
		},
		personsCount() {
			return this.friend.persons.length
		},
		frequency() {
			return Math.round((this.personsCount / this.filteredPersons.length) * 7)
		},
	},
	watch: {
		id: {
			immediate: true,
			handler: 'getWall',
		},
	},
	methods: {
		...mapMutations([
			mutationTypes.SET_ERROR,
		]),
		async getWall() {
			if (!this.friend) return
			this[mutationTypes.SET_ERROR]()

			try {
				this.wall = await this.$http.getWall(this.id)
			} catch (error) {
				this[mutationTypes.SET_ERROR](error)
			}
		},
	},
}
</script>

<style lang="scss">
#page-friend {
	padding: 20px 0;

	.friend {
		&-id, &-info {
			margin-bottom: 12px;
		}

		&-persons {
			justify-content: center;
			line-height: 1.5;
			margin-bottom: 12px;

			&-list {
				margin-left: 12px;
				text-align: left;
			}
		}

		&-wall {
			margin-top: 24px;
			display: flex;
			flex-direction: column;
			align-items: center;

			&-label {
				margin-bottom: 12px;
			}

			&-item {
				width: 100%;
				max-width: 400px;
				margin-bottom: 12px;
			}
		}
	}
}
</style>