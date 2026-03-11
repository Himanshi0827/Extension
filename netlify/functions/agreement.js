export async function handler(event) {
  try {
    const id = event.queryStringParameters.id;

    const response = await fetch(
      `https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: event.headers.authorization,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}
