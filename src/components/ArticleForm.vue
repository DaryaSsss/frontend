<template>
      <form @submit.prevent  align="center">
           <h4>Создание статьи</h4>
           <my-input v-focus v-model="article.title" type="text" placeholder="Название"></my-input>
           <br>
               <my-input v-model="article.body" type="text" placeholder="Описание"></my-input>
               <br>
                 <my-button style="margin-top: 15px" @click="createArticle">Создать новую статью</my-button>
         </form>
</template>

<script>
export default {
    data() {
        return {
            article: {
                title: '',
                body: '',
            }
        }
    },
  methods: {
     createArticle() {       
     this.article.id=Date.now(),  
    this.$emit('create', this.article)
    this.article ={
        title:'',
        body:'',
    }
    
     },
   },
}
</script>