(async ()=> {
let url = "https://api.accounts.etalondiagnostics.com/api/Horses/";
let horseList = [];

let f =s=> {
  if (!s) return "";
  let ss = "";
  for (let i = 0; i < s.length; ++i) {
    if (!i || ss[i - 1] == " ") {
      ss += s[i].toUpperCase();
    } else {
      ss += s[i].toLowerCase();
    }
  }
  return ss;
}

let headers = {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "ja",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGVraXpvcHVAaGVpc2VpLmJlIiwiVXNlcklkIjoiNjM4NjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwibmJmIjoxNzE4MjkxNzc1LCJleHAiOjE3MTgyOTcxNzUsImlzcyI6Imh0dHBzOi8vYXBpLmFjY291bnRzLmV0YWxvbmRpYWdub3N0aWNzLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBpLmFjY291bnRzLmV0YWxvbmRpYWdub3N0aWNzLmNvbSJ9.b8or5O1842iiynyA3oPv-miXcq4Uyv-0DZQuFO9Jia0",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Brave\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
  },
  "referrer": "https://accounts.etalondiagnostics.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}
let y= "";
let n = "";
let nn = "";
let s = "";
let v;
let yz;
let kz;
for (let i = 5500; i < 6000; ++i) {
  let reqURL = url + i;
  let response = await fetch (reqURL, headers);
  if (response.status != 200) {
    continue;
  } else {
    let json = (await response.json()).data;
    s = json?.abilities[2]?.state;
    if (s == "High" ? (s = "CC") : s == "Medium" ? (s = "CT") : s == "Low" ? (s = "TT") : "") {
    horseList.push([
      {
        name: f(n = json?.name),
        year: (y = json?.dateOfBirth) ? +(y.slice(0, 4)) : 0,
        type: (yz = json?.breeds[0]?.name?.toUpperCase(), yz?.includes("QUAR") ? "QH" : yz == "PINTO" ? "PAINT" : yz),
        href: "https://www.allbreedpedigree.com/" + n.toLowerCase()?.replaceAll(" ", "+"),
        mstn: s,
        id: i
      },
      {
        name: f(nn = json?.parentage[0]?.name),
        year: 20,
        type: json?.parentage[0]?.registries[0]?.association?.name?.toUpperCase() || yz,
        href: (nn ? "https://www.allbreedpedigree.com/" + nn?.toLowerCase()?.replaceAll(" ", "+") : ""),
        mstn: ""
      },
      (v = {
        name: f(nn = json?.parentage[1]?.name),
        year: 20,
        type: json?.parentage[1]?.registries[0]?.association?.name?.toUpperCase() || yz,
        href: "https://www.allbreedpedigree.com/" + (nn ? nn?.toLowerCase()?.replaceAll(" ", "+") : ""),
        mstn: ""
      }),
      (kz = structuredClone(v), kz.name = "", kz.year = 19, kz.href = "", kz)
    ])
    }
  }
}
Bun.write("output.json", JSON.stringify(horseList, null, 2));

//fetch("https://api.accounts.etalondiagnostics.com/api/Horses/7225", {
  //"headers": {
    //"accept": "application/json, text/plain, */*",
    /*
    "accept-language": "ja",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGVraXpvcHVAaGVpc2VpLmJlIiwiVXNlcklkIjoiNjM4NjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwibmJmIjoxNzE1NTg5NTU3LCJleHAiOjE3MTU1OTQ5NTcsImlzcyI6Imh0dHBzOi8vYXBpLmFjY291bnRzLmV0YWxvbmRpYWdub3N0aWNzLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBpLmFjY291bnRzLmV0YWxvbmRpYWdub3N0aWNzLmNvbSJ9.4OqYx9MFrtPTHkuqv_NSv6Yoah1264rAv8464djN2y0",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Brave\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    "Referer": "https://accounts.etalondiagnostics.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).then(r => console.log)*/
})()