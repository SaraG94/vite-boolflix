<script>
  import store from '../store'
  export default{
    props:{
      serie:{
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
        },
        // createStar(num){
        //     const vote=Math.round((num)/2)
        //     for(let i=0; i=vote;i++){
        //         `<font-awesome-icon icon="fa-regular fa-star"/>`
        //     }
        // }
    }
  }
</script>

<template>
    <li class="card"> 
        <img :src=setPoster(serie.poster_path)>            
        <div class="card-descrition">
            <ul class="card-text">
                <li class="title">
                    <p><strong>Titolo:</strong>{{serie.name}}</p>
                </li>
                <li class="original-title">
                    <p><strong>Titolo originale:</strong>{{serie.original_name}}</p>
                </li>
                <li>
                    <img v-if="flags[serie.original_language]" :src="flags[serie.original_language]" width="30" alt="">
                    <p v-else>{{ serie.original_language }}</p>
                </li>
                <li class="stars">
                    <p>
                        <strong>Voto:</strong>{{setInteger1To5(serie.vote_average)}}
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
    .card{
        border: 1px solid papayawhip;
        position: relative;
    }
    
    .card-descrition{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        background-color: #00000082;
        padding: 10px 5px;
        width: 100%;
        height: 100%;

        .card-text{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
    .card:hover .card-descrition{
        display: block;
    }
</style>