<template>
	<div>
		<input
			ref="userId"
			v-model="userId"
			placeholder="id пользователя"
			:disabled="loading"
			@keydown.enter="search"
		>
		<button :disabled="!userId || loading" @click="search">Поиск</button>

		<button
			:disabled="chosenPersons.length === 0"
			style="margin-left: 40px;"
			@click="SET_FILTERED_FRIENDS"
		>Построить</button>
	</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { mutationTypes } from 'Plugins/store'

export default {
	name: 'GetUser',
	data() {
		return {
			userId: '',
			loading: false,
		}
	},
	computed: {
		...mapState(['chosenPersons']),
	},
	mounted() {
		this.focus()
	},
	methods: {
		...mapMutations([mutationTypes.SET_FILTERED_FRIENDS]),
		async search() {
			if (!this.userId) return

			this.loading = true

			try {
				const { user: person, friends } = await this.$http.getFriends(this.userId)

				this.$store.dispatch('addPerson', { person, friends })
			} catch (error) {
				console.error(error)
			} finally {
				this.loading = false
				this.userId = ''
				this.focus()
			}
		},
		focus() {
			this.$nextTick(() => {
				this.$refs.userId.focus()
			})
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>