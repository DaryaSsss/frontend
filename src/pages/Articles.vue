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
<div  v-intersection="loadMoreArticles" class="observer"></div>
<!-- <div class="page__wrapper">
 <div
  v-for="pageNumber in totalPages"
  :key="pageNumber"
  class="page"
  :class="{
    'current-page': page === pageNumber
    }"
    @click="changePage(pageNumber)"
  >
  {{pageNumber}}
</div>
 </div> -->
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
  //  changePage(pageNumber){
  //    this.page= pageNumber
  //  },
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
    },
      async loadMoreArticles(){
      try {
        this.page +=1;
        const responce =await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages =Math.ceil(responce.headers['x-total-count']/this.limit)
        this.articles =[...this.articles, ...responce.data];        
      } catch(e) {
        alert('Ошибка')
      }
    }
   },
   mounted(){
     this.fetchArticles();
     console.log(this.$refs.observer);
//      const options = {
//   rootMargin: '0px',
//   threshold: 1.0
// }
// const callback = (entries, observer) =>{  
//   if(entries[0].isIntersecting && this.page<this.totalPages){
//     this.loadMoreArticles()
//   }
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(this.$refs.observer);
   },
 computed: {
   sortedArticles() {
     return [...this.articles].sort((article1, article2)=> article1[this.selectedSort]?.localeCompare(article2[this.selectedSort]))
    },
    sortedAndSearchedArticles() {
      return this.sortedArticles.filter(article => article.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
   },
watch: {
  //  page(){
  //    this.fetchArticles()
  //  }
  }
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

