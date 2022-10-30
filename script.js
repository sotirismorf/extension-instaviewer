addEventListener('contextmenu', (event) => {
  if (!event.target?.previousSibling?.firstChild?.src) return

  chrome.runtime.sendMessage({
    type: 'instagramImageURL',
    url: event.target.previousSibling.firstChild.src,
  });
});
