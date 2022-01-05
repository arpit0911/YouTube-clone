<template>
  <q-scroll-area class="fit-window">
  <q-infinite-scroll @load="onLoad" :offset="250">
    <div class="row justify q-pa-sm">
      <div v-for="(item, index) in items" :key="index" >
        <div class="q-ma-md">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="row items-center">
                <div class="col-2 self-start">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </div>
                <div class="col q-ml-sm">
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle">John Doe</div>
                  <div class="text-subtitle">1M Views . 4 days ago</div>
                </div>
                <div class="col-1">
                  <q-btn icon="more_vert" flat round> </q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none"> </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- <div class="q-ma-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="row items-center">
                  <div class="col-2 self-start">
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </div>
                  <div class="col q-ml-sm">
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle">John Doe</div>
                    <div class="text-subtitle">1M Views . 4 days ago</div>
                  </div>
                  <div class="col-1">
                    <q-btn icon="more_vert" flat round> </q-btn>
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none"> </q-card-section>
            </q-card>
          </div> -->
    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
  </q-scroll-area>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      lorem: "lorekjnksjdnfjsndfksjndfksjnd",
      items: [{}, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000);
    },
  },
};
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 400px;
}

.fit-window{
height :calc(100vh - 80px);
/* overflow-y: auto; */
/* overflow-x: hidden; */
}
</style>
