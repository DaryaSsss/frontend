<template>
    <div class="article">
        <div><strong>{{article.id}}</strong></div>
   <div><strong>Название: </strong>{{article.title}}</div>
   <div><strong>Описание: </strong>{{article.body}}</div>
   <my-button style="margin-top: 15px;"
       @click="$router.push(`/articles/${article.id}`)">
       Читать далее
   </my-button>
   <my-button style="margin: 15px 0 0 15px;"
   @click="$emit('remove', article)">
       Удалить
   </my-button>
   </div>
</template>
  
<script>

export default {
 
    props: {
        article: {
            type: Object,
            required: true,
        },
          
    }
}
</script>

<style  scoped>
.article {
        padding: 15px;
        border-radius: 5px;
        border: 2px solid #C0C0C0;
        margin-top: 15px;
}

 </style>