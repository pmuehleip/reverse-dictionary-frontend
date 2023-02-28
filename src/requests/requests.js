const domain = process.env.REACT_APP_API_URL;
const dictionaryDomain = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export async function postSearch(definition) {
    const response = await fetch(domain + '/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "definition": definition }),
    });
    if (!response.ok) {
      let data = await response.json();
      throw new Error(data.error);
    }
    return await response.json();
  }

  export async function getDefinition(word) {
    const response = await fetch(dictionaryDomain + '/' + word, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        let data = await response.json();
        throw new Error(data.error);
      }
      return await response.json();
  }