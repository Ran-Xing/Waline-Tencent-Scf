## Waline 腾讯云函数

- [腾讯云函数](https://console.cloud.tencent.com/scf/list-detail)
- [Waline](https://waline.js.org/)
- [Waline 环境变量](https://waline.js.org/reference/server/env.html)

### 使用方法
1. 首先前往 `腾讯云函数`
    -> `函数服务` -> `新建`
    -> `从头开始`
    -> `Web函数` -> `运行环境`: `nodejs 18` -> `公网访问`
    -> `高级配置` -> `环境变量` -> 添加对应的环境变量,可参考官网数据库信息 (也可创建好后在函数管理函数配置页面编辑添加)

2. 进入 函数代码 代码编辑页面
    将 `node_modules` 目录删了
    将 `scf_bootstrap` 和 `package.json` 内容拷贝进去
    打开终端,运行 `npm i -P -s @waline/vercel`
   ![img.png](img.png)

3. 点击 `部署`
