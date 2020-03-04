<template>
	<div>
		<p>Persons</p>

		<div
			v-for="personId in sortedPersons"
			:key="personId"
			style="display: flex; justify-content: space-between; align-items: start; text-align: left; border-radius: 12px; padding: 12px; margin: 4px;"
			:style="`background-color: ${chosenPersonsLocal.includes(personId) ? 'lightgreen' : ''}; ${persons[personId].is_closed ? 'color: lightgray;' : ''}`"
		>
			<label
				:title="persons[personId].is_closed ? 'Пользователь скрыл страницу, друзья недоступны' : null"
				style="cursor: pointer;"
			>
				<input
					v-model="chosenPersonsLocal"
					type="checkbox"
					:disabled="persons[personId].is_closed"
					:value="personId"
					style="display: none;"
				>
				<div>
					<span>{{ persons[personId].last_name }} {{ persons[personId].first_name }}</span>
					<br>
					<span>Пол: {{ genders[persons[personId].sex] }}</span>

					<template v-if="persons[personId].bdate">
						<br>
						<span>Возраст: {{ persons[personId].bdate }}</span>
					</template>

					<template v-if="!persons[personId].is_closed">
						<br>
						<span>Количество друзей: {{ persons[personId].friendsCount }}</span>
					</template>
				</div>
			</label>
			<button style="margin-left: 4px;" @click.prevent="removePerson(personId)">x</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { mutationTypes } from 'Plugins/store'

export default {
	name: 'Persons',
	data() {
		return {
			genders: {
				0: 'не указан',
				1: 'женский',
				2: 'мужской',
			},
		}
	},
	computed: {
		...mapState([
			'persons',
			'chosenPersons',
		]),
		chosenPersonsLocal: {
			get() {
				return this.chosenPersons
			},
			set(value) {
				this[mutationTypes.CHANGE_CHOSEN_PERSONS](value)
			},
		},
		sortedPersons() {
			const { persons } = this
			return Object.keys(persons).sort((p1, p2) => {
				const name1 = `${persons[p1].last_name} ${persons[p1].first_name}`
				const name2 = `${persons[p2].last_name} ${persons[p2].first_name}`
				return name1 > name2 ? 1 : -1
			})
		},
	},
	methods: {
		...mapActions(['removePerson']),
		...mapMutations([mutationTypes.CHANGE_CHOSEN_PERSONS]),
	},
}
</script>