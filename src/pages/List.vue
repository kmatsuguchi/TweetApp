<template>
  <v-container>
    <v-card>
      <v-container>
        <v-textarea v-model="tweet" label="New tweet"></v-textarea>
        <v-layout justify-end>
          <v-btn @click="insertTweet">Tweet</v-btn>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="mt-4">
      <v-list three-line>
         <v-list-tile v-for="tweet in tweets" :key=tweet.index avatar>
           <v-list-tile-avatar>
             <img :src="tweet.avatar">
           </v-list-tile-avatar>

           <v-list-tile-content @click="detail" class="content">
             <v-list-tile-title v-html="tweet.username"></v-list-tile-title>
             <v-list-tile-sub-title v-html="tweet.content"></v-list-tile-sub-title>
           </v-list-tile-content>
         </v-list-tile>

     </v-list>
    </v-card>
  </v-container>
</template>
<style>
.content {
  cursor: pointer;
  cursor: hand;
}
</style>
<script>
  export default {
    data () {
      return {
        tweets: [
          {
            index: 1,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'Kanae',
            content: "TGIF"
          },
          {
            index: 2,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            username: 'Shun',
            content: "Happy weekend!"
          },
          {
            index: 3,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            username: 'Kate',
            content: "Who is Kate?"
          }
        ],
        tweet: ""
      }
    },
    methods: {
      insertTweet() {
        this.$router.push("/list")
      },
      detail() {
        this.$router.push("/detail")
      }
    }
  }
</script>
