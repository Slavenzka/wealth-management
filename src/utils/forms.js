export const isEmailValid = value => {
  const valueArray = value.split('')

  return valueArray.length > 0
    ? valueArray.length >= 8 &&
    valueArray.length < 50 &&
    // в строке есть символ @
    valueArray.indexOf('@') !== -1 &&
    // в строке всего один символ @
    valueArray.indexOf('@') === valueArray.lastIndexOf('@') &&
    // в строке символ @ расположен так, что перед ним как минимум 2 символа
    valueArray.indexOf('@') > 1 &&
    // в строке символ @ расположен так, что после него как минимум 5 символов, например ab.ua
    valueArray.indexOf('@') < value.length - 5 &&
    // в строке есть точка
    valueArray.indexOf('.') !== -1 &&
    // в строке точка не первая
    valueArray.indexOf('.') > 0 &&
    // в строке последняя точка расположен так, что после нее как минимум 2 символа, например .ua
    valueArray.lastIndexOf('.') < value.length - 2 &&
    // в строке последняя точка находится раньше @
    valueArray.lastIndexOf('.') > valueArray.lastIndexOf('@') &&
    // в строке нет двух точек подряд
    value.indexOf('..') === -1
    : true
}
