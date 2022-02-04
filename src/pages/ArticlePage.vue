<template>
    <div v-if="article">
          <h1>Статья {{this.id}}</h1>
          <p>Название статьи{{article.name}}</p>
          <p>Описание{{article.desc}}</p>

        </div>
        <div v-else>Загрузка...</div>
</template>


 <script>

 export default {
     const: id:this.$route.params.id
     data(){
         return {
             article: {
              id:this.$route.params.id,
      name:"",
      desc:"",
         }}
     },
         mounted(){
     fetch('http://localhost:3000/articles/'+this.id)
     .then(res=>res.json())
     .then(data=>this.articles=data)
     .catch(err=>console.log(err.message))
   },
   }
 </script>