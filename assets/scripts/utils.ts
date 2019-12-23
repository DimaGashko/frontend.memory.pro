export function processRequestError(exception) {
   if (!exception.response) {
      console.error(exception);
      throw 'Check out your internet connection';
   }
   
   console.error(exception.response.data.message)
   throw 'Wrong request data';
}

export function removeAuthHeader(data, headers) {
   delete headers.common.Authorization;
   return data;
}
