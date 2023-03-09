<script>
    import store from '../store'
    export default{
        props:{
        film:{
            type:Object,
            required:true
        }
        },
        data(){
            return{
                store
            }
        },
        computed:{
            imgBase(){
                return this.store.imgConfig.URL_BASE
            }
        },
        methods:{
            flags(flagName){

                switch(flagName){
                    case ('en'):
                        return('https://flagcdn.com/32x24/gb.png')
                    case ('uk'):
                        return('https://flagcdn.com/32x24/ua.png')
                    case ('te'):
                        return('https://flagcdn.com/32x24/in.png')
                    case ('ja'):
                        return('https://flagcdn.com/32x24/jp.png')
                    case ('da'):
                        return('https://flagcdn.com/32x24/de.png')
                    default:
                        const country = 'https://flagcdn.com/32x24/'+ flagName + '.png'
                        return country
                }
            },
            setPoster(currentPoster){
                const poster = this.imgBase +'w342'+ currentPoster;
                return poster
            }
        }
    }
</script>

<template>
    <li class="card-film">
        <img :src=setPoster(film.poster_path)>                        
        <div class="card-descrition">
            <ul class="card-text">
                <li class="title">
                    <h2>{{film.title}}</h2>
                </li>
                <li class="original-title">
                    <h3>{{film.original_title}}</h3>
                </li>
                
                <li class="flag">
                    <img :src=flags(film.original_language)>
                </li>
                <li class="stars">
                    <p>{{film.vote_average}}</p>
                </li>
            </ul>
        </div>
    </li>
</template>

<style lang="scss" scoped>  
    .card-film{
        border: 1px solid papayawhip;
    }
    .card-descrition{
        padding: 5px;

        .card-text{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }
</style>
