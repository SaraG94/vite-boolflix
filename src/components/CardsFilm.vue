<script>
  export default{
    props:{
      film:{
        type:Object,
        required:true
      }
    },
    data(){
        return{

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
    <li class="card-film">                
        <div class="card-descrition">
            <ul class="card-text">
                <li class="title">
                    <h2>{{film.title}}</h2>
                </li>
                <li class="original-title">
                    <h3>{{film.original_title}}</h3>
                </li>
                <li class="flag">
                    <img :src=flags(film)>
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
        border-radius: 10px;
        padding: 5px;

        .card-text{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }
</style>