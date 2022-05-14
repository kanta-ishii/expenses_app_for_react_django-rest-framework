const api = async (url: string, method: string = 'GET', params?: any): Promise<any> => {
    let endpoint = url;
    if (method === 'GET') {
      endpoint = `${endpoint}?${new URLSearchParams(params)}`
    }
  
    return await fetch(endpoint, {
      method,
      body: method === 'POST' ? JSON.stringify(params) : null,
      headers: {
        accept: 'application/json',
      },
    });
  }

// function createExpenses(data: {}) {
//     fetch(
//         "http://localhost:8000/api/v1/",{
// method: 'POST',
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded',
// },
// body: JSON.stringify(data),
// })            .then(async response => {
//             if (response.status > 400) {
//                 throw new Error(await response.json());
//             }
//           })
//         .catch(error => {
//             console.error(error);
//         });
// }

const data1: any = {
    "store_name": "store_name2",
    "purchase_on": "2022-04-18",
    "is_income": false,
    "price": 20010
}

export const postData = async (data: any): Promise<any> => {
    const response = await api(
      'http://localhost:8000/api/v1/',
      'POST',
      data
    );
  
    return response.json();
}
  
postData(data1)