import store, { mutationTypes } from 'Plugins/store'

const API_VERSON = '5.89'

function getVKInstanse() {
	if (!window.VK) throw Error
	return window.VK
}

const VK = getVKInstanse()

function getAuthStatus() {
	const isAuthorized = VK._userStatus === 'connected' // eslint-disable-line

	if (!isAuthorized) store.commit(mutationTypes.SET_AUTH, false)

	return isAuthorized
	/* return new Promise(resolve => {
		VK.Auth.getLoginStatus(response => {
			resolve(response.status === 'connected')
		})
	}) */
}

if (getAuthStatus()) store.commit(mutationTypes.SET_AUTH, true)

async function VKApiRequest(...options) {
	options[1].v = API_VERSON

	if (!getAuthStatus()) throw new Error('Требуется вход')

	return new Promise((resolve, reject) => {
		VK.Api.call(...options, r => {
			if (r.response) resolve(r.response)
			reject(r.error)
		})
	})
}

async function getUser(id) {
	const response = await VKApiRequest('users.get', {
		user_id: id,
		fields: 'id,first_name,last_name,is_closed,sex,bdate,photo_100',
	})

	if (response[0].is_closed) {
		response[0].error = 'Профиль закрыт, друзья недоступны'
	}

	return response[0]
}

async function getFriends(id) {
	return (await VKApiRequest('friends.get', {
		user_id: id,
		fields: 'nickname',
	})).items
}

async function getWall(userId) {
	return (await VKApiRequest('wall.get', {
		owner_id: userId,
	})).items
}

async function login() {
	return new Promise(resolve => {
		VK.Auth.login(response => {
			resolve(!!response.session)
		})
	})
}

export const http = {
	async getFriends(userId) {
		const user = await getUser(userId)

		if (user.error) return { user, friends: [] }

		const friends = await getFriends(userId)

		return { user, friends }
	},
	getWall,
	getAuthStatus,
	login,
}

// export as vue plugin
export default {
	install(Vue) {
		Vue.prototype.$http = http
	},
}