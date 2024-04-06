const axios = require("axios");

// Define the GraphQL query
const query = `
  query GetFirst5Attestations {
    attestations(take: 5) {
      id
      data
      decodedDataJson
      recipient
      attester
      time
      timeCreated
      expirationTime
      revocationTime
      refUID
      revocable
      revoked
      txid
      schema {
        id
        schema
        creator
        resolver
        revocable
        index
        txid
        time
      }
    }
  }
`;
async function main() {
  // // Make a request to the GraphQL endpoint
  // fetch('http://172.18.0.3:4000/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ query }),
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error fetching data:', error));

  await axios
    .get("http://13.36.214.194:3001/", {
      params: { query },
    })
    .then((response) => console.log(response.data.data))
    .catch((error) => console.error("Error fetching data:", error));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
