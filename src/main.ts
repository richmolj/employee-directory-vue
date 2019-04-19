import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { Employee, Position } from "@/models"

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    employees: [],
    currentEmployee: null,
    lastUpdated: null
  },
  mutations: {
    setEmployees(state, employees) {
      state.employees = employees
    },
    setCurrentEmployee(state, employee) {
      state.currentEmployee = employee
    },
    setLastUpdated(state, updated) {
      state.lastUpdated = updated//state.currentEmployee.dup()
    }
  },
  actions: {
    async selectEmployee({commit}, employeeId: string) {
      let { data } = await Employee
        .includes({ positions: "department" })
        .find(employeeId)
        if (data) {
          commit('setCurrentEmployee', data)
        }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
