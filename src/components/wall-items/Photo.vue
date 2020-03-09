<template>
	<img
		:src="url"
		:alt="photo.text"
		style="max-width: 100%;"
	>
</template>

<script>
const PHOTO_SIZE = 'x'

export default {
	name: 'WallItemPhoto',
	props: {
		photo: {
			type: Object,
			required: true,
		},
	},
	computed: {
		url() {
			return this.photo.sizes.find(size => size.type === PHOTO_SIZE).url
		},
	},
}
</script>