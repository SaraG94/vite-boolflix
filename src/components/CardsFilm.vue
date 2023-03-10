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
                store,
                flags:{
                    it:'/it.png',
                    uk:'/en.png',
                    en:'/en.png',
                    fr:'/fr.png',
                    ja:'/ja.png',
                    da:'/de.png'
                },
                convertedVote:this.setInteger1To5(this.film.vote_average)
            }
        },
        computed:{
            imgBase(){
                return this.store.imgConfig.URL_BASE
            },
            poster(){
                return this.film.poster_path ? this.imgBase +'w342'+ this.film.poster_path :null
            }
        },
        methods:{
 
            setInteger1To5(num){
                const vote=Math.round((num)/2)
                return vote
            }
        }
    }
</script>

<template>
    <li class="film">
        <img v-if="this.film.poster_path" class="poster" :src=poster alt="">  
        <img v-else class="poster" src="/poster-placeholder.jpg" alt="">     

        <div class="descrition">
            <ul class="text">
                <li class="title">
                    <p><strong>Titolo: </strong>{{film.title}}</p>
                </li>
                <li class="original-title">
                    <p><strong>Titolo originale: </strong>{{film.original_title}}</p>
                </li>
                <li>
                    <img v-if="flags[film.original_language ]" :src="flags[film.original_language]" width="30" alt="">
                    <p v-else>{{ film.original_language }}</p>
                </li>
                <li class="stars">
                    <p>
                        <strong>Voto: </strong>
                        
                        <font-awesome-icon v-for="n in convertedVote" :key="n" class="yellow-star" icon="fa-solid fa-star"/> 
                        <font-awesome-icon v-for="n in 5-convertedVote" :key="n" icon="fa-regular fa-star"/>      
                    </p>
                </li>
                <li>
                    <p><strong>Trama:</strong>{{ film.overview }}</p>
                </li>
            </ul>
        </div>
    </li>
</template>

<style lang="scss" scoped>  
    .film{
        border: 1px solid papayawhip;
        position:relative;

        img.poster{
            aspect-ratio: 1/1.5;
            object-fit: cover;
            object-position: center;
        } 
    }
    .descrition{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        background-color: #00000082;
        padding: 10px 5px;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        
        .text{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 15px;
        }
    }
    .descrition::-webkit-scrollbar{
        display:none;
    }

    .film:hover .descrition{
        display: block;
    }
</style>