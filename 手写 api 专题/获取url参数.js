const url = "http://9cka.cn?code=1&page=2&code=asdasdsad";

const u = new URL(url);
console.log(u.searchParams.getAll('code'));
