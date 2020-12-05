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
};
</script>