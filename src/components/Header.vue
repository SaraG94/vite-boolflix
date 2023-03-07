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
      },
      films(){
        return this.store.films
      }
    },
    methods:{
      callFilm(){
        const search=this.store.search
        const myApiFilm= this.apiFilm + this.apiKey

        axios
          .get(myApiFilm,{
            params:{
              query:store.search
            }
          })
          .then((res)=>{
            console.log(res.data.results);
            console.log(store.search)
            this.store.films = res.data.results
            console.log(this.store.films)
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
          v-model="store.search" 
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