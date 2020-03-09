<template>
	<WallItemTemplate :item="item">
		<div>
			<a
				:href="`//vk.com/wall${item.from_id}_${item.id}`"
				target="_blank"
			>Перейти к записи</a>
		</div>
	</WallItemTemplate>
</template>

<script>
import WallItemTemplate from './WallItemTemplate'

export default {
	components: {
		WallItemTemplate,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>