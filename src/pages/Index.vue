<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#7cd1d0, #2a7776);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-columbusBrand">
             <h4 class="text-h5 text-white q-my-md">Login</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="username" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="columbusBrand" class="full-width text-white" label="Sign In" type="s" @click="login"/>
          </q-card-actions>

          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
          <q-card rounded style="width:300px;height:50px;">
            <q-card-section class="text-center q-pa-sm">
              <div v-if="error" class="text-black bg-red-5">Wrong username or password</div>
            </q-card-section>
          </q-card>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Login',
  data () {
    return {
        username: '',
        password: '',
        error: false,
        message: 'hi'
    }
  },
}
</script>

<style>
</style>
