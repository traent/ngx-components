import { MaterialOrCustomIcon } from '../../icon/icon.component';

export enum StreamEntryType {
  Date = 'date',
  Number = 'number', // eslint-disable-line
  Text = 'text',
  Currency = 'currency',
  Boolean = 'boolean', // eslint-disable-line
  Dropdown = 'dropdown',
  Uri = 'uri',
  MultiSelect = 'multi-select',
  Json = 'json',
}

const streamEntryTypeIconMap: Record<StreamEntryType, MaterialOrCustomIcon> = {
  [StreamEntryType.Boolean]: { custom: 'checkbox' },
  [StreamEntryType.Currency]: { material: 'euro_symbol' },
  [StreamEntryType.Date]: { material: 'calendar_today' },
  [StreamEntryType.Dropdown]: { material: 'reorder' },
  [StreamEntryType.Json]: { custom: 'code' },
  [StreamEntryType.MultiSelect]: { material: 'checklist' },
  [StreamEntryType.Number]: { material: 'tag' },
  [StreamEntryType.Text]: { material: 'text_fields' },
  [StreamEntryType.Uri]: { material: 'language' },
};

export const getStreamTypeIcon = (type: string): MaterialOrCustomIcon =>
  type in streamEntryTypeIconMap
    ? streamEntryTypeIconMap[type as StreamEntryType]
    : streamEntryTypeIconMap.json;
