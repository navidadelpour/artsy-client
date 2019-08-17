export default function routeWithParams(route: any, params: any){
  return route.split('/').map((item: any) => {
    if (item.startsWith(':')) {
      item = item.slice(1);
      if(params[item]){
        return params[item];
      }
    } else {
      return item;
    }
    return null
  }).join('/');
}
