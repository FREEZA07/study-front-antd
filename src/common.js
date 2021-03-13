
/* --------------------- 通用 --------------------- */

/**
 * 读取路径参数
 * @param {String} path 完整路径
 * @return {Number} object.number           参数数量
 * @return {Array} object.valueList         参数列表（参数值 示例: [1,2,3]）
 * @return {Array} object.paramList         参数列表（参数对 示例: [a=1,b=2,c=3]）
 * @return {Object} object.paramListObject  参数列表（对象化 示例: {a:1,b:2,c:3}）
 * @author C
 */
export function getParamsByPath(path = '') {
  const paramList = (path.split('?') && path.split('?')[1] && path.split('?')[1].split('&')) || [];

  // 参数存在校验
  if (paramList.length === 0) {
    return {
      path,
      number: paramList.length,
      success: false,
      message: '路径上不存在任何路径参数',
      valueList: [],
      paramList: [],
      paramListObject: {},
    };
  }

  const paramListObject = {};
  paramList.forEach((item = '') => {
    paramListObject[item.split('=')[0]] = item.split('=')[1];
  });

  const valueList = paramList.map(item => item.split('=')[1]);

  return {
    path,
    number: paramList.length,
    success: true,
    valueList,
    paramList,
    paramListObject,
  };
}

/**
 * 键值转换（值集翻译）
 * @param {Array} arr   键值列表 
 * @param {String} val  被转换值（值）
 * @param {String} code 键属性名（原值变量名）
 * @param {String} desc 值属性名（翻译变量名）
 * @author C
 */
export function translate(arr = [], val = '', code = 'code', desc = 'desc') {
  let result = val;

  // 数组格式校验
  if (!Array.isArray(arr)) {
    console.error(`键值列表格式有误`);
    return result;
  }

  // 数组空校验
  if (arr.length === 0) {
    console.error(`键值列表为空`);
    return result;
  }

  arr.forEach((item = {}) => {
    if (item[`${code}`] === val) {
      result = item[`${desc}`];
    }
  });

  return result;
}

/**
 * 对象数组转对象
 * @param {Array} arr 数组
 * @param {String} propName   对象属性名 对应的属性（默认为name）
 * @param {String} propValue  对象属性值 对应的属性（默认为value）
 * @author C
 */
export function arrayToObject(arr = [], propName = 'name', propValue = 'value') {
  let obj = {};

  // 数组格式校验
  if (!Array.isArray(arr)) {
    console.error(`对象数组格式有误`);
    return obj;
  }

  // 数组空校验
  if (arr.length === 0) {
    console.error(`对象数组为空`);
    return obj;
  }

  arr.forEach(item => {
    // 对象格式校验
    if (Object.prototype.toString.call(item) !== '[object Object]') {
      console.error(`数组元素为空`);
      return obj;
    }
    obj[`${item[`${propName}`]}`] = item[`${propValue}`];
  })
  return obj;
}

/* --------------------- 依赖浏览器 --------------------- */

/**
 * base64加密
 * @param {String} val 被加密值
 * @author C
 */
export function encryptBy64(val = '') {
  // encodeURIComponent URL编码（此处使用针对于中文字符）
  return window.btoa(encodeURIComponent(val));
}

/**
 * base64解密
 * @param {String} val 被解密值
 * @author C
 */
export function decryptBy64(val = '') {
  // decodeURIComponent URL解码（此处使用针对于中文字符）
  return decodeURIComponent(window.atob(val));
}



