<template>
	<div id="background" @click="closeModal">
		<div class="card">
			<v-form>
				<v-container>
					<v-row>
						<v-col
								cols="12"
								md="12"
						>
							<v-text-field
									v-model="modalData.licensePlate"
									label="Rekkari"
							></v-text-field>
						</v-col>
					</v-row>

					<v-row>
						<v-col
								cols="12"
								md="12"
						>
							<v-text-field
									v-model="modalData.model"
									label="Malli"
							></v-text-field>
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="12">Huollot</v-col>
					</v-row>

					<v-row>
						<v-col
								cols="6"
								sm="6"
								md="4"
						>
							<v-menu
									ref="menu"
									v-model="menu"
									:close-on-content-click="false"
									:return-value.sync="modalData.nextService"
									transition="scale-transition"
									offset-y
									min-width="290px"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
											v-model="modalData.nextService"
											label="Seuraava"
											prepend-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
										v-model="modalData.nextService"
										no-title
										scrollable
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
											@click="$refs.menu.save(modalData.nextService)"
									>
										OK
									</v-btn>
								</v-date-picker>
							</v-menu>
						</v-col>
						<v-spacer></v-spacer>
						<v-col
								cols="6"
								sm="6"
								md="4"
						>
							<v-menu
									ref="menu2"
									v-model="menu2"
									:close-on-content-click="false"
									:return-value.sync="modalData.lastService"
									transition="scale-transition"
									offset-y
									min-width="290px"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
											v-model="modalData.lastService"
											label="Edellinen"
											prepend-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
										v-model="modalData.lastService"
										no-title
										scrollable
								>
									<v-spacer></v-spacer>
									<v-btn
											text
											color="primary"
											@click="menu2 = false"
									>
										Cancel
									</v-btn>
									<v-btn
											text
											color="primary"
											@click="$refs.menu2.save(modalData.lastService)"
									>
										OK
									</v-btn>
								</v-date-picker>
							</v-menu>
						</v-col>
					</v-row>

					<v-col
							cols="6"
							md="6"
					>
						<v-checkbox
								v-model="modalData.webasto"
								label="Webasto"
						></v-checkbox>
					</v-col>
					<v-col
							cols="6"
							md="6"
					>
						<v-checkbox
								v-model="modalData.heater"
								label="Lämmitin"
						></v-checkbox>
					</v-col>
					<v-col
							cols="12"
							md="12"
					>
						<v-text-field
								v-model="modalData.description"
								label="Kuvaus"
						></v-text-field>
					</v-col>

					<v-row>
						<v-col cols="6" class="btn-holder">
							<v-btn
									depressed
									color="primary"
									@click="updateListing"
							>
								Päivitä
							</v-btn>
						</v-col>

						<v-col cols="6" class="btn-holder">
							<v-btn
									depressed
									color="secondary"
									@click="closeModalButton()"
							>
								Sulje
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</div>
	</div>
</template>

<script>
import {db} from "@/firebase/db";

export default {
	name: "EditingModal",
	props: ['data'],
	data() {
		return {
			menu: false,
			menu2: false,
			modal: false,
			modalData: this.data
		}
	},
	methods: {
		closeModal(element) {
			if (element.path[0].id === 'background') {
				this.$emit('close')
			}
		},
		closeModalButton() {
			this.$emit('close')
		},
		async updateListing() {
			if (this.modalData) {
				await db.collection("list").doc(this.modalData.id).set({
					licensePlate: this.modalData.licensePlate,
					model: this.modalData.model,
					lastService: this.modalData.lastService,
					nextService: this.modalData.nextService,
					webasto: this.modalData.webasto,
					heater: this.modalData.heater,
					description: this.modalData.description
				});
				this.modalData = '';
			}
		},
	}
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_colors.scss";

#background {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 98;
}

.card {
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	border-radius: 20px;
	background: $color-white;
	box-shadow: 29px 29px 59px #9c9c9c,
	-29px -29px 59px #ffffff;
}

.btn-holder {

}

@media (max-width: 768px) {
	@media (max-width: 768px) {
		.card {
			width: 80%;
			margin: 0 auto;
			padding: 10px;
			border-radius: 20px;
			background: $color-white;
			box-shadow: 29px 29px 59px #9c9c9c,
			-29px -29px 59px #ffffff;
		}
	}
}
</style>