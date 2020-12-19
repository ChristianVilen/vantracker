<template>
	<v-container>
		<validation-observer
				ref="observer"
				v-slot="{ invalid }"
		>
			<v-form
					@submit.prevent="submit"
					class="login-holder"
			>
				<validation-provider
						v-slot="{ errors }"
						name="sähköposti"
						rules="required"
				>
					<v-text-field
							v-model="email"
							:error-messages="errors"
							label="Sähköposti"
							required
					></v-text-field>
				</validation-provider>
				<validation-provider
						v-slot="{ errors }"
						name="salasana"
						rules="required"
				>
					<v-text-field
							v-model="password"
							:error-messages="errors"
							label="Salasana"
							type="password"
							required
					></v-text-field>
				</validation-provider>
				<p>{{errorMsg}}</p>
				<v-btn
						class="mr-4"
						type="submit"
						color="success"
						:disabled="invalid"
						@click="login"
				>
					Kirjaudu
				</v-btn>
			</v-form>
		</validation-observer>
	</v-container>
</template>

<script>
import firebase from "firebase";

export default {
	name: "Login",
	data() {
		return {
			email: '',
			password: '',
			errorMsg: '',
		}
	},
	methods: {
		submit() {
			this.$refs.observer.validate()
		},
		login() {
			firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.catch(() => {
						this.errorMsg = 'Väärä sähköposti tai salasana'
					})
		},
	}
}
</script>

<style scoped>
.login-holder {
	padding: 15px;
	margin-top: 20vh;
}

p {
	color: red;
}
</style>