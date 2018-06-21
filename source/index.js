export function downloadFile(downloadUrl, name = '') {
  let url = downloadUrl;
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  // iOS devices do not support downloading. We have to inform user about this.
  if (/(iP)/g.test(navigator.userAgent)) {
    alert('Your device does not support files downloading. Please try again in desktop browser.');
    window.open(url, '_blank');
    return false;
  }

  // If in Chrome or Safari - download via virtual link click
  if (isChrome || isSafari || isFirefox) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('target', '_blank');

    if (link.download !== undefined) {
      // Set HTML5 download attribute. This will prevent file from opening if supported.
      const fileName = name.length ? name : url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }

    // Dispatching click event.
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  // Force file download (whether supported by server).
  if (url.indexOf('?') === -1) {
    url += '?download';
  }

  window.open(url, '_blank');
  return true;
}