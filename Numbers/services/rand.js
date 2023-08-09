const fetchJsonData = require('./fetchJsonData');
const fetchRand = async () => {
    try {
        const fiboUrl = 'http://20.244.56.144/numbers/rand';
        const data = await fetchJsonData(fiboUrl)
        return data["numbers"];
      } catch (error) {
        console.log(error);
      }
    return [];
}

module.exports = fetchRand