# Meal Search Application

## Introduction

This project is a meal searching application built with Vue.js. 

The application allows users to:
- Display random meals
- Search for meals by name
- Browse meals by letter
- Browse meals by ingredient

The application is fully responsive and adjusts the layout based on the screen size.

## Technologies Used

- [MealDB API](https://www.themealdb.com/api.php)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)
- [Vue.js](https://vuejs.org/)

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/Lenka03/vuejs-search-meals.git

2. **Install Dependencies**: 
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install vue-router@4
   npm install vuex@4 -S
   npm install -S axios

3. **Add the Tailwind CSS directives to the `<style>` tags in the `style.css` file**: 
   ```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

4. **Run the Application**: 
   ```bash
   npm dev start
  - *Open your browser and navigate to http://localhost:3000 to view the application.*

## Conclusion
This project is a responsive, feature-rich meal search application built using Vue.js, Tailwind CSS, Vue Router, Vuex, and Axios.
