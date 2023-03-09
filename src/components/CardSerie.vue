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
                <!-- <li class="flag">
                    <div v-if=" img !== Error">
                        <img :src=flags(serie.original_language)>
                    </div>
                    
                    <p v-else>{{ serie.original_language }}</p>
                </li> -->
                <li>
                    <img :src=flags(serie.original_language)>
                </li>
                <li class="stars">
                   <p>{{serie.vote_average}}</p> 
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