<template>

<div class="col-md show">
  <hr>

  <h4>Naši partneri</h4>



  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">

                  <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/master.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/animalPlanet.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/batman.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/nationalLogo.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg show"><img class="card-img-top" src="../../assets/logos/master.png" alt="Card image cap"></a>



      </div>
      <div class="carousel-item">
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/visa.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/burger.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/neki.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/ps.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg show"><img class="card-img-top" src="../../assets/logos/master.png" alt="Card image cap"></a>

      </div>
      <div class="carousel-item">
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/master.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/teradata.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/neki.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg"><img class="card-img-top" src="../../assets/logos/nationalLogo.png" alt="Card image cap"></a>
        <a href="#" class="sliderImg show"><img class="card-img-top" src="../../assets/logos/ps.png" alt="Card image cap"></a>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

.col-md{
  margin:20px 0 40px;

}

h4{
  text-align: center;
  color: rgb(247, 148, 30);
  margin-top: 30px;
font-family: 'Amiko', sans-serif;
}

hr {
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(200, 75, 4, 0.62);
  margin-bottom: 0;
}

 .carousel-control-prev, .carousel-control-next {
   width: 2%;
 }

.carousel-item{
  padding: 30px;


}
.sliderImg{
  display: inline-block;
  padding: 20px;
  box-shadow: 5px 3px 3px rgba(215, 117, 36, 0.4);
  width: 15%;
  margin: 20px;
}


.sliderImg img{
  width:100px;
  height:80px;

}


@media all and (min-width:993px) (max-width: 1011px){
  .show{
    display: none;
  }

}
@media screen and (min-width:781px) and (max-width:993px){

  .show{
    display: none;
  }

}

@media screen and (min-width:436px) and (max-width:780px){

  .show{
    display: none;
  }


}


  @media screen and (max-width:435px) {
    .show{
      display: none;
    }

   }




</style>
