<template>
  <q-layout view="hHh lpR fFf">
    <!-- hHh lpR fFf
    lHh Lpr lFf
     -->
    <q-header elevated>
      <q-toolbar class="row items-center q-py-md bg-grey-9">
        <div class="col">
          <div class="row items-center justify-start">
            <q-btn
              flat
              dense
              round
              size="20px"
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
            <q-icon
              class="q-ml-md"
              name="smart_display"
              color="red-7"
              size="45px"
            />
            <q-toolbar-title class="text-h5 text-capitalize text-weight-bold">
              YouTube
            </q-toolbar-title>
          </div>
        </div>

        <div class="col">
          <div class="row items-center justify-center">
            <div class="col">
              <q-input dense standout dark flat placeholder="Search"> </q-input>
            </div>
            <div>
              <q-btn
                icon="search"
                unelevated
                flat
                class="bg-grey-8 q-pa-sm q-px-md"
              ></q-btn>
            </div>
            <div class="q-mx-md">
              <q-btn round color="grey-10" icon="mic" />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row justify-end">
            <q-btn round icon="video_call" unelevated flat class="q-pa-sm">
              <q-tooltip>Create</q-tooltip></q-btn
            >
            <q-btn round icon="apps" unelevated flat class="q-pa-sm"
              ><q-tooltip>Apps</q-tooltip></q-btn
            >
            <q-btn round icon="notifications" unelevated flat class="q-pa-sm"
              ><q-tooltip>Notification</q-tooltip></q-btn
            >
            <q-btn round color="grey-10" icon="person"
              ><q-tooltip>Account</q-tooltip></q-btn
            >
          </div>
        </div>
      </q-toolbar>
    </q-header>
     <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-scroll-area class="fit">
        <q-list>
          <div v-for="(data, index) in dataPool" :key="index">
            <div
              class="text-h5 text-weight-bold q-ma-md q-my-md text-uppercase text-grey-8"
              v-if="index === 'linkList3'"
            >
              More from YouTube
            </div>
            <left-drawer v-for="link in data" :key="link" v-bind="link">
            </left-drawer>
            <q-separator class="q-my-md" />
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

   
  </q-layout>
</template>

<script>
import LeftDrawer from "src/components/LeftDrawer.vue";
import router from "src/router";

export default {
  name: "MainLayout",

  components: {
    LeftDrawer,
  },

  data() {
    return {
      leftDrawerOpen: false,
      dataPool: {
        linksList: [
          {
            title: "Home",
            icon: "home",
            link: "/",
          },
          {
            title: "Trending",
            icon: "whatshot",
            link: "trending",
          },
          {
            title: "Subscriptions",
            icon: "subscriptions",
            link: "subscriptions",
          },
        ],
        linkList2: [
          {
            title: "Library",
            icon: "video_library",
            link: "library",
          },
          {
            title: "History",
            icon: "history",
            link: "history",
          },
          {
            title: "Watch Later",
            icon: "watch_later",
            link: "watch-history",
          },
          {
            title: "Liked Videos",
            icon: "thumb_up",
            link: "liked-videos",
          },
        ],
        linkList3: [
          {
            title: "YouTube Premium",
            icon: "smart_display",
            link: "premium",
          },
          {
            title: "Movies & Shows",
            icon: "theaters",
            link: "movies-shows",
          },
          {
            title: "Gaming",
            icon: "videogame_asset",
            link: "gaming",
          },
          {
            title: "Live",
            icon: "live_tv",
            link: "live",
          },
        ],
        linkList4: [
          {
            title: "Settings",
            icon: "settings",
            link: "settings",
          },
          {
            title: "Report history",
            icon: "flag",
            link: "report-history",
          },
          {
            title: "Help",
            icon: "help",
            link: "help",
          },
          {
            title: "Send feedback",
            icon: "feedback",
            link: "send-feedback",
          },
        ],
      },
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>

<style scoped></style>
