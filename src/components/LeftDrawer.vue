<template>
  <q-item class="q-pa-md" clickable  @click="openTab">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" size="md" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-h6 text-weight-regular">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "LeftDrawer",
  props: ["title", "icon", "link"],
  methods:{
    openTab(){
      console.log("clicked tab", this.link);
      this.$router.push(this.link)
    }
  }
};
</script>
