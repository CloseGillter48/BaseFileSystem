const CRYPTO = require('crypto');

/**
 * @aes192加密模块
 * @param str string 要加密的字符串
 * @param secret string 要使用的加密密钥(要记住,不然就解不了密啦)
 * @retrun string 加密后的字符串
 * */
module.exports.getEncAse192 = function (str, secret) {

    //设置加密类型 和 要使用的加密密钥
    var cipher = CRYPTO.createCipher("aes192", secret);

    //编码方式从utf-8转为hex;
    var enc = cipher.update(str, "utf8", "hex");

    //编码方式从转为hex;
    enc += cipher.final("hex");

    //返回加密后的字符串
    return enc;
}

/**
 * @aes192解密模块
 * @param str string 要解密的字符串
 * @param secret string 要使用的解密密钥(要和密码的加密密钥对应,不然就解不了密啦)
 * @retrun string 解密后的字符串
 * */
module.exports.getDecAse192 = function (str, secret) {

    var decipher = CRYPTO.createDecipher("aes192", secret);

    //编码方式从hex转为utf-8;
    var dec = decipher.update(str, "hex", "utf8");

    //编码方式从utf-8;
    dec += decipher.final("utf8");

    return dec;
}