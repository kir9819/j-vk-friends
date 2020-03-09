<template>
	<div>
		<p>Пользователи</p>

		<Person
			v-for="personId in sortedPersons"
			:id="personId"
			:key="personId"
		/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Person from './Person'

export default {
	name: 'Persons',
	components: {
		Person,
	},
	computed: {
		...mapState([
			'persons',
		]),
		sortedPersons() {
			const { persons } = this
			return Object.keys(persons).sort((p1, p2) => {
				const name1 = `${persons[p1].last_name} ${persons[p1].first_name}`
				const name2 = `${persons[p2].last_name} ${persons[p2].first_name}`
				return name1 > name2 ? 1 : -1
			})
		},
	},
}
</script>