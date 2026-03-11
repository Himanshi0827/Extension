export async function handler(event) {
  const id = event.queryStringParameters.id;

  const response = await fetch(
    `https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: event.headers.authorization
      }
    }
  );

  const data = await response.text();

  return {
    statusCode: 200,
    body: data
  };
}
