

import { reactive } from "vue";

const store= reactive({
    config:{
        API_KEY:'81cfc90337c2714b69d747666a2b6108',
        URI_BASE:'https://api.themoviedb.org/3',
    },
    imgConfig:{
        URL_BASE: 'https://image.tmdb.org/t/p/'
    },
    search:'',
    films:[],
    series:[],
})

export default store