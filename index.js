export function patternCPF(doc) {
  if (!doc) return doc;

  let cpf = doc.toString().replace(/[^0-9]/g, '');

  for (let i = cpf.length; i < 11; i++) {
    cpf = `0${cpf}`;
  }

  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
}

export function patternCNPJ(doc) {
  if (!doc) return doc;
  let cnpj = doc.toString().replace(/[^0-9]/g, '');

  for (let i = cnpj.length; i < 14; i++) {
    cnpj = `0${cnpj}`;
  }

  return `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(5, 8)}/${cnpj.substring(
    8,
    12
  )}-${cnpj.substring(12)}`;
}

export function patternRG(doc) {
  if (!doc) return doc;
  const rg = doc.toString().replace(/[^0-9]/g, '');

  return `${rg.substring(0, 2)}.${rg.substring(2, 5)}.${rg.substring(5, 8)}-${rg.substring(8)}`;
}

export function formatDate(date) {
  try {
    /** Verifica se o browser é o IE, pois na versão 10 o Intl não é suportado */
    const isIE = /* @cc_on!@ */ false || !!document.documentMode;
    if (!date || isIE) return date;
    const newDate = new Date(date);
    const format = new Intl.DateTimeFormat('pt-BR');

    return format.format(newDate);
  } catch (e) {
    return date;
  }
}

export function formatCurrency(currency) {
  /** Verifica se o browser é o IE, pois na versão 10 o Intl não é suportado */
  const isIE = /* @cc_on!@ */ false || !!document.documentMode;
  if (!currency || isIE) return currency;
  const newCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return newCurrency.format(parseFloat(currency));
}

export function formatPhone(phone) {
  if (!phone) return phone;
  const newPhone = phone
    .toString()
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('-', '');

  return `${newPhone[0] + newPhone[1]} ${newPhone.substring(2)}`;
}

export function removeAccentsDiacritics(str) {
  let r = str.toLowerCase();
  r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
  r = r.replace(new RegExp('æ', 'g'), 'ae');
  r = r.replace(new RegExp('ç', 'g'), 'c');
  r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
  r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
  r = r.replace(new RegExp('ñ', 'g'), 'n');
  r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
  r = r.replace(new RegExp('œ', 'g'), 'oe');
  r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
  r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
  return r;
}

export function leftOnlyNumbers(input) {
  return input.replace(/[^0-9]/g, '');
}

export function formatNumberDecimalBrazil(number) {
  let n = Number(number);
  if (n) n = number.toLocaleString('pt-BR');
  return n;
}
