<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field
          label="New listing"
          outlined
          v-model="newListing"
          @keyup.enter.prevent="addListing"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn large color="primary" @click.prevent="addListing">Add</v-btn>
      </v-col>
    </v-row>
    <transition-group name="fade">
      <v-card
        class="mx-auto pa-3 ma-2 text-center"
        max-width="400"
        v-for="listing in list"
        :key="listing.id"
      >
        <v-row>
          <v-col cols="8">
            <v-list-item-title class="headline mb-1">
              {{ listing.plate }}
            </v-list-item-title>
            <v-list-item-subtitle class="headline mb-1">
              {{ listing.name }}
            </v-list-item-subtitle>
          </v-col>
          <v-col cols="2">
            <v-btn icon color="gray" @click="editListing(listing.id)">
              <v-icon>mdi-clipboard-edit-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon color="red" @click="deleteListing(listing.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition-group>
  </div>
</template>

<script>
import { db } from "../firebase/db";
export default {
  name: "VanList",
  data() {
    return {
      list: [],
      newListing: "",
    };
  },
  methods: {
    async addListing() {
      if (this.newListing) {
        await db.collection("list").add({ name: this.newListing });
        this.newListing = "";
      }
    },
    deleteListing(id) {
      db.collection("list")
        .doc(id)
        .delete();
    },
  },
  firestore: {
    list: db.collection("list"),
  },
};
</script>

<style></style>
