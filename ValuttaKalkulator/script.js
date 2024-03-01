const flags = {
    NOK: '🇳🇴',
    USD: '🇺🇸',
    EUR: '🇪🇺',
    GBP: '🇬🇧'
  };
  
  function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const toCurrency = document.getElementById('toCurrency').value;
  
    const result = document.getElementById('result');

    result.innerHTML = '';
  

    if (isNaN(amount) || amount <= 0) {
      return;
    }
  
    const apiUrl = `https://v6.exchangerate-api.com/v6/32d5d1eb058f7588941e9e51/latest/${fromCurrency}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.conversion_rates) {
          const conversionRate = data.conversion_rates[toCurrency];
          const convertedAmount = amount * conversionRate;
  
          result.innerHTML = `
            <div class="result-item">
              <span class="flag">${flags[toCurrency]}</span>
              <span class="converted-amount">${convertedAmount.toFixed(2)}</span>
              <span class="currency">${toCurrency}</span>
            </div>
          `;
        } else {
          result.innerHTML = 'Kunne ikke hente valutakurser.';
        }
      })
      .catch(error => {
        console.error('Feil ved henting av valutakurser:', error);
        result.innerHTML = 'Feil: Kunne ikke hente valutakurser.';
      });
  }
  