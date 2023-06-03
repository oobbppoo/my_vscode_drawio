
Use `returnbounds` to get xml right after load:
```js
// Sends the bounds of the graph to the host after parsing
if (urlParams['returnbounds'] == '1' || urlParams['proto'] == 'json')
```
安装依赖：
npm install
npm audit fix --force

创建属性栏代码：
StyleFormatPanel.prototype.addProperties = function(div, properties, state)
属性栏勾选CheckBox回调：
applyStyleVal(pName, input.checked? '1' : '0', prop);
创建选择框：
var select = document.createElement('select');
编辑属性对话框：
var EditDataDialog = function(ui, cell)
添加属性按钮：
var addBtn = mxUtils.button(mxResources.get('addProperty'), function()
编辑属性应用按钮：
var applyBtn = mxUtils.button(mxResources.get('apply'), function()