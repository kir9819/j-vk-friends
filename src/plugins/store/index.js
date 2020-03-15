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
	SET_ERROR: 'SET_ERROR',
	SET_AUTH: 'SET_AUTH',
}

export const VK_API_ERRORS = {
	1: 'Произошла неизвестная ошибка.',
	2: 'Приложение выключено.',
	3: 'Передан неизвестный метод.',
	4: 'Неверная подпись.',
	5: 'Авторизация пользователя не удалась.',
	6: 'Слишком много запросов в секунду.',
	7: 'Нет прав для выполнения этого действия.',
	8: 'Неверный запрос.',
	9: 'Слишком много однотипных действий.',
	10: 'Произошла внутренняя ошибка сервера.',
	11: 'В тестовом режиме приложение должно быть выключено или пользователь должен быть залогинен.',
	14: 'Требуется ввод кода с картинки (Captcha).',
	15: 'Доступ запрещён.',
	16: 'Требуется выполнение запросов по протоколу HTTPS, т.к. пользователь включил настройку, требующую работу через безопасное соединение.',
	17: 'Требуется валидация пользователя.',
	18: 'Страница удалена или заблокирована.',
	20: 'Данное действие запрещено для не Standalone приложений.',
	21: 'Данное действие разрешено только для Standalone и Open API приложений.',
	23: 'Метод был выключен.',
	24: 'Требуется подтверждение со стороны пользователя.',
	27: 'Ключ доступа сообщества недействителен.',
	28: 'Ключ доступа приложения недействителен.',
	29: 'Достигнут количественный лимит на вызов метода',
	30: 'Профиль является приватным',
	33: 'Not implemented yet',
	100: 'Один из необходимых параметров был не передан или неверен.',
	101: 'Неверный API ID приложения.',
	113: 'Неверный идентификатор пользователя.',
	150: 'Неверный timestamp.',
	200: 'Доступ к альбому запрещён.',
	201: 'Доступ к аудио запрещён.',
	203: 'Доступ к группе запрещён.',
	300: 'Альбом переполнен.',
	500: 'Действие запрещено. Вы должны включить переводы голосов в настройках приложения.',
	600: 'Нет прав на выполнение данных операций с рекламным кабинетом.',
	603: 'Произошла ошибка при работе с рекламным кабинетом.',
	3300: 'Recaptcha needed',
	3301: 'Phone validation needed',
	3302: 'Password validation needed',
	3303: 'Otp app validation needed',
	3304: 'Email confirmation needed',
	3305: 'Assert votes',
}

const store = new Vuex.Store({
	state: {
		persons: {},
		friends: {},
		friendsWithPersons: [],
		filteredPersons: [],
		chosenPersons: [],
		error: null,
		isAuthorized: false,
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

			state.filteredPersons = state.chosenPersons
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
		[mutationTypes.SET_ERROR](state, error) {
			if (!error) state.error = ''
			else if (error && typeof error !== 'object') state.error = error
			else if (error.message) state.error = error.message
			else if (error.error_code) state.error = VK_API_ERRORS[error.error_code]
			else state.error = error
		},
		[mutationTypes.SET_AUTH](state, status) {
			state.isAuthorized = status
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
})

export default store