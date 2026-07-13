## 基于原生JS 编写的类elementUI弹窗

###### 引用
```
<!-- 引入组件库 -->
<srcipt src = "https://wuwen502316.github.io/noticeTools/loadNoticeTools.js" type = "text/javascript"></srcipt>
```
###### 引入会自动加载相关的js和css文件


#### 使用案例
```
window._NT.message({
		state: "message",
		type: "info",
		message: "默认信息",
		duration: 3000,
		is_center: false,
		is_show_close: false,
		position: "right",
		style: {
			top: 20
		},
		space: 70
})
_NT.message();
_NT.notify({message: "显示文本"});
```
##### notify使用格式和message类似
### Attribute
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| state | 信息通知的类型 | string | -- | message |
| type | 主题 | string | -- | info |
| message | 弹窗文本 | string| -- | 默认信息 |
|duration | 显示时间, 毫秒 | number | -- | 3000 |
| is_center | 是否居中 | boolean | -- | false | 
| is_show_close | 是否可手动关闭 | boolean | true/false | false |
| position | message的位置 | string | left/right/top/bottom | -- | right|
| style | css样式 | object | -- | {top：20} |
| space | -- | number | -- | 70 |

------

#### 函数优化高频事件，防止频繁出发


###### 节流throttle: 事件触发时 ,delay时间间隔才会触发下一次
```
window._NT.throttle(callback, delay)
```
###### 防抖debounce: 比如多次点击按钮，在delay时间内，只触发最后一次
```
_NT.debounce(callback, delay)
```

- [如有问题，请联系我](https://space.bilibili.com/11281446?spm_id_from=333.1007.0.0) 
