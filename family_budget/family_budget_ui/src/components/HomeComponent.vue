<template>
 <v-container>
    <v-row>
      <v-col v-for="category in categories" :key="category.id" class="text-right">
      <MainCategoryCard :img=category.img :amunt=category.amunt :Description=category.Description :text=category.text >dfgdgdfg</MainCategoryCard>
      </v-col>
    </v-row>
    <row>   
  </row>
  </v-container>
</template>


<script>
import MainCategoryCard from './MainCategoryCard.vue'
import axios from 'axios';
export default {
  components: { MainCategoryCard },
  data: () => ({
    categories: [],
  }),
  methods: {
    loading: function () {
      alert("hi hi hi hi hi hi ");
    },
  },
  mounted(){
    axios.get('http://localhost:3000/categoryes')
  .then((response) => {
    this.categories =response.data;

  });
  }
};




</script>

<style>
.title {
  text-align: center;
  text-decoration-color: white;
}

</style>