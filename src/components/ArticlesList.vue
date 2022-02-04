<template>
        <div v-if="articles.length > 0">      
                <transition-group name= "article-list"> 
      <article-item 
      v-for="article in articles"
      :article="article" :key="article.id"
      @remove="$emit('remove', article)"
      />
                </transition-group>
   </div>
<h2 v-else style= "color: #B22222; margin-left: 15px">
        Список статей пуст
</h2>
</template>

 <script>

 import ArticleItem from "@/components/ArticleItem.vue";


 export default {
         components: {
                 ArticleItem
         },
     props: {
             articles: {
                     type: Array,
                     required: true
             }
     }
 }
 </script>

 <style  scoped>
.article {
        padding: 15px;
        border: 2px solid #C0C0C0;
}
.article-list-item {
  display: inline-block;
  margin-right: 10px;
}
.article-list-enter-active, .article-list-leave-active {
  transition: all 0.4s ease;
}
.article-list-enter, .article-list-leave-to  {
  opacity: 0;
  transform: translateX(30px);
}
.article-list-move {
  transition: transform 0.4s ease;
}
 </style>