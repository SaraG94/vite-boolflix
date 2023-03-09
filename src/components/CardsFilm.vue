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
                }
            }
        },
        computed:{
            imgBase(){
                return this.store.imgConfig.URL_BASE
            }
        },
        methods:{
 
            setPoster(currentPoster){
                const poster = this.imgBase +'w342'+ currentPoster;
                return poster
            },
            setInteger1To5(num){
                const vote=Math.round((num)/2)
                return vote
            }
        }
    }
</script>

<template>
    <li class="film">
        <img :src=setPoster(film.poster_path)>       

        <div class="descrition">
            <ul class="text">
                <li class="title">
                    <p><strong>Titolo:</strong>{{film.title}}</p>
                </li>
                <li class="original-title">
                    <p><strong>Titolo originale:</strong>{{film.original_title}}</p>
                </li>
                <li>
                    <img v-if="flags[film.original_language ]" :src="flags[film.original_language]" width="30" alt="">
                    <p v-else>{{ film.original_language }}</p>
                </li>
                <li class="stars">
                    <p>
                        <strong>Voto:</strong>{{setInteger1To5(film.vote_average)}}
                        <span>
                            <font-awesome-icon icon="fa-regular fa-star"/> 
                            <font-awesome-icon icon="fa-regular fa-star"/>
                            <font-awesome-icon icon="fa-regular fa-star"/>
                            <font-awesome-icon icon="fa-regular fa-star"/>
                            <font-awesome-icon icon="fa-regular fa-star"/> 
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    </li>
</template>

<style lang="scss" scoped>  
    .film{
        border: 1px solid papayawhip;
        position:relative;
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
    }
    .film:hover .descrition{
        display: block;
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>