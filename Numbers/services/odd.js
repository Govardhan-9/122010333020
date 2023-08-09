const fetchJsonData = require('./fetchJsonData');
const fetchOdd = async () => {
    try {
        const fiboUrl = 'http://20.244.56.144/numbers/odd';
        const data = await fetchJsonData(fiboUrl)
        return data["numbers"];
      } catch (error) {
        console.log(error);
      }
    return [];
}

module.exports = fetchOdd