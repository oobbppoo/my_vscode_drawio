
Use `returnbounds` to get xml right after load:
```js
// Sends the bounds of the graph to the host after parsing
if (urlParams['returnbounds'] == '1' || urlParams['proto'] == 'json')
```
安装依赖：
npm install
npm audit fix --force

开发：在浏览器中开发drawio纯前端静态页面，开发完成先构建drawio，再启动插件，才能在插件中生效
构建drawio：在drawio/etc/build目录执行ant
执行package.json中的build-drawio脚本即可
要安装JDK和ant

右边工具栏：
创建右边Style栏：
StyleFormatPanel.prototype.init = function()
创建右边Style下的Property栏代码：
StyleFormatPanel.prototype.addProperties = function(div, properties, state)
创建右边Property栏勾选CheckBox回调：
applyStyleVal(pName, input.checked? '1' : '0', prop);
在画布中每次鼠标焦点变化都会调用刷新创建右边菜单：
Format.prototype.immediateRefresh = function()
    选中图像会进入：
    label.style.backgroundColor = Format.inactiveTabBackgroundColor;
    没选中图像会进入：
    if (graph.isSelectionEmpty())

右键编辑数据：
创建选择框：
var select = document.createElement('select');
编辑属性对话框：
var EditDataDialog = function(ui, cell)
添加属性按钮：
var addBtn = mxUtils.button(mxResources.get('addProperty'), function()
编辑属性应用按钮：
var applyBtn = mxUtils.button(mxResources.get('apply'), function()

保存自定义图像库：
点击导出按钮触发：
drawio\src\main\webapp\js\diagramly\EditorUi.js:
EditorUi.prototype.saveLocalFile -> EditorUi.prototype.doSaveLocalFile
点击设备图标触发：
function create(mode)
创建对话框：
var CreateDialog

vscode插件与drawio（webview）交互：
1、调用Draw.loadPlugin注册插件到drawio中（可扩展drawio的内容）
2、调用sendEvent发送事件给vscode
3、CustomizedDrawioClient.ts中处理vscode接收到的事件
