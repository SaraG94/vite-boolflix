<script>
import axios from 'axios';
import store from '../store'

  export default{
    data(){
      return{
        store
      }
    },
    computed:{
      apiKey(){
        return this.store.apiKey
      },
      apiFilm(){
        return this.store.apiFilm
      }
    },
    methods:{
      callFilm(){
        const search=this.store.search
        const myApiFilm= this.apiFilm + this.apiKey

        axios
          
          .get(myApiFilm)
          .then((res)=>{
            console.log(res);
            console.log(res.data);
          })
      },
      searchFilm(){
        console.log('cerca film');
        this.callFilm()
      }
    }
  }
</script>

<template>
  <header>
    <div class="container">
      <h1>BoolFlix</h1>

      <div class="search-bar">
        <input
          class="search"
          type="text" 
          placeholder="Nome film"
        >
        <button class="search" @click="searchFilm()">Cerca</button>
      </div>
    </div>
  </header> 
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

header{
  background-color: rgb(75, 67, 67);

  h1{
    color: $text-color;
    text-transform: uppercase;
  }
}

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.search{
  padding: 5px;
  font-size: 15px;
}

</style>