var uuid = require('node-uuid')

/**
 * 生成 GUID
 * @returns {*}
 */
exports.guid = function () {
    var str = uuid.v4()
    var regex = new RegExp('-', 'g')
    str = str.replace(regex, '')
    return str
}
