import { flatten } from '@traent/ts-utils';

export const decodeHtml = (html: string) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = html;
  return textArea.value;
};

export enum TextType {
  Simple,
  BlockCode,
  ItalicBold,
  Bold,
  Italic,
  Url,
}

export interface TextResource {
  value: string;
  type: TextType;
}

export const extractFeature = (textResources: TextResource[], regExpFeature: RegExp, featureType: TextType): TextResource[] => {
  const resources: (TextResource[] | TextResource)[] = [...textResources];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let index = 0; index < textResources.length; index++) {
    let { value } = textResources[index];
    const { type } = textResources[index];
    if (type !== TextType.Simple) {
      continue;
    }

    let match = regExpFeature.exec(value);
    const customFeatureResources = [];

    while ((match = regExpFeature.exec(value)) !== null) {
      value = value.replace(new RegExp(regExpFeature), '');
      if (match.groups?.text) {
        customFeatureResources.push({
          type: TextType.Simple,
          value: match.groups?.text || '',
        });
      }
      customFeatureResources.push({
        type: featureType,
        value: match.groups?.feature || '',
      });
    }
    if (value) {
      customFeatureResources.push({
        type: TextType.Simple,
        value,
      });
    }

    resources[index] = customFeatureResources;
  }
  return flatten(resources);
};
