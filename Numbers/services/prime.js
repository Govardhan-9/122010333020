const fetchJsonData = require('./fetchJsonData');
const fetchPrimes = async () => {
    try {
        const fiboUrl = 'http://20.244.56.144/numbers/primes';
        const data = await fetchJsonData(fiboUrl)
        return data["numbers"];
      } catch (error) {
        console.log(error);
      }
    return [];
}

module.exports = fetchPrimes