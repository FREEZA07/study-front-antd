/**
 * 假数据
 * 为组件测试预编写的假数据
 */


export const data = {
  // 字段数据
  fieldList: [
    {
      fieldType: 'string',
      inputType: 'TEXT_INPUT',
      fieldName: 'username',
      fieldText: '账号',
      value: '1',
    },
    {
      fieldType: 'string',
      inputType: 'TEXT_INPUT',
      fieldName: 'password',
      fieldText: '密码',
      value: '1',
    },
    {
      fieldType: 'number',
      inputType: 'NUMBER_INPUT',
      fieldName: 'age',
      fieldText: '年龄',
      value: '20',
    },
    {
      fieldType: 'string',
      inputType: 'SINGLE_SELECT',
      fieldName: 'userType',
      fieldText: '用户类型',
      options: [
        { value: 'A', text: '一级用户' },
        { value: 'B', text: '一级用户' },
      ],
      value: 'A'
    },
    {
      fieldType: 'string',
      inputType: 'MULTIPLE_SELECT',
      fieldName: 'technicalDirection',
      fieldText: '技术方向',
      options: [
        { value: 'front', text: '前端' },
        { value: 'backd', text: '后端' },
      ],
      value: 'front,backd'
    },
    {
      fieldType: 'string',
      inputType: 'DATE_SELECT',
      fieldName: 'creationDate',
      fieldText: '创建日期',
      value: '2021-01-01',
    },
    {
      fieldType: 'string',
      inputType: 'TIME_SELECT',
      fieldName: 'creationTime',
      fieldText: '创建时间',
      value: '2021-01-01 00:00:00',

    },
  ],
};