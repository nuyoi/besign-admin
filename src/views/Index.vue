<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
export default {
  name: "Index",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar"),
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreView: () => import("@/components/core/View")
  }
};
</script>
