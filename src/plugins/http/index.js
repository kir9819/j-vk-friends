const API_VERSON = '5.89'

async function getUser(id) {
	return new Promise((resolve, reject) => {
		VK.Api.call('users.get', { // eslint-disable-line
			user_id: id, fields: 'id,first_name,last_name,is_closed,sex,bdate,photo_100', v: API_VERSON,
		}, r => {
			if (r.response) {
				const response = r.response[0]

				if (response.is_closed) {
					response.error = 'Профиль закрыт, друзья недоступны'
				}

				resolve(response)
			}

			reject(r.error)
		})
	})
}

async function getFriends(id) {
	return new Promise((resolve, reject) => {
		VK.Api.call('friends.get', { // eslint-disable-line
			user_id: id, fields: 'nickname', v: API_VERSON,
		}, r => {
			if (r.response) resolve(r.response.items)
			reject(r.error)
		})
	})
}

async function getWall(userId) {
	return new Promise((resolve, reject) => {
		VK.Api.call('wall.get', { // eslint-disable-line
			owner_id: userId, v: API_VERSON,
		}, r => {
			if (r.response) resolve(r.response.items)
			reject(r.error)
		})
	})
}

const http = {
	async getFriends(userId) {
		const user = await getUser(userId)

		if (user.error) return { user, friends: [] }

		const friends = await getFriends(userId)

		return { user, friends }
	},
	getWall,
}

// export as vue plugin
export default {
	install(Vue) {
		Vue.prototype.$http = http
	},
}