#### 目录介绍 List
```js
src
├── app.vue
├── index.js
├── index.less
├── router.js
└── components
├──   ├── Home.vue
├──   └── ...
└── assets
      └── ...
```


#### 更新记录 Update record

2018-02-27

- 删除依赖重新下载后出现报错信息

- 解决方案如下

```
if (env && env[1] && env[1].targets) {
      return env[1].targets;
}
```

- 上面是报错依赖需要修改的代码 `if` 后面的判断条件需要修改一下

- index.html里面直接引用js貌似失效了

- 所以还是npm install vue吧


2018-02-08

- 虽然Star很少，但是用的人很多，我都是线下分享的
- 如果遇到什么问题可以加我的微信 `zhangchuang0816`
- 拉取以后记得先下载依赖
- `npm run dev`
- 本次更新添加一个小页面，方便查看，没有什么实际意义

---

- Although Star is very few, but there are a lot of people, I share it under the line.
- If you have any problems you can add to my WeChat `zhangchuang0816`
- After pulling, remember to download the dependency first
- `npm run dev`
- This update adds a small page, which is convenient to view and has no practical significance.

---

##### 运行 Run
```
git clone https://github.com/vueadmin/parcel-vue.git

npm i

npm run dev
```

##### 编译 Build
```
npm run build
```