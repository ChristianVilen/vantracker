<template>
	<div id="background" @click="closeModal">
		<div class="card">
			<v-card
					class="mx-auto my-12"
					max-width="374"
			>
				<v-card-text>
					<textarea placeholder="Rekkari" v-model="data.licensePlate"></textarea>
				</v-card-text>
				<v-card-text>
					<textarea placeholder="Malli" v-model="data.model"></textarea>
				</v-card-text>
				<v-card-text>
					<textarea placeholder="Huolto" v-model="data.lastService"></textarea>
				</v-card-text>
				<v-card-text>
					<textarea placeholder="huolto" v-model="data.nextService"></textarea>
				</v-card-text>
				<v-card-text>
					<textarea placeholder="kuvaus" rows="6" v-model="data.description"></textarea>
				</v-card-text>
				<button @click="saveData()">Tallenna</button>
				<button @click="closeModal">Sulje</button>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "EditingModal",
	props: ['data'],

	methods: {
		closeModal(element) {
			if (element.path[0].id === 'background') {
				this.$emit('close')
			}
		},
		saveData() {

		},
		showData() {
			console.log(this.data)
		}
	}
}
</script>

<style scoped>
#background {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(1, 31, 94, 0.36);
	z-index: 98;
}

.card {
	width: 50%;
	margin: 0 auto;
	padding: 20px;
}

input, textarea {
	border: 1px solid #666;
	border-radius: 10px;
	padding: 8px;
	width: 80%;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-right: auto;
	margin-left: auto;
}
</style>