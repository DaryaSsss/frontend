<template>
<my-wrapper>
    <div v-if="!isArticlesLoadings">
          <h1>{{this.id}}. {{this.title}}</h1>
    <h2>{{this.body}}</h2>
    <my-button @click="$router.push('/articles')">Назад</my-button>

        </div>
        <div v-else align="center" style="margin-top: 15px">Идет загрузка...</div>

         <my-dialog v-model:show="dialogVisible">
        <comment-form @create="createComment"/>
      </my-dialog> 
       <h3 >Список комментариев</h3>
         <my-button @click="showDialog" >Написать комментарий</my-button>
        <div class="app__btns">
  <comments-list :comments="comments"
@remove="removeComment"
/>
        </div>
        </my-wrapper>
</template>


 <script>
 import axios from 'axios';
 import CommentForm from '@/components/CommentForm';
  import CommentsList from '@/components/CommentsList'

 export default {
     components: {CommentForm, CommentsList},
  name: "ArticlePage",
  data(){
    return{
    comments: [],
      dialogVisible: false,
      id:this.$route.params.id,
      title:"",
      body:"",
       page: 1,
     limit: 10,
     totalPages: 0,
      isArticlesLoadings:true,
    }
  },

  methods:{
      createComment(comment){
      this.comments.push(comment);
      this.dialogVisible=false;
    },
    removeComment(comment){
      this.comments=this.comments.filter(p=>p.id !==comment.id);
    },
   showDialog() {
     this.dialogVisible=true;
   },
        async fetchComments(){
      try {
        const responce =await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages =Math.ceil(responce.headers['x-total-count']/this.limit)
        this.comments =responce.data;        
      } catch(e) {
        alert('Ошибка')
      }
    },
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
   mounted(){
     this.fetchComments();
}
 }

</script>