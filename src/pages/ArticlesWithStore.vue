<template>
    <my-wrapper >
      <my-dialog v-model:show="dialogVisible">
        <article-form @create="createArticle"/>
      </my-dialog>
     
      <h3 >Список статей</h3>
         <my-button @click="showDialog" >Создать статью</my-button>
        <div class="app__btns">
            <my-input  v-model="searchQuery"  placeholder="Поиск..." v-focus>                 
      </my-input>
       <my-select style="margin-top:10px; margin-left:15px;"
        v-model="selectedSort"
        :options="sortOptions"
         />
        </div>
  <articles-list :articles="sortedAndSearchedArticles"
@remove="removeArticle"
v-if="!isArticlesLoadings"
/>
<div v-else align="center">Идет загрузка...</div>
    </my-wrapper>
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
     sortOptions:[
     {value: 'name', name: 'По названию'},
      {value: 'shortDesc', name: 'По содержимому'},
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
        const responce =await axios.get('http://demo-api.vsdev.space/api/articles');
        this.articles =responce.data;        
      } catch(e) {
        alert('Ошибка')
      } finally {
        this.isArticlesLoadings =false;
      }
    },
   },
   mounted(){
     this.fetchArticles();
  
   },
 computed: {
   sortedArticles() {
     return [...this.articles].sort((article1, article2)=> article1[this.selectedSort]?.localeCompare(article2[this.selectedSort]))
    },
    sortedAndSearchedArticles() {
      return this.sortedArticles.filter(article => article.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
   },
}
</script>

<style  scoped>
.app__btns {
 display: flex;
 justify-content: space-between;
 }
 .page__wrapper {
   display: inline-block;
   margin-top: 15px;
 }
 .page {
   border: 1px solid #C0C0C0;
   border-radius: 5px;
   padding: 10px;
   float: left;
   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }

.page:hover {
   outline: none;
  box-shadow: 0 0 0 2px #C0C0C0;  

}
 .current-page {
   background:  #FFEBCD;
   border-radius: 5px;
 }
 .observer {
   height: 30px;
   background: #ffffff ;
 }
</style>

