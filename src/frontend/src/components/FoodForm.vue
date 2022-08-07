<template>
  <div>
    <form id="foodForm" @submit.prevent="createFoodLog">
      <div class="form-floating formName">
        <input
          type="text"
          class="form-control"
          id="formName"
          placeholder="Name"
          v-model="form.name"
          required
        />
        <label for="formName">Name</label>
      </div>
      <div class="form-floating formWeight">
        <input
          type="number"
          class="form-control"
          id="formWeight"
          placeholder="Weight (g)"
          v-model="form.weight"
          required
        />
        <label for="formWeight">Weight (g)</label>
      </div>
      <div class="form-floating formCalories">
        <input
          type="number"
          step="0.1"
          class="form-control"
          id="formCalories"
          placeholder="Calories"
          v-model="form.calories"
          required
        />
        <label for="formCalories">Calories</label>
      </div>
      <div class="form-floating formFats">
        <input
          type="number"
          step="0.1"
          class="form-control"
          id="formFats"
          placeholder="Fats"
          v-model="form.fats"
        />
        <label for="formFats">Fats</label>
      </div>
      <div class="form-floating formCarbohydrates">
        <input
          type="number"
          step="0.1"
          class="form-control"
          id="formCarbohydrates"
          placeholder="Carbohydrates"
          v-model="form.carbohydrates"
        />
        <label for="formCarbohydrates">Carbohydrates</label>
      </div>
      <div class="form-floating formSugar">
        <input
          type="number"
          step="0.1"
          class="form-control"
          id="formSugar"
          placeholder="Sugar"
          v-model="form.sugar"
        />
        <label for="formSugar">Sugar</label>
      </div>
      <div class="form-floating formProtein">
        <input
          type="number"
          step="0.1"
          class="form-control"
          id="formProtein"
          placeholder="Protein"
          v-model="form.protein"
        />
        <label for="formProtein">Protein</label>
      </div>
      <div class="form-floating formSalt">
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="formSalt"
          placeholder="Salt"
          v-model="form.salt"
        />
        <label for="formSalt">Salt</label>
      </div>
      
      <el-button class="formSubmit" type="primary" native-type="submit">Submit</el-button>
      <el-button class="formClear" type="danger" native-type="button" @click="clearAllFields" plain>Clear</el-button>
      <!-- <button class="formSubmit" type="submit"></button> -->
      <!-- <button class="formClear" type="button" >
        Clear
      </button> -->
    </form>
    <p class="warning-text">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "FoodForm",
  data: function () {
    return {
      url: process.env.VUE_APP_BACKEND_URL,
      errorMessage: "",
      form: {
        name: "",
        weight: "",
        calories: "",
        fats: "",
        carbohydrates: "",
        protein: "",
        sugar: "",
        salt: "",
      },
    };
  },
  props: {
    getProgressData: Function,
    getFoodLog: Function
  },
  methods: {
    removeEmptyFields(form) {
      Object.keys(form).forEach((key) => {
        if (form[key] === "") {
          delete form[key];
        }
      });
      return form;
    },
    clearAllFields() {
      var form = this.form;
      Object.keys(form).forEach(function (index) {
        form[index] = "";
      });
      this.form = form;
    },
    async createFoodLog(event) {
      var form = this.removeEmptyFields(this.form);

      var response = await fetch(`${this.url}/api/v1/calorie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("token"),
        },
        body: JSON.stringify(form),
      });
      var data = await response.json();
      if (response.ok) {
        await this.getFoodLog();
        this.clearAllFields();
        await this.getProgressData();
      } else if (response.status == 422) {
        this.errorMessage = data.detail[0].msg;
      } else {
        this.errorMessage = data.detail;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: grid;
  gap: 15px;
  grid-auto-flow: row;
  
  .formClear{
    margin: 0;
  }

  @media screen and (max-width: 379) {
    .formName {
      grid-column: 1/3;
    }
    .formCarbohydrates {
      grid-column: 1/3;
      grid-row: 5;
    }
  }

  @media screen and (min-width: 380px) {
    .formName {
      grid-column: 1/3;
    }
    .formWeight {
      grid-column: 3/4;
    }
    .formSubmit {
      grid-column: 1/3;
    }
  }
}
@media screen and (min-width: 720px) {
  form {
    .formName {
      grid-column: 1/4;
    }
    .formWeight {
      grid-column: 4/5;
    }
    .formCalories {
      grid-column: 5/6;
    }
    .formSubmit {
      grid-column: 1/4;
    }
    .formClear {
      grid-column: 4/6;
    }
  }
}
</style>