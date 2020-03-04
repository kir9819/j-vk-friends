<template>
	<div class="home">
		<div id="vk_api_transport"/>
		<GetUser/>
		<div style="display: flex; justify-content: space-around;">
			<Persons style="flex-shrink: 0;"/>
			<Friends/>
		</div>
	</div>
</template>

<script>
import GetUser from 'Components/GetUser'
import Persons from 'Components/Persons'
import Friends from 'Components/Friends'

export default {
	name: 'Home',
	components: {
		GetUser,
		Persons,
		Friends,
	},
}
</script>