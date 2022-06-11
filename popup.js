function unique(arr) {
  return Array.from(new Set(arr));
}

function getPDFLinks() {
  const links = unique(
    Array.from(document.querySelectorAll("a"))
      .filter((v) => v.href.endsWith(".pdf"))
      .map((v) => ({ name: v.text || v.href.split("/")[-1], url: v.href }))
  );

  chrome.runtime.sendMessage({ type: "down_all", links });
}

let btn = document.getElementById("download");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getPDFLinks,
  });
});
