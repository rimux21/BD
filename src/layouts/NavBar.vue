<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  class="bg-accent text-black"  >
      <q-toolbar >
        <q-toolbar-title>
          <div>
          <q-img
          src="../assets/logo_wo_background.png"
          style="width:250px "
        />
          </div>
        </q-toolbar-title>
        
        <div>

           <q-hover-btn
              flat
              padding="30px 10px" 
              color="black"
              hover-color="primary"
              label="Statistika"
              @click="scrollToElement('statistic_id');"
            />
            <q-hover-btn
              flat
              padding="30px 10px"
              color="black"
              hover-color="primary"
              label="Biblioteka"
              @click="scrollToElement('id_biblioteka');"
            />
            <q-hover-btn
              flat
              padding="30px 10px"
              color="black"
              hover-color="primary"
              label="Pagalba"
              @click="scrollToElement('id_informacija');"
            />
            
            <q-hover-btn
              flat
              padding="30px 10px"
              color="black"
              hover-color="primary"
              label="Susisiekite"
              @click="scrollToElement('id_contact_us');"
            />
            
            <!-- <q-btn class="bg-columbusBrand" label="Bibliotekos"></q-btn>
            <q-btn class="bg-columbusBrand" label="Help-desk"></q-btn>
            <q-btn class="bg-columbusBrand" label="Inbox"></q-btn> -->
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
const { getScrollTarget, setScrollPosition } = scroll
export default {
  components: {
    "q-hover-btn": require("components/HoverButton.vue").default,
  },
  name: 'NavBar',
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    }
  },
  methods:{
scrollToElement (id) {
            let el = document.getElementById(id)
            const target = getScrollTarget(el)
            const offset = el.offsetTop + 3
            const duration = 900
            setScrollPosition(target, offset, duration)
          }
}
}
</script>
<style>

</style>