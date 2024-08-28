import { createStore } from "vuex";
// import state from "./state"
// import * as actions from "./actions"
// import * as mutations from "./mutations"

// const store = createStore([
//     state,
//     actions,
//     mutations,
// ])

// export default store;

import axios from "axios";
import axiosClient from '../axiosClient';

export default createStore({
    state: {
      mealsByLetter: [],
      searchedMeals: [],
      mealsByIngredient: [],
      ingredient: {}
    },
    mutations: {
      setMealsByLetter(state, meals) {
        state.mealsByLetter = meals || [];
      },
      setSearchedMeals(state, meals) {
        state.searchedMeals = meals || [];
      },
      setMealsByIngredients(state, meals) {
        state.mealsByIngredient = meals || [];
      },
      setIngredient(state, ingredient) {
        state.ingredient = ingredient;
      }
    },
    actions: {
      async searchMealsByLetter({ commit }, letter) {
        axiosClient.get(`search.php?f=${letter}`)
          .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
          })
      },
      async searchMeals({ commit }, keyword) {
        axiosClient.get(`search.php?s=${keyword}`)
          .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
          })
      },
      async searchMealsByIngredient({ commit }, ing) {
        axiosClient.get(`filter.php?i=${ing}`)
          .then(({ data }) => {
            commit('setMealsByIngredients', data.meals)
          })
      }
    }
  });