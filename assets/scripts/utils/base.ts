export function processRequestError(exception) {
   if (!exception.response) {
      console.error(exception);
      return 'Check out your internet connection';
   }
   
   console.error(exception.response.data.message)
   return 'Wrong request data';
}