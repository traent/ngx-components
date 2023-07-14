export enum ThingType {
  Generic = 'generic',
  Smartphone = 'smartphone',
  Sensor = 'sensor',
  WebService = 'webService',
  IoTDevice = 'ioTDevice',
}

export interface ThingInfo {
  name: string;
  icon?: string;
  svgIcon?: string;
}


