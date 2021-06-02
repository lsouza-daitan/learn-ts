/**
 * Branding is a technique to differentiate similar, compatible types and
 * ensuring that one is not used when another is expected.
 * 
 * There are proposed keywords for supporting branded types by default.
 * For example:  type Url = unique string;
 * https://github.com/microsoft/TypeScript/pull/33038
 */

type Url = string;
type Email = string;
type UserName = string;

function openWebsite(url: Url) {
  window.open(url, '_blank');
}

export function brandTestA() {
  const website: Url = 'https://myoptions.org/';
  const email: Email = 'help@myoptions.org';
  const john: UserName = 'JohnDoe2000';

  openWebsite(email); // <-- mistake here
  console.log(website, email, john);
}

// --------------------------------------

type Branded<T, B> = T & { __brand: B };
type BrandedUrl = Branded<string, 'Url'>;
type BrandedEmail = Branded<string, 'Email'>;
type BrandedUserName = Branded<string, 'Username'>;

function openWebsiteBranded(url: BrandedUrl) {
  window.open(url, '_blank');
}

export function brandTestB() {
  const website = 'https://myoptions.org/' as BrandedUrl;
  const email = 'help@myoptions.org' as BrandedEmail;
  const john = 'JohnDoe2000' as BrandedUserName;

  openWebsiteBranded(website);
  console.log(website, email, john);
}
