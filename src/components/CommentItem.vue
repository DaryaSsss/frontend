<template>
    <div class="comment">
   <div><strong>Имя: </strong>{{comment.user_name}}</div>
    <div><strong>Комментарий: </strong>{{comment.comment}}</div>
   <my-button style="margin-top: 15px ;"
   @click="$emit('remove', comment)">
       Удалить
   </my-button>
   </div>
</template>
  
<script>

export default {
 
    props: {
        comment: {
            type: Object,
            required: true,
        },
          
    }
}
</script>

<style  scoped>
.comment {
        padding: 15px;
        border-radius: 5px;
        border: 2px solid #C0C0C0;
        margin-top: 15px;
}

 </style>