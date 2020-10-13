<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                30
              </v-list-item-title>
              <v-list-item-subtitle>신규 가입자</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-card-actions>
            <v-btn block depressed>
              가입자 현황
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                60
              </v-list-item-title>
              <v-list-item-subtitle>일일 방문자</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-door-open</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-card-actions>
            <v-btn block depressed>
              방문자 현황
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                90
              </v-list-item-title>
              <v-list-item-subtitle>진행 중인 프로젝트</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-clipboard-list-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-card-actions>
            <v-btn block depressed>
              프로젝트 현황
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                10
              </v-list-item-title>
              <v-list-item-subtitle>신규 결제</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-credit-card-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-card-actions>
            <v-btn block depressed>
              결제 현황
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="9">
        <v-card>
          <v-sparkline line-width="1" smooth="10" :value="value"></v-sparkline>
        </v-card>
      </v-col>
      <v-col>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>신규 가입자</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              30
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>일반 회원</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              20
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>전문가 회원</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              10
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>총 가입자</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              1,000
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
  })
};
</script>
