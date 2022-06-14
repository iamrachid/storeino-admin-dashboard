<template>
  <b-form>
    <b-form-group v-if="categories.length !== 0">
      <multiselect :options="categories"
                   placeholder="Search category"
                   v-model="selectedCategories"
                   label="name" track-by="slug"
                   :multiple="true"
                   :taggable="true"
                   :max="max"
                   hideSelected
                   :maxElements="'Maximum of ' + max +' categories selected. First remove a category to select another.'"
      />
    </b-form-group>
    <b-btn class="btn-alt-primary btn" :disabled="loading" @click="editCategory">Apply changes
      <div class="spinner-border text-light ml-3" style="width: 1rem; height: 1rem;" v-if="loading"/>
    </b-btn>
    <b-alert variant="danger" class="animated d-flex align-items-center mt-5" :class="{fadeIn: alert, fadeOut: !alert}"
             :show="alert">
      <div class="flex-00-auto">
        <i class="fa fa-fw fa-times-circle"></i>
      </div>
      <div class="flex-fill ml-2">
        <p class="mb-0">You should select exactly 3 categories</p>
      </div>
    </b-alert>
    <b-alert variant="success" class="animated d-flex align-items-center mt-5" :class="{fadeIn: success, fadeOut: !success}"
             :show="success">
      <div class="flex-00-auto">
        <i class="fa fa-fw fa-check"></i>
      </div>
      <div class="flex-fill ml-2">
        <p class="mb-0 text-capitalize">{{type}} Categories updated successfully</p>
      </div>
    </b-alert>
  </b-form>
</template>
<script>
import Multiselect from 'vue-multiselect';
import Api, {baseUrl} from "@/api";

export default {
  name: 'CategoriesForm',
  components: {
    Multiselect
  },
  data() {
    return {
      selectedCategories: [],
      categories: [],
      alert: false,
      loading: false,
      success: false,
    }
  },
  props: {
    max: null,
    min: {
      type: Number,
      default: 1
    },
    type: String
  },
  methods: {
    async getSelectedCategories() {
      this.selectedCategories = [];
      const url = baseUrl + '/config/' + this.type;
      const response = await Api.get(url);
      this.selectedCategories = response.data.results[this.type];
    },
    async getCategories() {
      this.categories = [];
      const url = baseUrl + '/category?limit=0';
      const response = await Api.get(url);
      this.categories = response.data.result;
    },
    editCategory() {
      this.alert = false;
      this.loading = true;
      if (this.selectedCategories.length < this.min)
        return this.alert = true;

      const url = baseUrl + '/config/' + this.type;
      const update = {};
      update[this.type] = this.selectedCategories;
      Api.patch(url, update).then(() => {
        this.success = true;
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setTimeout(() => this.success = false, 3000)
        this.loading = false;
      })
    }
  },
  mounted() {
    this.getSelectedCategories();
    this.getCategories();
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"/>

<style>
.multiselect__tag {
  background-color: #dfe6f6;
  color: #2c4e9b;
}
</style>
