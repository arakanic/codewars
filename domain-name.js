// This function parses a URL as a string for its domain and returns it as a string.

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let newURL = url;
  const protocolCheck1 = url.slice(0, 7) == "http://";
  const protocolCheck2 = url.slice(0, 8) == "https://";
  if (!protocolCheck1 && !protocolCheck2) {
    newURL = "https://".concat(url);
  }
  let domainArr = new URL(newURL).host.split(".");
  return domainArr[0] != "www" ? domainArr[0] : domainArr[1];
}

console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("https://youtube.com")) // "youtube"
