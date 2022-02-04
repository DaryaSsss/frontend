<template>
<my-wrapper>
    <div v-if="!isArticlesLoadings">
          <h1>{{this.id}}. {{this.title}}</h1>
    <h2>{{this.body}}</h2>
    <my-button @click="$router.push('/articles')">Назад</my-button>

        </div>
        <div v-else align="center" style="margin-top: 15px">Идет загрузка...</div>
        </my-wrapper>
</template>


 <script>
 import axios from 'axios';

 export default {
  name: "ArticleFull",
  data(){
    return{
      id:this.$route.params.id,
      title:"",
      body:"",
      isArticlesLoadings:true,
    }
  },

  methods:{
     async fetchFullArticles(){
      try {
        this.isArticlesLoadings = true;
        const needUrl="https://jsonplaceholder.typicode.com/posts/"+this.id;
        const responce =await axios.get(needUrl)
        this.title= responce.data.title;
        this.body= responce.data.body;
      } catch(e) {
        alert('Ошибка')
      } finally {
        this.isArticlesLoadings =false;
      }
    },
  },
  beforeMount() {
    this.fetchFullArticles();
  },
}

</script>