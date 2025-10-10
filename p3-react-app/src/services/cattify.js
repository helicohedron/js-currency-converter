export async function cattify({text}) {
  const URL = `https://cataas.com/cat/says/${text}?width=800&json=true`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Cannot retrieve cat. It ran away.');
    }

    const cat = await response.json();
    return cat;
  } catch (error) {
    console.log('Error:', error);
  }
}