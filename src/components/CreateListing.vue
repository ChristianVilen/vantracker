<template>
	<v-col cols="12">
		<v-expansion-panels>
			<v-expansion-panel>
				<v-row>
					<v-col cols="12">
						<v-expansion-panel-header>
							<h2>Lisää Auto</h2>
						</v-expansion-panel-header>
					</v-col>
				</v-row>
				<v-expansion-panel-content>
					<form>

						<v-row>
							<v-col cols="12">
								<v-text-field
										v-model="formData.licensePlate"
										label="Rekkari"
										required
										solo
										dense
								></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field
										v-model="formData.model"
										label="Merkki & Malli"
										required
										solo
										dense
								></v-text-field>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12">Huollot</v-col>
						</v-row>

						<v-row>
							<v-col
									cols="12"
									sm="6"
									md="4"
							>
								<v-menu
										ref="menu2"
										v-model="menu2"
										:close-on-content-click="false"
										:return-value.sync="formData.lastService"
										transition="scale-transition"
										offset-y
										min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
												v-model="formData.lastService"
												label="Edellinen"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
											v-model="formData.lastService"
											no-title
											scrollable
											locale="fi-FI"
									>
										<v-spacer></v-spacer>
										<v-btn
												text
												color="primary"
												@click="menu2 = false"
										>
											Peruuta
										</v-btn>
										<v-btn
												text
												color="primary"
												@click="$refs.menu2.save(formData.lastService)"
										>
											Aseta
										</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
							<v-spacer></v-spacer>
							<v-col
									cols="12"
									sm="6"
									md="4"
							>
								<v-menu
										ref="menu"
										v-model="menu"
										:close-on-content-click="false"
										:return-value.sync="formData.nextService"
										transition="scale-transition"
										offset-y
										min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
												v-model="formData.nextService"
												label="Seuraava"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
											v-model="formData.nextService"
											no-title
											scrollable
											locale="fi-FI"
									>
										<v-spacer></v-spacer>
										<v-btn
												text
												color="primary"
												@click="menu = false"
										>
											Cancel
										</v-btn>
										<v-btn
												text
												color="primary"
												@click="$refs.menu.save(formData.nextService)"
										>
											OK
										</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="6">
								<v-checkbox
										v-model="formData.webasto"
										label="Webasto"
										required
								></v-checkbox>
							</v-col>
							<v-col cols="6">
								<v-checkbox
										v-model="formData.heater"
										label="Tavaratila lämmitin"
										required
								></v-checkbox>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" md="12">
								<v-textarea v-model="formData.description" label="Lisätietoja" solo></v-textarea>
							</v-col>
						</v-row>

						<v-btn class="mr-4" color="primary" @click="addListing">
							Lisää
						</v-btn>
						<v-btn>
							Tyhjennä
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
				lastService: new Date().toISOString().substr(0, 10),
				nextService: new Date().toISOString().substr(0, 10),
				webasto: false,
				heater: false,
				description: '',
			},
			menu: false,
			menu2: false,
			modal: false,
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

<style lang="scss" scoped>

</style>