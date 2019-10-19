# 选项

## 参数

支持 Form 组件的所有属性，详见：[文档](https://element.eleme.cn/#/zh-CN/component/form)，除此之外：

|      属性       |    类型    | 默认值 |                  描述                   |
| :-------------: | :--------: | :----: | :-------------------------------------: |
|   form-items    |  `Array`   |        |               表单项数组                |
|    form-data    |  `Object`  |        |   表单数据，优先级比`get-form-data`高   |
|  get-form-data  | `Function` |        |            获取表单数据方法             |
| need-submit-btn | `Boolean`  |  true  |            是否需要提交按钮             |
| need-reset-btn  | `Boolean`  |  true  |            是否需要重置按钮             |
|  btn-disabled   | `Boolean`  | false  |              禁用提交按钮               |
| submit-btn-text |  `String`  |  提交  |              提交按钮文字               |
| reset-btn-text  |  `String`  |  重置  |              重置按钮文字               |
|  enable-enter   | `Boolean`  |  true  | 表单项按下回车提交，`textarea`类型除外  |
|      size       |  `String`  |        | 表单项尺寸，可选：medium / small / mini |

### form-items

form-items 的子项是一个对象，属性如下：

| 属性  |   类型   |                                      描述                                      |
| :---: | :------: | :----------------------------------------------------------------------------: |
| label | `String` |                                    标签文本                                    |
|  key  | `String` |                                  对应的属性值                                  |
| type  | `String` |                     对应的表单项组件，可选值参见《表单项》                     |
| meta  | `Object` |                      扩展属性，根据不同表单项有不同的选值                      |
| rules | `Array`  | 数据验证，详见 [Element 文档](https://element.eleme.cn/#/zh-CN/component/form) |

#### form-item 的 meta 属性

下面是通用属性，其余属性根据表单项类型取决。

|     属性      |   类型    |       描述       |
| :-----------: | :-------: | :--------------: |
| disabledEnter | `Boolean` | 禁用按下回车提交 |

## 事件

|  名称   |   参数   |       描述       |
| :-----: | :------: | :--------------: |
| submit  | formData |   提交表单回调   |
|  reset  | formData |   重置表单回调   |
| warning |    -     | 数据验证失败回调 |

## 方法

|  名称  |   描述   |
| :----: | :------: |
| submit | 提交表单 |
| reset  | 重置表单 |

