<template lang="html">
  <div class="wrapper">
    <div class="container">
<h1>Ovo su partneri</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Naziv</th>
      <th>Link</th>
      <th>Email</th>
      <!-- <th>Slika</th> -->
      <th>Tip</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(l,index) in listaPartneraC">
      <td scope="row">{{index+1}}</td>
      <td>{{ l.username}}</td>

      <td>{{l.osb_info}}</td>

      <td>{{l.osb_email}}</td>




      <td>{{l.osb_tip}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</template>

<script>
  import api from '@/api/vesti/axios_calls.js'
  export default {
    data() {
        return {


        }
      },
      methods: {
        listaPartnera: function() {

          this.$store.dispatch('listaPartneraA');

        },

      },
      computed: {
        listaPartneraC() {
          return this.$store.getters.listaPartneraG;
        }

      },
      created() {
        this.listaPartnera();


      },


  }
</script>

<style scoped>

fieldset
{
border: 1px solid #ddd !important;
margin: 0;
xmin-width: 0;
padding: 10px;
position: relative;
border-radius:4px;
background-color:#f5f5f5;
padding-left:10px!important;
}

legend
{
  font-size:14px;
  font-weight:bold;
  margin-bottom: 0px;
  width: 35%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 5px 5px 10px;
  background-color: #ffffff;
}


  .btn {
    margin: 0 5px;
  }

  .wrapper {
    margin: 10px auto;
    width: 870px;
  }
  /*#exampleSelect1 {
  font-family: 'FontAwesome', 'sans-serif';
}

#kat {
  margin: 30px auto;
  width: 870;
  overflow: hidden;
}*/

  .glavna-kategorija {
    float: left;
    margin: 0 80px;
  }

  .sporedna-kategorija {
    float: left;
    margin-right: 65px;
  }

  .zaglavlje td {
    font-weight: 800;
    font-family: sans-serif;
  }
  /*za liste--------------*/
  #centeredmenu {
   float:left;
   width:100%;
   background:#fff;
   border-bottom:4px solid #000;
   overflow:hidden;
   position:relative;
}
#centeredmenu ul {
   clear:left;
   float:left;
   list-style:none;
   margin:0;
   padding:0;
   position:relative;
   left:50%;
   text-align:center;
}
#centeredmenu ul li {
   display:block;
   float:left;
   list-style:none;
   margin:0;
   padding:0;
   position:relative;
   right:50%;
}

  /*#listaDiv {
    width: 200px;
  }

  #listaNaslov {
    font: 400 30px/1.5 Helvetica, Verdana, sans-serif;
    margin: 0;
    padding: 0;
  }

  #listaUl {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #listaUl li {
    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
    border-bottom: 1px solid #ccc;
  }

  #listaUl li:last-child {
    border: none;
  }*/
  /*li a {
  text-decoration: none;
  color: #000;
  display: block;
  width: 200px;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

li a:hover {
  font-size: 30px;
  background: #f6f6f6;
}*/
</style>
