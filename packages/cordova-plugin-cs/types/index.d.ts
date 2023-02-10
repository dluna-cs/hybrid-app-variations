// Type definitions for ContentsquarePlugin
export type CurrencyCode =
  'USD'|
  'CAD'|
  'EUR'|
  'AED'|
  'AFN'|
  'ALL'|
  'AMD'|
  'ARS'|
  'AUD'|
  'AZN'|
  'BAM'|
  'BDT'|
  'BGN'|
  'BHD'|
  'BIF'|
  'BND'|
  'BOB'|
  'BRL'|
  'BWP'|
  'BYN'|
  'BZD'|
  'CDF'|
  'CHF'|
  'CLP'|
  'CNY'|
  'COP'|
  'CRC'|
  'CVE'|
  'CZK'|
  'DJF'|
  'DKK'|
  'DOP'|
  'DZD'|
  'EEK'|
  'EGP'|
  'ERN'|
  'ETB'|
  'GBP'|
  'GEL'|
  'GHS'|
  'GNF'|
  'GTQ'|
  'HKD'|
  'HNL'|
  'HRK'|
  'HUF'|
  'IDR'|
  'ILS'|
  'INR'|
  'IQD'|
  'IRR'|
  'ISK'|
  'JMD'|
  'JOD'|
  'JPY'|
  'KES'|
  'KHR'|
  'KMF'|
  'KRW'|
  'KWD'|
  'KZT'|
  'LBP'|
  'LKR'|
  'LTL'|
  'LVL'|
  'LYD'|
  'MAD'|
  'MDL'|
  'MGA'|
  'MKD'|
  'MMK'|
  'MOP'|
  'MUR'|
  'MXN'|
  'MYR'|
  'MZN'|
  'NAD'|
  'NGN'|
  'NIO'|
  'NOK'|
  'NPR'|
  'NZD'|
  'OMR'|
  'PAB'|
  'PEN'|
  'PHP'|
  'PKR'|
  'PLN'|
  'PYG'|
  'QAR'|
  'RON'|
  'RSD'|
  'RUB'|
  'RWF'|
  'SAR'|
  'SDG'|
  'SEK'|
  'SGD'|
  'SOS'|
  'SYP'|
  'THB'|
  'TND'|
  'TOP'|
  'TRY'|
  'TTD'|
  'TWD'|
  'TZS'|
  'UAH'|
  'UGX'|
  'UYU'|
  'UZS'|
  'VEF'|
  'VND'|
  'XAF'|
  'XOF'|
  'YER'|
  'ZAR'|
  'ZMK'|
  'ZWL';

interface CsSdkCommandMap {
  'handleUrl': { url: string };
  'optIn': void;
  'optOut': void;
  'sendDynamicVar': { key: string; value: number | string };
  'sendScreenName': { name: string };
  'sendTransaction': { id: string; currency: CurrencyCode; value: number };
}
/**
 * This plugin defines a global assets object with methos to interact with them
 */
interface CsMob {
  /* Command API */
  sendCommand<T extends keyof CsSdkCommandMap>(name: T, command: CsSdkCommandMap[T]): Promise<void>;
}

declare var CsMob: CsMob;
