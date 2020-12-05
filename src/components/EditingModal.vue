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
									v-model="data.licensePlate"
									label="Rekkari"
							></v-text-field>
						</v-col>

						<v-col
								cols="12"
								md="12"
						>
							<v-text-field
									v-model="data.model"
									label="Malli"
							></v-text-field>
						</v-col>

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
										ref="menu"
										v-model="menu"
										:close-on-content-click="false"
										:return-value.sync="data.nextService"
										transition="scale-transition"
										offset-y
										min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
												v-model="data.nextService"
												label="Seuraava"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
											v-model="data.nextService"
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
												@click="$refs.menu.save(data.nextService)"
										>
											OK
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
										ref="menu2"
										v-model="menu2"
										:close-on-content-click="false"
										:return-value.sync="data.lastService"
										transition="scale-transition"
										offset-y
										min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
												v-model="data.lastService"
												label="Edellinen"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
											v-model="data.lastService"
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
												@click="$refs.menu2.save(data.lastService)"
										>
											OK
										</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
						</v-row>

						<v-col>
							<v-checkbox
									v-model="data.webasto"
									label="Webasto"
							></v-checkbox>
						</v-col>
						<v-col
								cols="6"
								md="6"
						>
							<v-checkbox
									v-model="data.heater"
									label="Lämmitin"
							></v-checkbox>
						</v-col>
						<v-col
								cols="12"
								md="12"
						>
							<v-text-field
									v-model="data.description"
									label="Kuvaus"
							></v-text-field>
						</v-col>
						<v-col
								cols="12"
								md="12"
						>
							Sulje
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "EditingModal",
	props: ['data'],
	data() {
		return {
			menu: false,
			menu2: false,
			modal: false,
		}
	},
	methods: {
		closeModal(element) {
			if (element.path[0].id === 'background') {
				this.$emit('close')
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