<template>
<div class="content content-narrow">
  <base-block title="Account" header-bg content-full>
   <base-block content-full>
    <b-form  @submit.prevent="edit">
          <b-form-group label="Change username" label-for="username">
            <b-form-input id="username" v-model.trim="account.username" placeholder="" required></b-form-input>
          </b-form-group>
          <button class="btn btn-alt-primary" @click="editUsername">Edit</button>
    </b-form>
  </base-block>
   <base-block content-full>
    <b-form  @submit.prevent="edit">
      <b-form-group label="Change password" label-for="password">
        <b-form-input type="password" id="password" v-model="password" placeholder="" required></b-form-input>
      </b-form-group>
      <b-form-group label="Repeat password" label-for="password">
        <b-form-input type="password" id="password" v-model="passwordVerification" placeholder="" required></b-form-input>
      </b-form-group>
      <button class="btn btn-alt-primary" @click="editPassword">Edit</button>
    </b-form>
  </base-block>
  </base-block>
</div>

</template>

<script>

import {account} from "@/data/account";

export default {
  name: "Account",
  data(){
    return {
      account: account,
      password: null,
      passwordVerification: null,
    }
  },
  methods: {
    edit(){
      console.log(this.category)
    },
    editUsername(){
      console.log(this.account.username)
    },
    editPassword(){
      console.log(this.password, this.passwordVerification)
    }
  }
}
</script>
