<template>
	<div class="pt-3">
		<v-row v-if="this.$store.state.user.data === null">
			<Login/>
		</v-row>
		<v-row v-else class="d-flex justify-center">
			<v-col cols="12">
				<CreateListing/>
			</v-col>
			<v-col cols="12">
				<Card/>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CreateListing from "@/components/CreateListing";
import Card from "@/components/Card";
import Login from "@/components/Login";

export default {
	name: "VanList",
	components: {Login, Card, CreateListing},
};
</script>