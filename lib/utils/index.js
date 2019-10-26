/**
 *
 *
 * @export
 * @param {*} object
 * @param {*} keys
 * @returns {newObj}
 */
export function retainKeys(object, keys) {
  const newObj = {}
  keys.forEach(key => {
    newObj[key] = object[key]
  })
  return newObj
}

/**
 *
 *
 * @export
 * @param {*} fileObj
 * @returns
 */
export function isFile(fileObj) {
  return fileObj.constructor === File
}

/**
 *
 * @param {*} str
 */
export function firstLowerCase(str) {
  return str.replace(/^\S/, s => s.toLowerCase())
}
