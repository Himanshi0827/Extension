// export async function handler(event) {
//     try {
//       // Get agreement id from query parameter
//       const id = event.queryStringParameters.id;
  
//       // Get token from request headers
//       const token = event.headers.authorization;
  
//       if (!id) {
//         return {
//           statusCode: 400,
//           body: JSON.stringify({ message: "Agreement ID is required" })
//         };
//       }
  
//       const API_URL =
//         "https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement";
  
//       // Call Conga API from server side
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "GET",
//         headers: {
//           Authorization: token
//         }
//       });
  
//       const data = await response.json();
  
//       return {
//         statusCode: response.status,
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       };
  
//     } catch (error) {
//       return {
//         statusCode: 500,
//         body: JSON.stringify({
//           message: "Server error",
//           error: error.message
//         })
//       };
//     }
//   }

export async function handler(event) {
  try {
    const id = event.queryStringParameters.id;
    const token = event.headers.authorization;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Agreement ID is required" })
      };
    }

    const API_URL =
      "https://preview-rls09.congacloud.com/api/data/v1/objects/Agreement";

    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Server error",
        error: error.message
      })
    };
  }
}
