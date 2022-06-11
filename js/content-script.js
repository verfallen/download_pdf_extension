// body = document.getElementsByName("body");

// console.log(body);

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    links = Array.from(document.querySelectorAll("a"))
      // .filter((v) => v.href.endsWith(".pdf"))
      .map((v) => v.href)
      .join((v) => "<li>" + v + "</li>");
    console.log(links);
    // console.log("content script");
  }
};
