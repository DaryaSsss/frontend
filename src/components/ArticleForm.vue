<template>
      <form @submit.prevent  align="center">
           <h4>Создание статьи</h4>
           <my-input v-focus v-model="article.name" type="text" placeholder="Название"></my-input>
           <br>
               <my-input v-model="article.shortDesc" type="text" placeholder="Описание"></my-input>
               <br>
                 <my-button style="margin-top: 15px" @click="createArticle">Создать новую статью</my-button>
         </form>
</template>

<script>
export default {
    data() {
        return {
            article: {
                name: '',
                shortDesc: '',
            }
        }
    },
  methods: {
     createArticle() {       
     this.article.id=Date.now(),  
    this.$emit('create', this.article)
    this.article ={
        name:'',
        shortDesc:'',
    }
    
     },
   },
}
</script>