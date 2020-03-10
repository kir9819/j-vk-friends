<template>
	<div class="wall-item">
		<div class="wall-item-text">{{ item.text }}</div>

		<div v-if="availableAttachmentsText" class="wall-item-warning color-danger">{{ availableAttachmentsText }}</div>

		<div
			v-for="(attachment, i) in availableAttachments"
			:key="i"
			class="wall-item-attachments"
		>
			<Component :is="attachment.wallItemType" :[attachment.type]="attachment[attachment.type]"/>
		</div>

		<div v-if="item.copy_history" class="wall-item-history">
			<WallItemTemplate :item="item.copy_history[0]"/>
		</div>

		<slot/>
	</div>
</template>

<script>
import Photo from './wall-items/Photo'
import WallItemTemplate from './WallItemTemplate' // eslint-disable-line

const availableAttachmentTypes = ['photo']

export default {
	name: 'WallItemTemplate',
	components: {
		PhotoItem: Photo,
		WallItemTemplate,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	computed: {
		availableAttachmentsText() {
			const { attachments } = this.item

			const attachmentLength = attachments ? attachments.length : 0
			const availableAttachmentsLength = this.availableAttachments.length

			if (attachmentLength === 0 || attachmentLength === availableAttachmentsLength) return ''
			if (this.availableAttachments.length === 0) return 'Вложения пока недоступны'

			return 'Не все вложения пока доступны'
		},
		availableAttachments() {
			if (!this.item.attachments) return []

			return this.item.attachments.filter(attachment => {
				const { type } = attachment

				if (availableAttachmentTypes.includes(type)) {
					attachment.wallItemType = `${type[0].toUpperCase()}${type.substr(1)}Item`
					return true
				}

				return false
			})
		},
	},
}
</script>

<style lang="scss">
.wall-item {
	padding: 16px 12px;
	background-color: white;
	color: #333;
	border-radius: 8px;
	box-sizing: border-box;

	&-text {
		white-space: pre-wrap;
		text-align: left;
		overflow-wrap: break-word;
	}

	&-warning {
		padding: 8px 0;
	}

	&-attachments {
		padding: 8px 0;
	}

	&-history {
		margin-left: 4px;
		padding-left: 4px;
		border-left: 1px solid;
	}
}
</style>