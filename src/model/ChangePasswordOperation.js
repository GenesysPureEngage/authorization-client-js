/**
 * Authentication API
 * Authentication API
 *
 * OpenAPI spec version: 9.0.000.00.978
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.ChangePasswordOperation = factory(root.AuthenticationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePasswordOperation model module.
   * @module model/ChangePasswordOperation
   * @version 9.0.000.00.978
   */

  /**
   * Constructs a new <code>ChangePasswordOperation</code>.
   * @alias module:model/ChangePasswordOperation
   * @class
   * @param userName {String} 
   * @param oldPassword {String} 
   * @param newPassword {String} 
   */
  var exports = function(userName, oldPassword, newPassword) {
    var _this = this;

    _this['userName'] = userName;
    _this['oldPassword'] = oldPassword;
    _this['newPassword'] = newPassword;
  };

  /**
   * Constructs a <code>ChangePasswordOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordOperation} obj Optional instance to populate.
   * @return {module:model/ChangePasswordOperation} The populated <code>ChangePasswordOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;
  /**
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;



  return exports;
}));


