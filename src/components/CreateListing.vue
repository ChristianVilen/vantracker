<template>
	<v-col cols="6">
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header>
					<h2>Lisää Auto</h2>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<form>
						<v-text-field
								v-model="formData.licensePlate"
								label="Rekkari"
								required
						></v-text-field>
						<v-text-field
								v-model="formData.model"
								label="Merkki & Malli"
								required
						></v-text-field>
						<v-text-field
								v-model="formData.lastService"
								label="Edellinen Huolto"
								required
						></v-text-field>
						<v-text-field
								v-model="formData.nextService"
								label="Seuraava Huolto"
								required
						></v-text-field>
						<v-checkbox
								v-model="formData.webasto"
								label="Webasto"
								required
						></v-checkbox>
						<v-checkbox
								v-model="formData.heater"
								label="Tavaratila lämmitin"
								required
						></v-checkbox>
						<v-textarea v-model="formData.description" label="Lisätietoja"></v-textarea>

						<v-btn class="mr-4" color="primary" @click="addListing">
							submit
						</v-btn>
						<v-btn>
							clear
						</v-btn>
					</form>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-col>
</template>

<script>
import {db} from "@/firebase/db";

export default {
	name: "CreateListing",
	data() {
		return {
			formData: {
				licensePlate: '',
				model: '',
				lastService: null,
				nextService: null,
				webasto: false,
				heater: false,
				description: ''
			}
		}
	},
	methods: {
		async addListing() {
			if (this.formData) {
				await db.collection("list").add({
					licensePlate: this.formData.licensePlate,
					model: this.formData.model,
					lastService: this.formData.lastService,
					nextService: this.formData.nextService,
					webasto: this.formData.webasto,
					heater: this.formData.heater,
					description: this.formData.description
				});
				this.formData = '';
			}
		},
	}
}
</script>

<style scoped>

</style>