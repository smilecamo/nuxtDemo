const state = () => ({
  list:['a']
})

const mutations = {
  add(state,text){
    state.list = text
  }
}

const actions = {
  add({commit},text){
    commit('add',text)
  }
}

export default{
  namespaced:true,
  state,
  mutations,
  actions
}
