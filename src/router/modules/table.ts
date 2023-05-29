import { table } from "@/router/enums";
import hot from "@/assets/login/avatar.svg?component";

export default {
  path: "/",
  redirect: "/test-task",
  meta: {
    icon: hot,
    title: "pure-admin-table",
    rank: table
  },
  children: [
    {
      path: "/test-task",
      name: "TestTask",
      component: () => import("@/views/pure-table/index.vue"),
      meta: {
        title: "测试任务"
      }
    }
  ]
} as RouteConfigsTable;
