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
        return this.store.config.API_KEY
      },
      apiUri(){
        return this.store.config.URI_BASE
      }
    },
    methods:{
      searchFilmSeries(){
        console.log('cerca film');
        this.callFilm()
        this.callSeries()
      },
      callFilm(){
        const myApiFilm= this.apiUri +'/search/movie'

        axios
          .get(myApiFilm,{
            params:{
              api_key:this.apiKey,
              query:store.search,
              languege:'it-IT'
            }
          })
          .then((res)=>{
            console.log(res.data.results,store.search);
            this.store.films = res.data.results
            console.log(this.store.films)
          }).catch(()=>{
            this.store.films = []
          })
      },
      callSeries(){
        const myApiSeries= this.apiUri +'/search/tv'

        axios
          .get(myApiSeries,{
            params:{
              api_key:this.apiKey,
              query:store.search,
              languege:'it-IT'
            }
          })
          .then((res)=>{
            console.log(res.data.results,store.search,'serieTV');
            this.store.series = res.data.results
            console.log(this.store.series)
          }).catch(()=>{
            this.store.series = []
          })
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
          placeholder="Nome film/serie"
          v-model="store.search" 
        >
        <button class="search" @click="searchFilmSeries()">Cerca</button>
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