<template>
  <v-container>
    <v-card>
      <v-container>
        <v-layout>
          <v-avatar>
            <img :src=tweet.avatar alt="John">
          </v-avatar>
          <v-layout align-center>
            <div class="ml-3">{{tweet.username}}</div>
          </v-layout>
        </v-layout>
        <v-container>
          <v-textarea v-if="editMode" v-model="tweet.content"></v-textarea>
          <p v-else>{{tweet.content}}</p>
        </v-container>
        <v-layout>
          <v-layout justify-start>
            <v-btn @click="back">Back</v-btn>
          </v-layout>
          <v-layout justify-end>
            <v-btn v-if="editMode" @click="updateTweet">Save</v-btn>
            <v-btn v-else @click="edit">Edit</v-btn>
          </v-layout>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      tweet:
        {
          index: 1,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          username: 'Kanae',
          content: "TGIF"
        },
      editMode: false
    }
  },
  methods:   {
    back() {
      this.$router.push("/list")
    },
    edit() {
      this.editMode = true
    },
    updateTweet() {
      this.editMode = false
    }
  }
}
</script>
