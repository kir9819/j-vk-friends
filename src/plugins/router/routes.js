export default [
	{
		name: 'Home',
		path: '/',
		component: () => import('Pages/Home'),
		meta: {
			title: 'Home',
		},
	},
	{
		name: 'Person',
		path: '/person/:id',
		component: () => import('Pages/Person'),
		meta: {
			title: 'Person',
		},
		props: true,
	},
	{
		name: 'Friend',
		path: '/friend/:id',
		component: () => import('Pages/Friend'),
		meta: {
			title: 'Friend',
		},
		props: true,
	},
]