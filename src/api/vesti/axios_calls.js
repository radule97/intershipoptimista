import {axiosWithBaseUrlParams,axiosWithBaseUrlOnly} from './config.js'

export default {
  takeMyOneNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'getOneNew',
      method:'get',
      params:{
        temaId:params.temaId
      }
    });
  },


  authorNews: function(params) {
    return axiosWithBaseUrlParams({
      url: 'vestiAutora',
      method: 'get',
      params: params
    })
  },

  allAuthorsApi: function(){
    return axiosWithBaseUrlOnly({
      url: 'getAuthors',
      method: 'POST'
    })
  },

getKategorijeApi: function(params){
return   axiosWithBaseUrlOnly({
    url:"getKategorijaVesti",
    method:"get",
    data: {

    }
  });
},

  takeCategoriesApi: function() {
    return  axiosWithBaseUrlOnly({
      url: 'optimistaKat',
      method: 'post',
      data: {

      }
    });
  },
  neodobreneVestiApi: function() {

    return axiosWithBaseUrlParams({
      url: 'neodobreneVesti',
      method: 'post',
      data: {
      },
      params: {

      }
    });
  },
  listaPartneraApi: function() {

    return axiosWithBaseUrlParams({
      url: 'listaPartnera',
      method: 'post',
      data: {
      },
      params: {

      }
    });
  },


  prijavljeniKorisniciApi: function() {
    return axiosWithBaseUrlParams({
      url: 'prijavljeniKorisnici',
      method: 'post',
      data: {
        vf:0
      },
      params: {

      }
    })
  },

  slikaCms: function() {
    return axiosWithBaseUrlParams({
      url: 'slikaCms',
      method: 'post',
      data: {
        vf:0
      },
      params: {

      }
    })
  },



  prijavljeniKomentariApiV: function() {
    return axiosWithBaseUrlParams({
      url: 'prijavljeniKomentari',
      method: 'post',
      data: {

      },
      params: {

      }

    })
  },
  potencijalniAutoriApi: function() {
    return axiosWithBaseUrlParams({
      url: 'potencijalniAutori',
      method: 'post',
      data: {

      },
      params: {

      }
    })
  },

  moreNewsAuthorApi: function(params) {
    var id = params.authorId;
    var limit = params.limit;
    var start = params.start;
    return axiosWithBaseUrlParams({
      url: 'getAuthorNews',
      method: 'POST',
      data: {
        id: id,
        limit: limit,
        start: start
      },
      params: {

      }
    });
  },

  sviKorisniciApi: function(upit) {
    var limit = upit.limit;
    var start = upit.start;
    return axiosWithBaseUrlParams({
      url: 'sviKorisnici',
      method: 'post',
      data: {
        limit: limit,
        start: start
      },
      params: {

      }
    });
  },
  listaKategorijaApi_V: function() {
    return axiosWithBaseUrlParams({
      url: 'kategorijeCms',
      method: 'post',
      data: {
        vf : 0
      },
      params: {

      }
    });
  },
  postaviModeratoraApi: function(osb_id){
  return axiosWithBaseUrlParams({
    url: 'postaviModeratoraApi',
    method: 'post',
    data: {
      osb_id : osb_id
    },
    params: {

    }
  });
},

  SviKomentariKorisnikaApi: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'prikazKomentaraCms',
      method: 'post',
      data: {
        vf: 0,
        osb_id: osb_id,
        prijavljen: 1
      },
      params: {

      }
    });
  },
  SviKomentariSvihKorisnikaApi: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'prikazKomentaraSvihKorisnikaCms',
      method: 'post',
      data: {
        vf: 0,
        osb_id: osb_id
      },
      params: {

      }
    });

  },


  getKategorijeApi: function(params) {
    return axiosWithBaseUrlOnly({
      url: "getKategorijaVesti",
      method: "get",

    });
  },

  checkUserLogApi:function(params){
    var sid = localStorage.getItem('sid');
    return axiosWithBaseUrlOnly({
      url:"checkLogUser",
      method:"post",
      data:{
        sid:sid
      }

    });

  },

  getCatIdApi: function(params){
    return axiosWithBaseUrlOnly({
      url:"najnovijeVesti",
      method:"post",
      data:{
        id:params.id,
        lim:params.limit,
        ofset:params.ofset
      }
    })
  },

  getCatTopIdApi: function(params){
    return  axiosWithBaseUrlOnly({
      url:"topRatedNews",
      method:"post",
      data:{
        id:params.id,
        lim:params.limit,
        ofset:params.ofset,
        filtrirano:params.filter

      }
    })
  },

  getVestiApi:function(params){
    return  axiosWithBaseUrlOnly({
    url:"najnovijeVesti",
    method:"post",
    data:{
      limitirano:params.lim,
      ofset:params.ofs,
      id:params.katId
    }

    })
  },

getTopNewsApi:function(params){
   return axiosWithBaseUrlOnly({
    url:"topRatedNews",
    method:'post',
    data:{
      filtrirano: params.filter,
      limitirano: params.limit,
      id:params.katId,
      // ofs:this.ofset
    }


  });
},

searchNewsApi:function(params){
  return  axiosWithBaseUrlOnly({
    url:"sApi",
    method:'post',
    data:{
      search:params.search,
      ofset:params.ofset
  }
})},
//kraj pocetnw strane

  mostPopularAuthorsApi: function(){
    return axiosWithBaseUrlOnly({
      url:'getPopAuthors',
      method: 'POST'
    });
  },

  commentOfTheDayApi: function(){
    return axiosWithBaseUrlOnly({
      url: 'commentOfTheDay',
      method: 'POST'
    });
  },
  oznaciKomentarOkApi: function(id) {
    return axiosWithBaseUrlParams({
      url: 'oznaciKomentarOkCms',
      method: 'post',
      data: {
        vf: 0,
        id: id
      },
      params: {

      }
    });
  },

  objaviTemuApi: function(tma_id) {
    return axiosWithBaseUrlParams({
      url: 'objaviTemuf',
      method: 'post',
      data: {
        tma_id: tma_id
      },
      params: {

      }
    });
  },
  obrisiTemuApi: function(tma_id) {
    return axiosWithBaseUrlParams({
      url: 'obrisiTemuf',
      method: 'post',
      data: {
        tma_id: tma_id
      },
      params: {

      }
    });
  },

  dorada: function(params) {
    var id = params.id;
    var obavestenje = params.obavestenje;
    // console.log("aksios "+obavestenje);
    // console.log("aksios "+id);
    return axiosWithBaseUrlParams({
      url: 'dorada',
      method: 'post',
      data: {
        id: id,
        obavestenje: obavestenje
      },
      params: {

      }
    });
  },

  blokirajKorisnikaApi: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'blokirajKorisnikaf',
      method: 'post',
      data: {
        osb_id: osb_id
      },
      params: {

      }
    });
  },
  oznaciKorisnikaOkApi: function(id) {
    return axiosWithBaseUrlParams({
      url: 'oznaciKorisnikaOk',
      method: 'post',
      data: {
        osb_id: id
      },
      params: {

      }
    });
  },
  pretraziKorisnikeApi: function(search){
    return axiosWithBaseUrlParams({
      url: 'searchApi',
      method: 'post',
      data: {
        search : search
      },
      params: {

      }
    });
  },
  blokirajKomentarApi: function(pst_id) {
    return axiosWithBaseUrlParams({
      url: 'blokirajKomentarf',
      method: 'post',
      data: {
        pst_id: pst_id
      },
      params: {

      }
    });
  },
  vratiKorisnikaUZivot: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'vratiKorisnikaUZivotA',
      method: 'post',
      data: {
        osb_id: osb_id
      },
      params: {

      }
    });
  },
  odrediAutoraApi: function(nesto) {
    var id = nesto.id;
    var odluka = nesto.odluka;
    return axiosWithBaseUrlParams({
      url: 'odrediAutora',
      method: 'post',
      data: {
        id: id,
        odluka: odluka
      },
      params: {

      }
    });
  },
  dodajKategorijuVestiApi: function(naziv) {

    return axiosWithBaseUrlParams({
      url: 'dodajKategorijuVesti',
      method: 'post',
      data: {
        naziv: naziv
      },
      params: {

      }
    });
  },
  zameniKategorijeApi: function(nesto) {
    var zaIzbacivanje = nesto.zaIzbacivanje;
    var zaUbacivanje = nesto.zaUbacivanje;
    return axiosWithBaseUrlParams({
      url: 'zameniKategorije',
      method: 'post',
      data: {
        zaIzbacivanje: zaIzbacivanje,
        zaUbacivanje: zaUbacivanje
      },
      params: {

      }
    });
  },

  insertNew: function(params) {
    return axiosWithBaseUrlOnly({
      url: 'insertNew',
      method: 'post',
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  takeMyUnaprovedNews:function(params){
    return axiosWithBaseUrlOnly({
      url: 'insertNew',
      method: 'get',
      params: {
        parametri: params
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  takeOneNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'getOneNew',
      method:'get',
      params:{
        temaId:params.temaId,
        view:params.view
      }
    });
  },
  takeMyAprovedNews(params){
    return axiosWithBaseUrlOnly({
      url:'getNews',
      method:'post',
      data:{
        parametri: params
      }
    })
  },
  takeRandomTags(){
    return axiosWithBaseUrlOnly({
      url:'getRandomTags',
      method:'get'
    });
  },
  takeDeletedNews(params){
    return axiosWithBaseUrlOnly({
      url:'getDeletedNews',
      method:'post',
      data:{
        ofset: params.ofset
      }
    });
  },
  takeTagRelatedNews:function(params){
    return axiosWithBaseUrlOnly({
      url:'getTagRelatedNews',
      method:'get',
      params:{
        temaId: params.temaId,
        ofset:params.ofset1
      }
    });
  },
  takeFirstComments:function(params){
    return axiosWithBaseUrlOnly({
      url:'getFirstComments',
      method:'get',
      params:{
        temaId: params.temaId,
        ofset:params.ofset,
        orderBy:params.orderBy
      }
    })
  },
  takeRepliesOnComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'takeRepliesOnComment',
      method:'get',
      params:{
        postId: params.postId
      }
    })
  },
  reportComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'reportComment',
      method:'put',
      data:{
        postId:params.postId
      }
    })
  },
  answerUser:function(params){
    return axiosWithBaseUrlOnly({
      url:'answerUser',
      method:'post',
      data:{
        postId:params.postId,
        temaId: params.temaId,
        text: params.text
      }
    })

  },
  addLikeNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'addLikeNew',
      method:'post',
      data:{
        temaId:params.temaId
      }

    })
  },
  addLikeComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'addLikeComment',
      method:'post',
      data:{
        postId:params.postId
      }
    })
  },
  takeImagesOnly:function(params){
    return axiosWithBaseUrlOnly({
      url:'getImagesOnly',
      method:'get',
      params:{
        temaId:params.temaId
      }
    })
  },
  changeNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'insertNew',
      method:'put',
      data: params,
      headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
  },
  sendComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'sendComment',
      method:'post',
      data:{
        temaId:params.temaId,
        text:params.text
      }
    })
  },
  blokirajKorisnikaApi: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'blokirajKorisnikaf',
      method: 'post',
      data: {
        osb_id: osb_id
      },
      params: {

      }
    });
  },
  oznaciKorisnikaOkApi: function(id) {
    return axiosWithBaseUrlParams({
      url: 'oznaciKorisnikaOk',
      method: 'post',
      data: {
        osb_id: id
      },
      params: {

      }
    });
  },
  pretraziKorisnikeApi: function(search){
    return axiosWithBaseUrlParams({
      url: 'searchApi',
      method: 'post',
      data: {
        search : search
      },
      params: {

      }
    });
  },
  blokirajKomentarApi: function(pst_id) {
    return axiosWithBaseUrlParams({
      url: 'blokirajKomentarf',
      method: 'post',
      data: {
        pst_id: pst_id
      },
      params: {

      }
    });
  },
  vratiKorisnikaUZivot: function(osb_id) {
    return axiosWithBaseUrlParams({
      url: 'vratiKorisnikaUZivotA',
      method: 'post',
      data: {
        osb_id: osb_id
      },
      params: {

      }
    });
  },
  odrediAutoraApi: function(nesto) {
    var id = nesto.id;
    var odluka = nesto.odluka;
    return axiosWithBaseUrlParams({
      url: 'odrediAutora',
      method: 'post',
      data: {
        id: id,
        odluka: odluka
      },
      params: {

      }
    });
  },
  dodajKategorijuVestiApi: function(naziv) {

    return axiosWithBaseUrlParams({
      url: 'dodajKategorijuVesti',
      method: 'post',
      data: {
        naziv: naziv
      },
      params: {

      }
    });
  },
  zameniKategorijeApi: function(nesto) {
    var zaIzbacivanje = nesto.zaIzbacivanje;
    var zaUbacivanje = nesto.zaUbacivanje;
    return axiosWithBaseUrlParams({
      url: 'zameniKategorije',
      method: 'post',
      data: {
        zaIzbacivanje: zaIzbacivanje,
        zaUbacivanje: zaUbacivanje
      },
      params: {

      }
    });
  },

  insertNew: function(params) {
    return axiosWithBaseUrlOnly({
      url: 'insertNew',
      method: 'post',
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  takeMyUnaprovedNews:function(params){
    return axiosWithBaseUrlOnly({
      url: 'getUnaprovedNews',
      method: 'get',
      params: {
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  takeOneNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'getOneNew',
      method:'get',
      params:{
        temaId:params.temaId,
        view:params.view
      }
    });
  },
  takeMyAprovedNews(params){
    return axiosWithBaseUrlOnly({
      url:'getAprovedNews',
      method:'get',
      params:{
        ofset: params.ofset
      }
    })
  },
  takeRandomTags(){
    return axiosWithBaseUrlOnly({
      url:'getRandomTags',
      method:'get'
    });
  },
  takeDeletedNews(params){
    return axiosWithBaseUrlOnly({
      url:'getDeletedNews',
      method:'post',
      data:{
        ofset: params.ofset
      }
    });
  },
  takeTagRelatedNews:function(params){
    return axiosWithBaseUrlOnly({
      url:'getTagRelatedNews',
      method:'get',
      params:{
        temaId: params.temaId,
        ofset:params.ofset1
      }
    });
  },
  takeFirstComments:function(params){
    return axiosWithBaseUrlOnly({
      url:'getFirstComments',
      method:'get',
      params:{
        temaId: params.temaId,
        ofset:params.ofset,
        orderBy:params.orderBy
      }
    })
  },
  takeRepliesOnComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'takeRepliesOnComment',
      method:'get',
      params:{
        postId: params.postId
      }
    })
  },
  reportComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'reportComment',
      method:'put',
      data:{
        postId:params.postId
      }
    })
  },
  answerUser:function(params){
    return axiosWithBaseUrlOnly({
      url:'answerUser',
      method:'post',
      data:{
        postId:params.postId,
        temaId: params.temaId,
        text: params.text
      }
    })

  },
  addLikeNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'addLikeNew',
      method:'post',
      data:{
        temaId:params.temaId
      }

    })
  },
  addLikeComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'addLikeComment',
      method:'post',
      data:{
        postId:params.postId
      }
    })
  },
  takeImagesOnly:function(params){
    return axiosWithBaseUrlOnly({
      url:'getImagesOnly',
      method:'get',
      params:{
        temaId:params.temaId
      }
    })
  },
  changeNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'insertNew',
      method:'put',
      data: params,
      headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
  },
  sendComment:function(params){
    return axiosWithBaseUrlOnly({
      url:'sendComment',
      method:'post',
      data:{
        temaId:params.temaId,
        text:params.text
      }
    })
  },
  proveraPristupaApi: function(sid){
    return axiosWithBaseUrlParams({
      url: 'proveraPristupa',
      method: 'post',
      data: {
        sid : sid
      },
      params: {

      }
    });
  },
  searchAuthorNews:function(params){
    return axiosWithBaseUrlOnly({
      url:'searchAuthorNews2',
      method:'get',
      params:{
        // sid
        searchText:params.searchText,
        newsType:params.newsType
      }
    })
  },
  takeMainImageFromDBForChangeNew:function(params){
    return axiosWithBaseUrlOnly({
      url:'getMainImageForChangeNew',
      method:'get',
      params:{
        temaId:params.temaId
      }
    })
  },
  checkAuthorUserLogin:function(){
    var sid = localStorage.getItem('sid');
    return axiosWithBaseUrlOnly({
      url:'checkAuthorUserLogin',
      method:'post',
      data:{
        sid:sid
      }
    })
  }
}
