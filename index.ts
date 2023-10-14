export default {
  port: 8000,
  fetch () {
    let headers = new Headers();
    headers.append("Content-type", "text/html; charset=utf-8");
    return new Response(`<style></style><title>learn-bun</title><h1>hello world</h1>`, { headers: headers })
  }
}
