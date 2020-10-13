<template>
  <v-app>
    <core-app-bar />
  </v-app>
</template>

<script>
export default {
  name: "Index",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar")
  }
};
</script>
