<template>
  <v-navigation-drawer permanent app>
    <v-list>
      <v-list-item>
        <v-list-item-title>BESIGN ADMIN</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "대시보드", icon: "mdi-view-dashboard-outline" },
        { title: "회원 관리", icon: "mdi-account-outline" },
        { title: "프로젝트 관리", icon: "mdi-ballot-outline" },
        { title: "디자인 관리", icon: "mdi-pencil-outline" },
        { title: "문의 관리", icon: "mdi-help-circle-outline" },
        { title: "캘린더", icon: "mdi-calendar-outline" }
      ]
    };
  }
};
</script>