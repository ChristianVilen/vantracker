<template>
	<div class="pt-3">
		<v-row class="d-flex justify-center">
			<CreateListing/>
		</v-row>
		<Card/>
	</div>
</template>

<script>
import CreateListing from "@/components/CreateListing";
import Card from "@/components/Card";

export default {
	name: "VanList",
	components: {Card, CreateListing},
	data() {
		return {
			list: [],
			newListing: "",
		};
	},
};
</script>

<style>
.v-card--reveal {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
}
</style>
