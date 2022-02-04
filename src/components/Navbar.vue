<template>
<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<header>
  <nav>
    <div class='logo-box'>
      <h1 class='logo'>
        <a href='/'>
          <img src='@\assets\logo.png' width='70' height='70'>
        </a>
      </h1>
    </div>
    <ul>
      <li><router-link to ="/">Главная страница</router-link></li>
      <li><router-link to ="/articles">Статьи</router-link></li>
   </ul>
  </nav>
</header>
</template>
<style>
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
header {
  background: #FFEBCD;
  box-shadow: 0 4px 6px 	#C0C0C0;  
}
nav {
  max-width: 660px;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
}
.logo-box {
  float: left;
  margin-left: 25px;
}
.logo {
  margin: 0;
  height: 70px;
  text-align: center;
}
ul {
  margin: 0;
  margin-right: 25px;
  padding-left: 0;
  list-style: none;
  float: right;
  height: 70px;
  line-height: 70px;
  text-align:center;
}
a {
  text-decoration: none;
  display: inline-block;
  position: relative;
}
li a {
  color: #868686;
  text-transform: uppercase;
}
li {
  display: inline-block;
  margin-left: 25px;
  transition: .5s linear;
}
li a:after {
  content: '';
  width: 0;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 20px;
  background: #868686;
  transition: all 0.5s linear;  
}
li a:hover:after{
  width: 100%;
}
@media screen and (max-width:574px) {
  .logo-box {
    float: none;
    margin: 0 auto;
  }
  ul {
    float: none;
    margin: 0 25px;
    }
 li:first-of-type {margin-left:0}
}

@media screen and (max-width:493px) {
nav {
  overflow: visible
}
ul {
  height: auto;
  margin: 25px 25px 0 25px;
  line-height: 50px;
}
li {
  display: block;
  margin: 0;
}
li:hover {
  background: rgba(0,0,0,.1)
}
li a:after {
  content: none;
}
}
</style>