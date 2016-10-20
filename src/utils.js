// 将Web服务返回的数据组合成JSON对象
export const composeData = data => data.values.map(column =>
  column.item.reduce(
    (obj, value, curIndex) => ({ ...obj, [data.columns[curIndex]]: value }),
    {}
  )
);

export default composeData;
