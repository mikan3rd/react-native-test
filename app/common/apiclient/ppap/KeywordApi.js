import ApiClient from '../../../helpers/ApiClient';

const client = new ApiClient();
const endpoint = '/mapi/keywords';

export default class KeywordApi {

  static async get() {

    try {
      return await client.request('GET', endpoint);
    } catch (e) {
      console.log('あちゃー');
      return [];
    }
  }
}
