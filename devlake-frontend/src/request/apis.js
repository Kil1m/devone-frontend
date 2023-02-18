class api{
    constructor(url, method) {
        this.url =url;
        this.method = method;
      }
  
}

const apis={
    yiyan:new api(
        "yiyan/index.php",
        "get",
    )
}
export default apis