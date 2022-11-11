import { Redactable, RedactedMarker, RedactedType } from './model';

/**
 * Check if a value is a RedactedMarker or not and lets the TS to correctly infer its type.
 *
 * @param v The value to check.
 * @returns `true` if the value is a RedactedMarker, `false` otherwise.
 */
export const isRedacted = <T>(v: Redactable<T>): v is RedactedType => v === RedactedMarker;

export const isRedactedOrUndefined = <T>(v: Redactable<T> | undefined): v is (RedactedType | undefined) => isRedacted(v) || v === undefined;

/**
 * Check if a value is a RedactedMarker or not and lets the TS to correctly infer its type.
 *
 * @param v The value to check.
 * @returns `true` if the value is a RedactedMarker, `false` otherwise.
 */
export const isExported = <T>(v: Redactable<T>): v is T => v !== RedactedMarker;

export const isExportedAndDefined = <T>(v: Redactable<T> | undefined): v is T => isExported(v) && v !== undefined;
