<template>
	<div id="app">
		<div v-if="error" style="background-color: salmon;">{{ error }}</div>
		<div id="nav">
			<p>
				<router-link :to="{ name: 'Home' }">Home</router-link>
			</p>
		</div>
		<router-view/>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['error']),
	},
	methods: {
		async login() {
			VK.Auth.login() // eslint-disable-line
		},
	},
}
</script>

<style lang="scss">
body {
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button, input {
	padding: 4px 8px;
	background-color: white;
	border: 1px solid;
}

button {
	&:not(:disabled) {
		cursor: pointer;
	}

	&:disabled {
		color: darkgray;
	}
}
</style>