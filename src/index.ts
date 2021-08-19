export interface NodeEnvironment {
    /**
     * This will be one of "development", "production" or "test" depending on the mode the app is running in
     */
    NODE_ENV: string
}

/**
 * Look up the environment variable from `process.env`
 * @param key
 * @param defaultValue
 * @returns
 */
export function env <Environment extends NodeEnvironment, Key extends keyof Environment>(key: Key , defaultValue?: string): string | undefined {
  if (!(key in process.env)) {
    return defaultValue
  }

  // @ts-expect-error
  const value = process.env[key!]

  return value
}
