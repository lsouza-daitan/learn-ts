/**
 * String template types allow us to combine string literals to form even more
 * complex string literals. It also allows us to use primitive types to define
 * string formats, as shown below.
 *
 * This is already supported in the latest TypeScript versions, but development
 * is still being made to improve and extend the string template functionalities.
 */

type Protocol = 'http' | 'https' | 'ftp';
type ValidUrl = `${Protocol}://${string}`;

function isFtpUrl(url: ValidUrl): url is `ftp://${string}` {
  return url.startsWith('ftp://');
}

function openWebsite(url: ValidUrl) {
  if (isFtpUrl(url)) {
    console.log(`Can't open website because URL has FTP protocol:`, url);
  } else {
    window.open(url, '_blank');
  }
}

export function stringTemplateTest() {
  openWebsite('http://myoptions.org/');
}
