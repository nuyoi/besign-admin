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
      <v-col cols="12" sm="9">
        <v-card>
          <v-sparkline line-width="1" smooth="10" :value="value"></v-sparkline>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
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
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>
            <span>오늘의 인기 콘텐츠</span>
            <v-spacer />
            <span>view all</span>
          </v-card-title>
          <v-select :items="select" label="운동" dense></v-select>
          <v-data-table
            :headers="contentsHeaders"
            :items="contents"
            disable-sort
            hide-default-footer
          ></v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>
            <span>일자별 요약</span>
            <v-spacer />
            <span>view all</span>
          </v-card-title>
          <v-data-table
            :headers="summaryHeaders"
            :items="summary"
            disable-sort
            hide-default-footer
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    select: ["운동", "식단"],
    contentsHeaders: [
      { text: "프로젝트", align: "start", value: "name" },
      { text: "전문가", value: "trainer" },
      { text: "조회수", value: "views" },
      { text: "참가자", value: "join" }
    ],
    contents: [
      {
        name: "복부 트레이닝 3주 완성",
        trainer: "홍길동",
        views: "4238",
        join: "30"
      },
      {
        name: "하체 단련 프로젝트",
        trainer: "김건강",
        views: "1234",
        join: "10"
      }
    ],
    summaryHeaders: [
      { text: "일자", align: "start", value: "date" },
      { text: "페이지뷰", value: "pageView" },
      { text: "방문자", value: "visit" },
      { text: "가입", value: "signup" },
      { text: "댓글", value: "comment" },
      { text: "리뷰", value: "review" }
    ],
    summary: [
      {
        date: "2020-10-12",
        pageView: "828",
        visit: "85",
        signup: "10",
        comment: "23",
        review: "9"
      },
      {
        date: "2020-10-11",
        pageView: "452",
        visit: "57",
        signup: "7",
        comment: "17",
        review: "5"
      }
    ]
  })
};
</script>
