<template>
<my-wrapper>
 <div>
  <h2>Добро пожаловать!</h2>
  <h3>Для перехода к статьям нажмите <router-link to ="/articles" >здесь</router-link></h3>
  <div v-if="!slider">
<vueper-slides >
  <vueper-slide v-for="slide in slides" :key="slide.id" :image="slide.preview_image"  />
</vueper-slides>
</div>
</div>
</my-wrapper>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import axios from 'axios'

export default {
  components: { VueperSlides, VueperSlide },
  
data(){
    return{
    slides: [],
    slider: false,
    }},
methods: {    
 async fetchSlides(){
      try {
        const responce =await axios.get('http://demo-api.vsdev.space/api/articles');
        this.slides =responce.data;     
      } catch(e) {
        alert('Ошибка')
      } 
    },
},
   mounted(){
     this.fetchSlides();
  
   },
}
</script>


<style  scoped>
a {
  text-decoration: none;
   border-bottom: 2px  DarkOrchid;
  padding-bottom: 3px;
  color: burlywood;
}
a:hover {
  text-decoration: underline;
}
* {
    text-align: center ;
   color: #868686;
}

</style>