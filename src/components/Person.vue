<template>
	<div
		id="component-person"
		:class="{
			active: chosenPersonsLocal.includes(id),
			'is-closed': person.is_closed,
		}"
	>
		<label
			:title="person.is_closed ? 'Пользователь скрыл страницу, друзья недоступны' : null"
			class="person-body"
		>
			<input
				v-model="chosenPersonsLocal"
				type="checkbox"
				:disabled="person.is_closed"
				:value="id"
				style="display: none;"
			>
			<div>
				<span>{{ person.last_name }} {{ person.first_name }}</span>
				<br>
				<span>Пол: {{ gender }}</span>

				<br>
				<span>Возраст: {{ age }}</span>

				<template v-if="!person.is_closed">
					<br>
					<span>Количество друзей: {{ person.friendsCount }}</span>
				</template>
			</div>
		</label>
		<div class="cancel-button" @click="removePerson(id)"/>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { mutationTypes } from 'Plugins/store'

const genders = ['не указан', 'женский', 'мужской']

export default {
	name: 'Person',
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	data() {
		return {

		}
	},
	computed: {
		...mapState([
			'persons',
			'chosenPersons',
		]),
		person() {
			return this.persons[this.id]
		},
		gender() {
			return genders[this.person.sex]
		},
		age() {
			if (!this.person.bdate) return 'не указано'

			const splittedDate = this.person.bdate.split('.')

			if (splittedDate.length < 3) return 'не указано'

			splittedDate[1] -= 1
			const bdateAsDate = new Date(...splittedDate.reverse())

			return Math.floor((new Date().getTime() - bdateAsDate) / (24 * 3600 * 365.25 * 1000))
		},
		chosenPersonsLocal: {
			get() {
				return this.chosenPersons
			},
			set(value) {
				this[mutationTypes.CHANGE_CHOSEN_PERSONS](value)
			},
		},
	},
	methods: {
		...mapActions(['removePerson']),
		...mapMutations([mutationTypes.CHANGE_CHOSEN_PERSONS]),
	},
}
</script>

<style lang="scss">
#component-person {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	text-align: left;
	border-radius: 12px;
	padding: 12px;
	margin: 4px;
	border: 1px solid;

	&.active {
		background-color: #81C784;
		border-color: #81c784;
	}

	&.is-closed {
		color: lightgray;
	}

	&:not(.is-closed) {
		.person {
			&-body {
				cursor: pointer;
			}
		}
	}

	.cancel-button {
		margin-left: 12px;
	}
}
</style>