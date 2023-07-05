<template>
  <!-- card header -->
  <div>
    <div class="card">
      <div class="card-header">
        <h4>
          Meals
          <router-link to="/meal/create" class="btn btn-primary float-end"
            >Add meal</router-link
          >
        </h4>
      </div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Meal Name</th>
              <th scope="col">Area</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="meals.length>0">
            <tr v-for="(meal, index) in this.meals" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ meal.strMeal }}</td>
              <td>{{ meal.strArea }}</td>
              <td>{{ meal.strCategory }}</td>
              <td><img :src="meal.strMealThumb" class="food-img" alt="..." /></td>
              <td>
                <router-link to="/" class="btn btn-success">Edit</router-link> | <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
              <tr>
                <td colspan="7">
                  Loading...
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "meals",
  data() {
    return {
      meals: [],
    };
  },
  mounted() {
    this.getMeals();
  },
  methods: {
    getMeals() {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        .then((res) => {
          this.meals = res.data.meals;
          console.log(this.meals);
        });
    },
  },
};
</script>

<style>
.card-group {
  display: flex;
  flex-wrap: wrap;
}
.food-img{
  width: 50px;
  height: 60px;
}
</style>
