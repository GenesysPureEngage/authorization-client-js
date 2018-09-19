/**
 * Authentication API
 * Authentication API
 *
 * OpenAPI spec version: 9.0.000.21.1405
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/AuthSchemeLookupData', 'model/ChangePasswordOperation', 'model/CloudUserDetails', 'model/DefaultOAuth2AccessToken', 'model/ErrorResponse', 'model/OpenIdUserInfo', 'model/ResponseStatus', 'model/UserRole', 'api/AuthenticationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApiResponse'), require('./model/AuthSchemeLookupData'), require('./model/ChangePasswordOperation'), require('./model/CloudUserDetails'), require('./model/DefaultOAuth2AccessToken'), require('./model/ErrorResponse'), require('./model/OpenIdUserInfo'), require('./model/ResponseStatus'), require('./model/UserRole'), require('./api/AuthenticationApi'));
  }
}(function(ApiClient, ApiResponse, AuthSchemeLookupData, ChangePasswordOperation, CloudUserDetails, DefaultOAuth2AccessToken, ErrorResponse, OpenIdUserInfo, ResponseStatus, UserRole, AuthenticationApi) {
  'use strict';

  /**
   * Authentication_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AuthenticationApi = require('index'); // See note below*.
   * var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AuthenticationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AuthenticationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 9.0.000.21.1405
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The AuthSchemeLookupData model constructor.
     * @property {module:model/AuthSchemeLookupData}
     */
    AuthSchemeLookupData: AuthSchemeLookupData,
    /**
     * The ChangePasswordOperation model constructor.
     * @property {module:model/ChangePasswordOperation}
     */
    ChangePasswordOperation: ChangePasswordOperation,
    /**
     * The CloudUserDetails model constructor.
     * @property {module:model/CloudUserDetails}
     */
    CloudUserDetails: CloudUserDetails,
    /**
     * The DefaultOAuth2AccessToken model constructor.
     * @property {module:model/DefaultOAuth2AccessToken}
     */
    DefaultOAuth2AccessToken: DefaultOAuth2AccessToken,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The OpenIdUserInfo model constructor.
     * @property {module:model/OpenIdUserInfo}
     */
    OpenIdUserInfo: OpenIdUserInfo,
    /**
     * The ResponseStatus model constructor.
     * @property {module:model/ResponseStatus}
     */
    ResponseStatus: ResponseStatus,
    /**
     * The UserRole model constructor.
     * @property {module:model/UserRole}
     */
    UserRole: UserRole,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi
  };

  return exports;
}));
