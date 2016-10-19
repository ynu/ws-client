# ws-client
基于金智主数据平台的云南大学WebService客户端

## How to Install
`npm install ynu-ws-client`

## 示例

**注意:** 由于有防火墙限制，以下实例只能运行在云南大学校内。

使用`ES7`：
```javascript
import Client from 'ynu-ws-client';

// 创建客户端实例，需要填入正确的用户名和密码
const client = new Client({
  username: 'username',
  password: 'password',
});

// 使用invoke方法调用服务
const result = await client.invoke(8141, 1, 10, [{ key: 'XXMC', value: '云南大学' }]);
/*
返回结果：
{
  message: '调用成功!',
  returnCode: '600000',
  data: { columns: [ 'rn', 'xxdm' ], values: [ [Object] ] },
  pageNum: 0,
  pageSize: 0,
  total: '1'
}
 */
```

## API
### Client(options)
Client的构造函数。

#### 参数
`options`: 构造函数参数。可用的参数如下：

| 参数名称 | 必须 | 描述 | 默认值 |
| --- | --- | --- | --- |
| username | 是 | 连接服务器的用户名 | 无 |
| password | 是 | 连接服务器的密码 | 无 |

### invoke(interfaceId, pageNum, pageSize, params) : Promise
调用远程服务

#### 参数
- `interfaceId`: 服务接口Id
- `pageNum`: 返回数据的页码。从1开始计数，默认为1.
- `pageSize`: 返回数据每页的数量。
- `params`: 服务接口需要的参数。一个数组，其元素是包含key和value属性的对象。

#### 返回值
函数返回一个Promise对象。
- 调用成功时，resolve返回的是调用结果，一个JSON对象：
```javascript
{
  message: '调用成功!',           // 调用结果信息
  returnCode: '600000',         // 返回码（详见下文）
  data: {                       // 返回数据
    columns: [ 'rn', 'xxdm' ],  // 数据列名称
    values: ['xx', 'yy']        // 列对应的值
  },
  pageNum: 0,                   // 数据页码
  pageSize: 0,                  // 数据每页数目
  total: '1'                    // 查询获得的数据总条数
}
```

## 其他
### 返回码

| 序号 | 返回码 | 类型 |
| --- | --- | --- |
| 1 | 600000 | 调用成功! |
| 2 | 601000 | 调用成功, 未查找到数据! |
| 3 | 602002 | 无效的接口或接口未启用，请联系管理员! |
| 4 | 602001 | 调用失败, 请查看返回的异常内容并联系管理员! |
| 5 | 603000 | 参数错误, 请检查后重新调用! |
| 6 | 603001 | 缺少必填参数, 请检查后重新调用! |
| 7 | 603002 | 参数格式错误, 请检查后重新调用! |
| 8 | 603003 | 分页参数错误, 请检查后重新调用! |
| 9 | 604001 | 您的机器的IP地址没有权限调用此接口, 请联系管理员 |
| 10 | 604002 | 您的账号没有权限调用此接口, 请联系管理员! |
| 11 | 609001 | 调用失败, 请联系管理员! |

### 服务接口


#### 获取组织机构标准 (810000001)
##### 请求参数
无
##### 返回字段

| 名称 | 中文名 |类型 | 说明 |
| --- | --- | --- | --- |
| CC | 层次 | 字符串 |  |
| LS | 上级代码 | 字符串 |  |
| PX | 排序 | 字符串 |  |
| DM | 代码 | 字符串 |  |
| MC | 名称 | 字符串 |  |


##### 返回数据结构示例
```javascript
{
  "returnCode" : "600000",
  "message" : "调用成功!",
  "total" : 1,
  "pageSize" : 10,
  "pageNum" : 1,
  "data" : {
    "columns" : [ "CC", "LS", "PX", "DM", "MC" ],
    "values" : [ [ "xx", "xx", "xx", "xx", "xx" ] ]
  }
}
```
