<template>
	<v-app>
		<v-app-bar
				app
				color="primary"
				dark
		>
			<v-col cols="10">
				<h1>Vantracker</h1>
			</v-col>
			<v-col cols="2">
				<v-icon @click="logout">mdi-login</v-icon>
			</v-col>
		</v-app-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import firebase from "firebase";

export default {
	name: 'App',
	computed: {
		// map `this.user` to `this.$store.getters.user`
		...mapGetters({
			user: "user"
		})
	},
	methods: {
		logout() {
			firebase
					.auth()
					.signOut()
		}
	}
};
</script>
