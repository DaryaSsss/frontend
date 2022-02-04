<template>
      <form @submit.prevent align="center">
           <h4>Написать комментарий</h4>
           <my-input v-focus v-model="comment.email" type="text" placeholder="Email"></my-input>
           <br>
               <my-input v-model="comment.name" type="text" placeholder="Название"></my-input>
               <br>
               <my-input v-model="comment.body" type="text" placeholder="Текст комментария"></my-input>
               <br>
                 <my-button style="margin-top: 15px" @click="createComment">Опубликовать</my-button>
         </form>
</template>

<script>
export default {
    data() {
        return {
            comment: {
                email: '',
                name: '',
                 body: '',
            }
        }
    },
  methods: {
     createComment() {       
     this.comment.id=Date.now(),  
    this.$emit('create', this.comment)
    this.comment ={
        email: '',
        name: '',
        body: '',
    }
    
     },
   },
}
</script>