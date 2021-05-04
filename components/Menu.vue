<template>
  <div>
    <b-navbar toggleable="md" class="navbar mr-auto" type="dark">
      <b-navbar-brand tag="h1" class="mb-0" style="color:#eee" id="title-lg">
        <NuxtLink to="/" class="title" >
          Meu CEP
        </NuxtLink>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>
<style scoped>
.navbar{
  border:1px solid #23272B;
  margin:1% auto;
  background-color:#23272B;
  border-radius: 12px;
  padding-left: 20px;
}
b-nav-item{
  color:#eee;
}
.title{
  color:#eee;
  text-decoration: none;
}
.item-menu{
  margin-left: 15px;
}
#title-lg{
  display: block;
}
#button-toggle{
  position: relative;
  background-color: #23272B;
  padding:0px 6px;
  border-radius: 0;
  display: none;
  text-align: center;
  border:none;
}
#button-toggle:focus{
  outline: none;
}
.icon-toggle{
  display: table; position: static;
  font-size: 22px;
}

.list-menu-toogle{
  color: #23272B;
}

@media screen and (max-width:767px){
 #button-toggle{
    display: block;
  }
}

@media screen and (max-width:420px){
 #title-lg{
    font-size: 17px;
  }
}

@media screen and (max-width:325px){
 #title-lg{
    font-size: 15px;
  }
}

@media screen and (max-width:291px){
 #title-lg{
    font-size: 13px;
  }
}
</style>