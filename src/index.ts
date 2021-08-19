export interface NodeEnvironment {
    /**
     * This will be one of "development", "production" or "test" depending on the mode the app is running in
     */
    NODE_ENV: string
}

function isNumber (value: string) {
  return /[+-]?([0-9]*[.])?[0-9]+/.test(value)
}

export function env <Environment extends NodeEnvironment, Key extends keyof Environment>(key: Key , defaultValue?: Environment[Key]): Environment[Key] {
  if (!(key in process.env)) {
    // @ts-expect-error
    return defaultValue
  }

  // @ts-expect-error
  const value = process.env[key]

  if (isNumber(value)) {
    // @ts-expect-error
    return Number(value)
  }

  return value
}
