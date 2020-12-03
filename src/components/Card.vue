<template>
	<div>
		<transition-group name="fade">
			<v-card
					class="mx-auto my-12"
					max-width="374"
					v-for="(listing, tIndex) in list"
					:key="tIndex"
			>
				<v-card-title>
					{{ listing.licensePlate }}
				</v-card-title>
				<v-card-subtitle>
					{{ listing.model }}
				</v-card-subtitle>
				<v-card-text>
					<p>{{ listing.nextService }}</p>
				</v-card-text>
				<v-card-text>
					<p>{{ listing.lastService }}</p>
				</v-card-text>
				<v-card-actions>
					<v-btn
							text
							color="teal accent-4"
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
						<v-card-actions class="pt-0">
							<v-btn
									text
									color="teal accent-4"
									@click="reveal = []"
							>
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-expand-transition>

				<v-col cols="2">
					<v-btn icon color="gray" @click="openEditingModal(listing)">
						<v-icon>mdi-clipboard-edit-outline</v-icon>
					</v-btn>
					<v-btn icon color="red" @click="deleteListing(listing.id)">
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</v-col>
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
			modalData: {}
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
		list: db.collection("list"),
	}
}
</script>

<style scoped>

</style>