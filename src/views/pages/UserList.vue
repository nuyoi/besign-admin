<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            유저 검색
            <v-spacer />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-radio-group row>
            <span>이메일 수신 여부</span>
            <v-radio label="전체"></v-radio>
            <v-radio label="수신 허용"></v-radio>
            <v-radio label="수신 거부"></v-radio>
          </v-radio-group>
          <v-card-actions>
            <span>전체 회원 (2830)</span>
            <v-spacer />
            <v-btn>문자 발송</v-btn>
            <v-btn>이메일 발송</v-btn>
          </v-card-actions>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="members"
            item-key="name"
            show-select
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    selected: [],
    headers: [
      {
        text: "회원 이름",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "이메일", value: "email" },
      { text: "연락처", value: "phone" },
      { text: "가입일", value: "join" },
      { text: "분류", value: "isPro" }
    ],
    members: [
      {
        name: "홍길동",
        email: "hong@naver.com",
        phone: "010-1234-5678",
        join: "May 26, 2020",
        isPro: "트레이너"
      },
      {
        name: "김회원",
        email: "kim@google.com",
        phone: "010-1234-5678",
        join: "May 30, 2020",
        isPro: "일반회원"
      }
    ]
  })
};
</script>
