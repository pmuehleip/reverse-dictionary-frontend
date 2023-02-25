const domain = process.env.REACT_APP_API_URL;

export async function postSearch(definition) {
    console.log(process.env);
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