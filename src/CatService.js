export default class CatService {
  static async getCat() {
    try {
      const response = await fetch("https://api.thecatapi.com/v/images/search?limit=1");
      console.log(response);
      const jsonifiedResponse = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error
    }
  }
}