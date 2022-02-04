<template>
 <div>
  <h2>Добро пожаловать!</h2>
  <h3>Для перехода к статьям нажмите <router-link to ="/articles" >здесь</router-link></h3>
<vueper-slides>
  <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" :content="slide.content" />
</vueper-slides>

</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'preview.jpg',
       image: require('@/assets/preview.jpg')
    },
     
    {
      title: 'Slide #1',
      content: 'preview.jpg',
       image: require('@/assets/preview_2.jpg')
    },
    
  ]
})
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