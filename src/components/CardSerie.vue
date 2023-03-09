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
    }
  }
</script>

<template>
    <li class="card"> 
        <img :src=setPoster(serie.poster_path)>            
        <div class="card-descrition">
            <ul class="card-text">
                <li class="title">
                    <h2>{{serie.name}}</h2> 
                </li>
                <li class="original-title">
                    <h3>{{serie.original_name}}</h3>
                </li>
                <li>
                    <img v-if="flags[serie.original_language]" :src="flags[serie.original_language]" width="30" alt="">
                    <p v-else>{{ serie.original_language }}</p>
                </li>
                <li class="stars">
                   <p>{{Math.round((serie.vote_average)/2)}}</p> 
                </li>
            </ul>
        </div>
    </li>
</template>

<style lang="scss" scoped>  
    .card{
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