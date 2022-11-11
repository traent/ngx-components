/**
 * Class that represents a symbol-like `RedactedType` class with a custom `toString`
 * implementation to print itself in a proper way.
 *
 * Important: This class is not meant to be directly used externally. It needs to be exposed
 * because of a building issue that prevents depending files from being exported.
 *
 * @access private
 */
export class RedactedType {
  constructor(private readonly asString: string) { }

  toString() {
    return this.asString;
  }
}

/**
 * Special symbol to use in place of the value to indicate that the value is redacted.
 * This is used to distinguish between redacted values and undefined values.
 */
export const RedactedMarker = new RedactedType('Redacted');

/**
 * A utility generics type to represent a redacted value.
 */
export type Redactable<T> = T | RedactedType;
