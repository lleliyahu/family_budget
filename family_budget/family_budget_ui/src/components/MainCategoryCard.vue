<template>
      <div>
        <v-card class="mx-auto pa-4 text-center  rounded-t-xl" max-width="300" color="blue lighten-5">
          <v-img
            height="200px"
            v-bind:src=img
          >
            
          </v-img>

          <v-card-subtitle class="pb-0"
            >{{ text }} 
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>תיאור : {{ Description  }}</div>
            <div>תקציב : {{ amunt  }}</div>
            
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="pa-md-4 mx-lg-auto"
              
              @click="$router.push('/category1')"
              color="light-blue accent-4"
             
            >
              כניסה
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
</template>
  
  <script>
    export default {
      name: 'MainCategoryCard',
      props: {
               img: String,
               text: String,
               Description: String,
               amunt: Number
      },
      data: () => ({
        
      }),
    }
  </script>
  <style>


</style>
  