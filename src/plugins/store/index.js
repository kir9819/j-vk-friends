import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutationTypes = {
	SET_FRIENDS: 'SET_FRIENDS',
	SET_FILTERED_FRIENDS: 'SET_FILTERED_FRIENDS',
	SET_PERSON: 'SET_PERSON',
	REMOVE_FRIENDS: 'REMOVE_FRIENDS',
	REMOVE_PERSON: 'REMOVE_PERSON',
	CHANGE_CHOSEN_PERSONS: 'CHANGE_CHOSEN_PERSONS',
}

const store = new Vuex.Store({
	state: {
		persons: {},
		friends: {},
		friendsWithPersons: [],
		chosenPersons: [],
		error: null,
	},
	mutations: {
		[mutationTypes.SET_PERSON](state, { person, friendIds }) {
			if (state.persons[person.id]) return

			person.friendIds = friendIds
			person.friendsCount = friendIds.length
			state.persons = { ...state.persons, [person.id]: person }
		},
		[mutationTypes.SET_FRIENDS](state, friends) {
			const friendsAsObject = friends.reduce((obj, friend) => {
				obj[friend.id] = friend
				return obj
			}, {})

			state.friends = {
				...state.friends,
				...friendsAsObject,
			}
		},
		[mutationTypes.SET_FILTERED_FRIENDS](state) {
			const { chosenPersons, persons } = state

			state.friendsWithPersons = []

			chosenPersons.forEach(personId => {
				persons[personId].friendIds.forEach(friendId => {
					const stateFriend = state.friendsWithPersons.find(friendWithCount => friendWithCount.id === friendId)

					if (stateFriend) {
						stateFriend.persons.push(personId)
					} else {
						state.friendsWithPersons.push({ id: friendId, persons: [personId] })
					}
				})
			})
		},
		[mutationTypes.REMOVE_FRIENDS](state, personId) {
			const friendsWithPersons = []

			state.friendsWithPersons.forEach(friend => {
				const personIndex = friend.persons.indexOf(personId)

				if (personIndex !== -1) {
					if (friend.persons.length === 1) return
					friend.persons.splice(personIndex, 1)
				}

				friendsWithPersons.push(friend)
			})

			state.friendsWithPersons = friendsWithPersons
		},
		[mutationTypes.REMOVE_PERSON](state, id) {
			const { [id]: deleted, ...persons } = state.persons

			const chosenFriendIndex = state.chosenPersons.indexOf(id)

			if (chosenFriendIndex !== -1) state.chosenPersons.splice(chosenFriendIndex, 1)

			state.persons = persons
		},
		[mutationTypes.CHANGE_CHOSEN_PERSONS](state, chosenPersons) {
			state.chosenPersons = chosenPersons
		},
	},
	actions: {
		removePerson({ commit }, id) {
			commit(mutationTypes.REMOVE_PERSON, id)
			commit(mutationTypes.REMOVE_FRIENDS, id)
		},
		addPerson({ state, commit }, { person, friends }) {
			if (state.persons[person.id]) throw new Error('Пользователь уже добавлен')

			commit(mutationTypes.SET_PERSON, { person, friendIds: friends.map(friend => friend.id) })
			commit(mutationTypes.SET_FRIENDS, friends)
		},
	},
	modules: {
	},
})

export default store