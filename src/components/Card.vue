<template>
	<div>
		<transition-group name="fade">
			<v-card
					class="mx-auto my-12"
					width="300"
					max-width="374"
					v-for="(listing, tIndex) in list"
					:key="tIndex"
			>
				<v-card-title class="justify-center">
					{{ listing.licensePlate }}
				</v-card-title>
				<v-card-subtitle class="text-center">
					{{ listing.model }}
				</v-card-subtitle>

				<v-card-text class="text-center">
					<v-row>
						<v-col cols="6" style="font-size: 15px">
							<v-col cols="12">
								<v-btn
										text
										icon
										color="blue lighten-2"
								>webasto
									<v-icon>
										{{ listing.webasto ? 'mdi-checkbox-marked-circle-outline' : 'mdi-checkbox-blank-circle-outline' }}
									</v-icon>
								</v-btn>
							</v-col>
							<v-col cols="12">
								<v-btn
										text
										icon
										color="orange lighten-2"
								>lämmitin
									<v-icon>
										{{ listing.heater ? 'mdi-checkbox-marked-circle-outline' : 'mdi-checkbox-blank-circle-outline' }}
									</v-icon>
								</v-btn>
							</v-col>
						</v-col>


						<v-col cols="6" style="font-size: 15px">
							<v-col cols="12">
								<b>{{ listing.nextService }}</b> Edellinen huolto
							</v-col>
							<v-col cols="12">
								<b>{{ listing.lastService }}</b> Seuraava huolto
							</v-col>
						</v-col>
					</v-row>
				</v-card-text>


				<v-card-actions class="justify-center">
					<v-btn
							text
							color="blue-grey darken-1"
							@click="revealIndex(tIndex)"
					>
						Lisätietoja
					</v-btn>
				</v-card-actions>
				<v-expand-transition>
					<v-card
							v-if="reveal.includes(tIndex)"
							class="transition-fast-in-fast-out v-card--reveal"
							style="height: 100%;"
					>
						<v-card-text class="pb-0">
							<p>{{ listing.description }}</p>
						</v-card-text>
						<v-card-actions class="pt-0 justify-center">
							<v-btn
									text
									color="blue-grey darken-1"
									@click="reveal = []"
							>
								Sulje
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-expand-transition>

				<v-card-actions class="justify-center">
					<v-btn
							@click="openEditingModal(listing)"
							text
							color="blue"
					>
						Muokkaa
					</v-btn>
				</v-card-actions>

				<v-card-actions class="text-center">
					<v-col cols="12">
						<v-btn icon color="red" @click="deleteListing(listing.id)">
							<v-icon>mdi-delete</v-icon>
						</v-btn>
					</v-col>
				</v-card-actions>
			</v-card>
		</transition-group>
		<EditingModal :data="modalData" v-if="open" @close="open = false"/>
	</div>
</template>

<script>
import {db} from "@/firebase/db";
import EditingModal from "./EditingModal";

export default {
	name: "Card",
	props: ['listing'],
	components: {EditingModal},
	data() {
		return {
			list: '',
			reveal: [],
			isEditing: false,
			open: false,
			modalData: {},
		}
	},
	methods: {
		deleteListing(id) {
			db.collection("list")
					.doc(id)
					.delete();
		},
		revealIndex(itemIndex) {
			this.reveal.push(itemIndex)
		},
		openEditingModal(data) {
			this.open = true
			this.modalData = data
		}
	},
	firestore: {
		list: db.collection("list").orderBy('nextService'),
	}
}
</script>

<style lang="scss" scoped>
.title {
	text-align: center;
}

.v-card--reveal {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
}

.v-card__text {
	padding-bottom: 0;
}
</style>