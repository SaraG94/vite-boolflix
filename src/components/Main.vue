<script>
    import store from '../store'

    export default{
        data(){
            return{
            store,
            }
        },
        computed:{
            
            allFilms(){
            return this.store.films
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

        <ul class="album-films">

            <li class="card-film" v-for="film in allFilms" :key="film.id">                
                <div class="card-descrition">
                    <ul class="card-text">
                        <li>
                            <h2>{{film.title}}</h2>
                        </li>
                        <li>
                            <h3>{{film.original_title}}</h3>
                        </li>
                        <li>
                            <img :src=flags(film)>
                        </li>
                        <li>
                            <p>{{film.vote_average}}</p>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>     
    </div>
</main> 
</template>

<style lang="scss" scoped>

    main{
        background-color: rgba(0, 0, 0, 0.538);
    }

    .container{
        min-height: 200px;

        .album-films{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            text-align: center;
            padding: 40px 0;
        }
    }

    .card-film{
        border: 1px solid papayawhip;
        border-radius: 10px;
        padding: 5px;
    }

    .card-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

</style>