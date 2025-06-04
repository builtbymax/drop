type Result<T, E = Error> = [T, null] | [null, E]

/**
 * Wraps an asynchronous operation in a try-catch block and returns a tuple containing
 * either the resolved value or the caught error.
 *
 * @template T - The type of the resolved value of the promise.
 * @template E - The type of the error, defaults to `Error`.
 * @param {Promise<T>} promise - The promise to handle.
 * @returns {Promise<Result<T, E>>} A promise that resolves to a tuple where the first element
 * is the resolved value or `null` if an error occurred, and the second element is the error or `null`.
 */
export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error as E]
  }
}

/**
 * Wraps a synchronous function in a try-catch block and returns a tuple containing
 * either the returned value or the caught error.
 *
 * @template T - The type of the returned value of the function.
 * @template E - The type of the error, defaults to `Error`.
 * @param {() => T} func - The synchronous function to handle.
 * @returns {Result<T, E>} A tuple where the first element is the returned value or `null`
 * if an error occurred, and the second element is the error or `null`.
 */
export function tryCatchSync<T, E = Error>(func: () => T): Result<T, E> {
  try {
    const data = func()
    return [data, null]
  } catch (error) {
    return [null, error as E]
  }
}
