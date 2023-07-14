import { StreamEntryType } from '../../org-types/streams/streams';

export type DocumentFormStreamItemType = StreamEntryType;

export interface DocumentFormStreamItem {
  id: string;
  type: DocumentFormStreamItemType;
  name: string;
  description?: string;
  configuration?: any;
  required?: boolean;
}

export interface DocumentFormContentItem {
  name: string;
  description?: string;
  type: 'heading';
}

export type DocumentFormItem = DocumentFormStreamItem | DocumentFormContentItem;

export interface DocumentForm {
  id: string;
  name: string;
  items: DocumentFormItem[];
}
