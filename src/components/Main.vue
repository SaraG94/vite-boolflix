<script>
    import store from '../store'
    import CardsFilm from './CardsFilm.vue'
    import CardSerie from './CardSerie.vue'

    export default{
        components:{
            CardsFilm,
            CardSerie
        },
        data(){
            return{
            store,
            }
        },
        computed:{
            
            allFilms(){
                return this.store.films
            },
            allSeries(){
                return this.store.series
            }
        },
        methods:{
            flags(film){
                const country = 'https://flagcdn.com/16x12/'+ film.original_language + '.png'
                return country
            }
        }
    }
</script>

<template>
  <main>
    <div class="container">
        <section class="films">
            <h2 class="show">Film</h2>
            <ul class="album-films">

                <CardsFilm v-for="film in allFilms" :key="film.id" :film="film"></CardsFilm>

            </ul>  
        </section>

        <section class="tv">
            <h2 class="show">Serie TV</h2>
            <ul class="album-series">
                <CardSerie v-for="serieTv in allSeries" :key="serieTv.id" :serie="serieTv"></CardSerie>
            </ul>  
        </section>
    </div>
</main> 
</template>

<style lang="scss" scoped>
    main{
        background-color: rgba(0, 0, 0, 0.538);
    }

    .container{
        min-height: 200px;
        padding: 20px 0;

        h2.show{
            text-transform: uppercase;
            color: white;
        }
    }

    .album-films,
    .album-series{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        text-align: center;
        padding: 40px 0;
    }
</style>