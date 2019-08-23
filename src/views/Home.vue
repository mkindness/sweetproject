<template>
  <v-container fluid>
    <Store />
    <v-layout row wrap align-center>
      <v-flex xs8 align-self-center offset-xs2 pa-2>
        <h2>Code Test Objectives:</h2>
        <h3>Vue.js Shopping Cart Test Project</h3>
        <ul>
          <li>Thanks for your interest in working at Company X! We're always excited to meet
            awesome people. We've created this test to help us understand your programming chops.
          </li>
        </ul>
        <h3>What you'll build</h3>
        <ul>
          <li>We'd like you to build a Shopping Cart application using Vue.js, Vuex, and ES6. We've
            provided a JSON file with item data, but you're responsible for building the Cart. Your
            shopping cart should:
            <ol>
              <li>Display the list of items in the cart along with their relevant information.</li>
              <li>Allow item quantities to be changed.</li>
              <li>Display the subtotal for all the items in the cart.</li>
            </ol>
          </li>
        </ul>
        <h3>How you'll build it</h3>
        <ul>
          <li>You can use any VCS platform you like — such as Gitlab or Github — as long as your
            project is publicly accessible.</li>
          <li>Build your shopping cart so we can test it in-browser.</li>
          <li>Write your application using Vue.js.</li>
          <li>Manage your data using a Vuex data store.</li>
          <li>Use the data provided in [items.json](items.json) to populate the cart. Don't make
            any changes to the data.</li>
          <li>It's OK to use a CSS framework (like Bootstrap). This isn't a CSS test. It doesn't
            have to be pretty.</li>
          <li>Don't use any other JavaScript libraries, such as jQuery.</li>
          <li>Once you're done, send us the link to your project so we can look it over.</li>
        </ul>
        <h3>Requirements</h3>
        <ul>
          <li>__Commit often.__ We want to see your progress throughout the project.</li>
          <li>__Work quickly.__ We will be looking at how far you get in the first hour as well as
            how long it takes you to arrive at a finished product. This project was designed to be
            completed quickly, so don't spend more than a few hours on it.</li>
          <li>__Write your own code.__ While we understand that there are NPM pakages out there
            that take care of common problems, we ultimately want to see what _YOU_ can build, not
            what
            someone else has built.</li>
          <li>__Do your best work.__ We're using this project as a viewport into who you are as a
            developer. Show us what you can do!</li>
        </ul>
        <h3>Bonus points</h3>
        <ul>
          <li>+10 points for making the data changes persistent. No... we're not going to give you
            any hints about how we want to see that done.</li>
          <li>+10 points if you include the functionality to remove items from the cart.</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Store from '@components/Store.vue';

  export default {
    components: {
      Store,
    },
  };

</script>
