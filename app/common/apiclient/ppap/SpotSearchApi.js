import ApiClient from '../../../helpers/ApiClient';

const client = new ApiClient();
const endpoint = '/mapi/spots/near';

export default class SpotSearchApi {

  /**
   * パスワード認証を実施する
   * @async
   * @param {string} login_id ログインID
   * @param {string} password パスワード
   * @return {Object} 以下の連想配列 ただし、どちらかのみ値があり、残りはnullになる
   *     {Object} result: 認証用トークンを含むユーザー情報
   *     {Object} errorInfo: エラー情報
   */
  static async get(params) {

    try {
      console.log("params:", params);
      return await client.request('GET', endpoint, params);
    } catch (e) {
      alert(e)
      console.log(e);
      return [];
    }
  }
}
