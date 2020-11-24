export const getLocal = async (zipCode) => {
  const response = await fetch(`https://api.pagar.me/1/zipcodes/${zipCode}`)
  const data = await response.json()

  return data;
}

export default getLocal
