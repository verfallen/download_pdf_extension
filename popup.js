function downloadPDF() {
  var downloadUrl = "https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf";

  console.log("download pdf start!");

  const param = {
    url: downloadUrl,
    filename: "1.pdf",
    conflictAction: "uniquify",
  };
  chrome.runtime.sendMessage(param);
}

let btn = document.getElementById("download");

// When the button is clicked, inject setPageBackgroundColor into current page
btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: downloadPDF,
  });
});
