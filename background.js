chrome.runtime.onMessage.addListener(function (event) {
  if (event.type === "down_all") {
    console.log(event);
    const { links } = event;

    links.forEach((link) => {
      chrome.downloads.download({ url: link.url, filename: link.name });
    });
  }
});
