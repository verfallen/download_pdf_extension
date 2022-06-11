console.log("extension");

chrome.runtime.onMessage.addListener(function (arg, sender, sendResponse) {
  var args = arg.collection;

  console.log("message message");
  console.log(args);

  //   chrome.downloads.download({
  //     url: img_url,
  //     filename: saveas,
  //     saveAs: false,
  //   });
});
// const getLinks = () => {
//   links = Array.from(document.querySelectorAll("a"))
//     .filter((v) => v.href.endsWith(".pdf"))
//     .map((v) => v.href);

//   return links;
// };

// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     const links = getLinks();
//     console.log(links);
//     // chrome.downloads.open(links[0]);
//     //   chrome.downloads.download(
//     //     "https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf"
//     //   );
//   }
// };

// console.log(getLinks());
