<template>
	<div class="home">
		<div id="vk_api_transport"/>
		<GetUser/>
		<div v-if="isPersonsExist" style="display: flex; justify-content: space-between;">
			<Persons style="flex-shrink: 0;"/>
			<Friends/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import GetUser from 'Components/GetUser'
import Persons from 'Components/Persons'
import Friends from 'Components/Friends'

export default {
	name: 'Home',
	components: {
		GetUser,
		Persons,
		Friends,
	},
	computed: {
		...mapState(['persons']),
		isPersonsExist() {
			return Object.keys(this.persons).length > 0
		},
	},
}
</script>