### 数字和字符串拼接会得到一个字符串

### 路由导航守卫控制访问权限

![](F:\web\web\ShoppingAdministration\images\搜狗截图20200730130356.jpg)

### 通过axios拦截，来添加token

![](F:\web\web\ShoppingAdministration\images\通过axios请求拦截添加token.jpg)

### 作用域插槽

这个在表格中非常的适用，适用作用于插槽可以，很清楚的显示出这个表格当前这一行的数据。

```vue
<!--作用域插槽-->
<template slot-scope="scope">
<!--这个可以拿到当前这一行的数据内容：score.row-->
<el-switch v-model="scope.row.mg_state"></el-switch>
</template>
```

catch()  函数可以用来监听之前的错误。