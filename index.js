import { randomBytes } from "crypto";

/**
 * Generates a random string of a specified length.
 *
 * @param {number} [length=16] - The length of the random string to generate. Defaults to 16 if no value is provided.
 *
 * @returns {string} A random string of hexadecimal characters. The length of the string will be twice the input length because each byte is represented by two hexadecimal characters.
 *
 * @throws {Error} If the length is not a positive integer.
 *
 * @example <caption>Generate a random string of length 32</caption>
 * const randomString = generateRandomString(32);
 */

export default function generateKey(length = 16) {
  if (length < 1 || !Number.isInteger(length))
    throw new Error("Length must be a positive integer.");

  return randomBytes(length).toString("hex");
}
