const primeService = require('../services/prime');
const oddService = require('../services/odd');
const randService = require('../services/rand');
const fibService = require('../services/fibo');
const fetchJsonData = require('../services/fetchJsonData'); // Adjust the path accordingly

exports.getNumbers = async (req, res) => {
  const urls = req.query.url || [];
  var list = [];

  try {
    for (const url of urls) {
      if (url.includes('primes')) {
        const primeNumbers = await primeService();
        console.log('primeNumbers:', primeNumbers);
        list = [...list, ...primeNumbers];
      }
      if (url.includes('odd')) {
        const oddNumbers = await oddService();
        console.log('oddNumbers:', oddNumbers);
        list = [...list, ...oddNumbers];
      }
      if (url.includes('rand')) {
        const randNumbers = await randService();
        console.log('randNumbers:', randNumbers);
        list = [...list, ...randNumbers];
      }
      if (url.includes('fib')) {
        const fibNumbers = await fibService();
        console.log('fibNumbers:', fibNumbers);
        list = [...list, ...fibNumbers];
      }
      if (url.includes('numbers/primes')) {
        const data = await fetchJsonData(url);
        list = [...list, ...data.numbers];
      }
    }

    res.status(200).json({
      numbers: list
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred while processing the requests');
  }
};
