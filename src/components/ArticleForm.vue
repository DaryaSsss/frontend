<template>
      <form @submit.prevent>
           <h4>Создание поста</h4>
           <my-input v-focus v-model="article.title" type="text" placeholder="Название"></my-input>
               <my-input v-model="article.body" type="text" placeholder="Описание"></my-input>
                 <my-button style="margin-top: 15px" @click="createArticle">Создать новый пост</my-button>
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