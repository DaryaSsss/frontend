<template>
    <div >
      <my-dialog v-model:show="dialogVisible">
        <article-form @create="createArticle"/>
      </my-dialog>
     
      <h3 style= "margin-left: 15px">Список статей</h3>
         <my-button @click="showDialog" style= "margin-left: 15px">Создать статью</my-button>
        <div class="app__btns">
            <my-input style="margin: 15px" v-model="searchQuery"  placeholder="Поиск...">               
      </my-input>
       <my-select style= " margin: 15px"
        v-model="selectedSort"
        :options="sortOptions"
         />
        </div>
  <articles-list :articles="sortedAndSearchedArticles"
@remove="removeArticle"
v-if="!isArticlesLoadings"
/>
<div v-else align="center">Идет загрузка...</div>
</div>
</template> 

<script>
import ArticlesList from "@/components/ArticlesList";
import ArticleForm from "@/components/ArticleForm";
import axios from "axios";



export default {
  components: {
 ArticlesList, ArticleForm
  },
   data(){
   return {
     articles: [],
     dialogVisible: false,
     isArticlesLoadings: false,
     selectedSort: '',
     searchQuery: '',
     page: 1,
     limit: 10,
     totalPages: 0,
     sortOptions:[
     {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По содержимому'},
   ]
   }
 },
  methods: {
    createArticle(article){
      this.articles.push(article);
      this.dialogVisible=false;
    },
    removeArticle(article){
      this.articles=this.articles.filter(p=>p.id !==article.id);
    },
   showDialog() {
     this.dialogVisible=true;
   },
    async fetchArticles(){
      try {
        this.isArticlesLoadings = true;
        const responce =await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages =Math.ceil(responce.headers['x-total-count']/this.limit)
        this.articles =responce.data;        
      } catch(e) {
        alert('Ошибка')
      } finally {
        this.isArticlesLoadings =false;
      }
    }
   },
   mounted(){
     this.fetchArticles();
   },
 computed: {
   sortedArticles() {
     return [...this.articles].sort((article1, article2)=> article1[this.selectedSort]?.localeCompare(article2[this.selectedSort]))
    },
    sortedAndSearchedArticles() {
      return this.sortedArticles.filter(article => article.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
   },
// watch: {
//   selectedSort(newValue) {
//     this.articles.sort((article1, article2)=> {
//       return article1[newValue]?.localeCompare(article2[newValue])
//     })
//   }
}


   
 

</script>

<style  scoped>
.app__btns {
 display: flex;
 }
</style>

