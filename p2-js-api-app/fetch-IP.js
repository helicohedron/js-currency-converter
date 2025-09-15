export async function fetchIP () {
  const URL = 'http://ip-api.com/json/?fields=status,message,country,countryCode,currency';

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(data);
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
}