export async function fetchCurrency (userCurrency) {
  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${userCurrency}.min.json`;

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