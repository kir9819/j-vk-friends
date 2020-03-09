<template>
	<div>
		<div style="white-space: pre-wrap;">{{ item.text }}</div>
		<div>
			<a
				:href="`//vk.com/wall${item.from_id}_${item.id}`"
				target="_blank"
			>Перейти к источнику</a>
		</div>
		<hr>
	</div>
</template>

<script>
export default {
	name: 'WallItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>