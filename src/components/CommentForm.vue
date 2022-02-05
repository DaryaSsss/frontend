<template>
      <form  @submit.prevent align="center">
           <h4>Написать комментарий</h4>
           <my-input v-focus v-model="comment.user_name" type="text" placeholder="Имя"></my-input>
           <br>
               <my-input v-model="comment.comment" type="text" placeholder="Комментарий"></my-input>
               <br>
                 <my-button  style="margin-top: 15px" @click="createComment">Опубликовать</my-button>
         </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            comment: {
                user_name: '',
                 comment: '',
            },
            id:this.$route.params.id,
        }
    },
  methods: {
     createComment() {       
     this.comment.id=Date.now(),  
    this.$emit('create', this.comment)    
    axios.post('http://demo-api.vsdev.space/api/articles/'+this.$route.params.id+'/comments', 
        this.comment
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.comment ={
           user_name: '',
                 comment: '',
    }
   },
}}
</script>