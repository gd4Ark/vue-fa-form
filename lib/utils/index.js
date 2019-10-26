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
