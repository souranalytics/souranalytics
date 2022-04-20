export class Exception {
  code: number
  message: keyof IntlMessages

  constructor(code: number, message: keyof IntlMessages) {
    this.code = code
    this.message = message
  }
}
