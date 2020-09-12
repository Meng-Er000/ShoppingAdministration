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

### vue-table-with-tree-grid依赖

使用这个组件，可以很好的完成树形分类。具体使用方法请详细观看官网的东西

### vue-quill-editor依赖

使用这个组件，可以实现文本编辑器。就例如qq日志中的那个文本编辑器一样，具体查看github上面

### lodash依赖，js实用工具库

cloneDeep（obj）可以实现深拷贝，把数据重新复制一次，然后对复制之后的数据来进行操作，更加方便。

### git操作

<<<<<<< HEAD
把创建的分支推送到github上面： git push -u origin 分支名称
=======
把创建的分支推送到github上面: git push -u origin 分支名称
>>>>>>> dataStatistics

切换到主分支：git checkout

把创建的分支合并到master主分支上面： git merge 新创建的分支名称

<<<<<<< HEAD
把本地的master代码推送到github上面： git push
=======
把本地的master代码推送到github上面： git push

### 在vue中使用echarts

1. 导入echarts

   ```
   import echarts from 'echarts'
   ```

2. 使用echarts时候，我们需要对echarts来设置一个具有宽度和高度的DOM元素

   ```
   <div id="main" style="width: 600px;height: 400px;"></div>
   ```

3. 在mounted钩子函数中进行配置初始化等等操作

   - 基于准备好的dom，初始化echarts实例

     ```
     const myChart = echarts.init(document.getElementById('main'))
     ```

   - 指定图表的配置项和数据

     ```
     var option = {
                 title: {
                     text: 'ECharts 入门示例'
                 },
                 tooltip: {},
                 legend: {
                     data:['销量']
                 },
                 xAxis: {
                     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                 },
                 yAxis: {},
                 series: [{
                     name: '销量',
                     type: 'bar',
                     data: [5, 20, 36, 10, 10, 20]
                 }]
             };
     ```

   - 使用刚指定的配置项和数据显示图表

     ```
     myChart.setOption(option); 
     ```



>>>>>>> dataStatistics
