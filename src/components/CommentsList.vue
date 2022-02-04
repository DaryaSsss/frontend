<template>
        <div v-if="comments.length > 0">      
                <transition-group name= "comment-list"> 
      <comment-item 
      v-for="comment in comments"
      :comment="comment" :key="comment.id"
      @remove="$emit('remove', comment)"
      />
                </transition-group>
   </div>
<h2 v-else style= "color: #B22222; margin-left: 15px">
        Пока нет комментариев
</h2>
</template>

 <script>

 import CommentItem from "@/components/CommentItem.vue";


 export default {
         components: {
                 CommentItem
         },
     props: {
             comments: {
                     type: Array,
                     required: true
             }
     }
 }
 </script>

 <style  scoped>
.сomment {
        padding: 15px;
        border: 2px solid #C0C0C0;
}
.comment-list-item {
  display: inline-block;
  margin-right: 10px;
}
.comment-list-enter-active, .article-list-leave-active {
  transition: all 0.4s ease;
}
.comment-list-enter, .article-list-leave-to  {
  opacity: 0;
  transform: translateX(30px);
}
.comment-list-move {
  transition: transform 0.4s ease;
}
 </style>