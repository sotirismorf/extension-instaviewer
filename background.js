const image = {
  url: '',
};

function onClickItem(event) {
  if (image.url) {
    chrome.tabs.create({ url: image.url });
    image.url = '';
  } else {
    console.log('No url found');
  }
}

chrome.contextMenus.create({
  title: 'Open instagram image in new tab',
  contexts: ['page'],
  onclick: onClickItem
});

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === 'instagramImageURL') {
    image.url = message.url;
  }
  return true;
});
