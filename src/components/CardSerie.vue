<script>
  export default{
    props:{
      serie:{
        type:Object,
        required:true
      }
    },
    data(){
        return{
        }
    },
    methods:{
        flags(serie){
            const country = 'https://flagcdn.com/16x12/'+ serie.original_language + '.png'
            return country
        }
    }
  }
</script>

<template>
    <li class="card">                
        <div class="card-descrition">
            <ul class="card-text">
                <li class="title">
                    <h2>{{serie.name}}</h2> 
                </li>
                <li class="original-title">
                    <h3>{{serie.original_name}}</h3>
                </li>
                <li class="flag">
                    <img :src=flags(serie)>
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