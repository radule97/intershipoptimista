export default {
  getLog(state){
    return state.log
  },
  getPoruke(state){
    return state.poruka
  },
  getSenders(state){
    return state.senders
  },
  getPorukeNove(state){
    return state.porukeNove
  },
  /*AWWARDS GETTERS*/
  getAwwardUserLikes(state){
    return state.awwardUserLikes
  },
  getAwwardUserViews(state){
    return state.awwardUserViews
    awwardTextViews:""
  },
  getReturnPath:function(state){
    return state.returnPath;
  }
  /*END AWWARDS GETTERS*/


}
