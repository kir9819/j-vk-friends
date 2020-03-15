<template>
	<div id="app">
		<div v-if="error" class="error-message">
			<span>{{ error }}</span>
			<div class="cancel-button white" @click="cancelError"/>
		</div>
		<div id="nav">
			<p>
				<router-link :to="{ name: 'Home' }">Home</router-link>
			</p>
			<button v-if="!isAuthorized" @click="login">Войти через ВК</button>
		</div>

		<router-view v-if="isAuthorized"/>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mutationTypes } from 'Plugins/store'

export default {
	computed: {
		...mapState(['error', 'isAuthorized']),
	},
	methods: {
		...mapMutations([
			mutationTypes.SET_ERROR,
			mutationTypes.SET_AUTH,
		]),
		async login() {
			this[mutationTypes.SET_AUTH](await this.$http.login())
		},
		cancelError() {
			this[mutationTypes.SET_ERROR]()
		},
	},
}
</script>

<style lang="scss">
body {
	margin: 0;

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		.frequency {
			&-1 {
				background-color: #BBDEFB;
				color: #333;
			}
			&-2 {
				background-color: #90CAF9;
				color: #333;
			}
			&-3 {
				background-color: #64B5F6;
				color: white;
			}
			&-4 {
				background-color: #42A5F5;
				color: white;
			}
			&-5 {
				background-color: #2196F3;
				color: white;
			}
			&-6 {
				background-color: #1E88E5;
				color: white;
			}
			&-7 {
				background-color: #1976D2;
				color: white;
			}
		}
	}
}

#nav {
	padding: 12px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

button, input {
	padding: 8px 12px;
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

.cancel-button {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	cursor: pointer;
	position: relative;
	box-sizing: border-box;

	&::before, &::after {
		content: '';
		position: absolute;
		height: 14px;
		width: 1px;
		top: 2px;
		left: 9px;
		background-color: gray;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(135deg);
	}

	&:hover {
		&::before, &::after {
			background-color: black;
		}
	}

	&.white {
		&:hover {
			background-color: lightgray;
		}

		&::before, &::after {
			background-color: white;
		}
	}
}

.d-flex {
	display: flex !important;
}

.color {
	&-danger {
		color: #b71c1c !important;
	}
}

.error-message {
	background-color: salmon;
	color: white;
	padding: 4px 12px;
	display: flex;
	justify-content: space-between;
}
</style>