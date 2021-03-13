/**
 * 练习例子 - 动态表单
 * @since 2021-02-24
 */

import React from 'react';
import moment from 'moment';

import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';

import { data } from './data';
import { arrayToObject } from '../../common';

/**
 * 获取规则提示
 * @param {String} type       规则类型（默认值为必输规则）
 * @param {String} filedName  字段名称
 */
// function getRuleMessage(type = 'required', filedName) {
//   if (type === 'required') {
//     return `Please input your${filedName}`;
//   }
// }

/**
 * 获取表单项
 * @param {Object} fieldData 字段对象
 * @param {Object} formItemCustomProps  表单子项灵活参数
 */
function getFormItem(fieldData = {}) {

  // 动态属性
  const {
    fieldName: name,
    fieldText: text,
    formItemCustomProps: customProps,
  } = fieldData;

  // 固定属性
  const commonProps = {
    name,
    label: text || name,
  };

  return (
    <Form.Item
      {...commonProps}
      {...customProps}
    >
      {getInputComponent(fieldData)}
    </Form.Item>
  );
}

/**
 * 获取输入组件
 * @param {Object} fieldData 字段对象
 * @param {Object} componentCustomProps 输入组件灵活参数
 */
function getInputComponent(fieldData = {}) {

  // 动态属性
  const { componentCustomProps: customProps } = fieldData;

  // 固定属性
  const commonProps = {
    style: { width: '100%' },
    allowClear: true,
  };

  // 文本输入
  if (fieldData.inputType === 'TEXT_INPUT') {
    return (
      <Input
        {...commonProps}
        {...customProps}
      />
    );
  }

  // 数字输入
  if (fieldData.inputType === 'NUMBER_INPUT') {
    return (
      <InputNumber
        {...commonProps}
        {...customProps}
      />
    );
  }

  // 日期选择
  if (fieldData.inputType === 'DATE_SELECT') {
    return (
      <DatePicker
        format="YYYY-MM-DD"
        {...commonProps}
        {...customProps}
      />
    );
  }

  // 时间选择
  if (fieldData.inputType === 'TIME_SELECT') {
    return (
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        {...commonProps}
        {...customProps}
      />
    );
  }

  // 单选下拉
  if (fieldData.inputType === 'SINGLE_SELECT') {
    return (
      <Select
        {...commonProps}
        {...customProps}
      >
        {(fieldData.options || []).map(({ value, text }) => (
          <Select.Option
            title={text}
            value={value}
          >
            {text}
          </Select.Option>
        ))}
      </Select>
    );
  }

  // 多选下拉
  if (fieldData.inputType === 'MULTIPLE_SELECT') {
    return (
      <Select
        mode='multiple'
        {...commonProps}
        {...customProps}
      >
        {(fieldData.options || []).map(({ value, text }) => (
          <Select.Option
            title={text}
            value={value}
          >
            {text}
          </Select.Option>
        ))}
      </Select>
    );
  }

  return (
    <Input
      {...commonProps}
      {...customProps}
    />
  );
}


export default function DynamicForm(props) {
  const { fieldList = [] } = data;

  // 表单初始值
  const initialValues = arrayToObject(fieldList.map(item => {

    // 多选下拉初始值格式初始化（数组）
    if (item.inputType === 'MULTIPLE_SELECT') {
      return {
        ...item,
        value: item.value?.split(','),
      };
    }

    // 日期选择初始值格式初始化（moment日期）
    if (item.inputType === 'DATE_SELECT') {
      return {
        ...item,
        value: moment(item.value),
      };
    }

    // 时间选择初始值格式初始化（moment时间）
    if (item.inputType === 'TIME_SELECT') {
      return {
        ...item,
        value: moment(item.value),
      };
    }

    return item;
  }), 'fieldName');

  return (
    <Form
      initialValues={initialValues}
    >
      <div>练习例子 - 动态表单</div>
      {fieldList.map(fieldData => getFormItem(fieldData))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}