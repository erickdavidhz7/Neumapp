interface ValidationOptions {
  message?:string
}

export class Validator {
  private toValidate: any
  private fieldName: string
  private errors: string[] = []
  private isPresent: boolean
  private required = true;
  constructor(fieldName: string, fieldValue: any) {
    this.fieldName = fieldName
    this.toValidate = fieldValue
    this.isPresent = !!fieldValue
  }

  private addErrorMsg(errorMessage: string, customMessage?:string) {
    if ((this.required && !this.isPresent) ||this.isPresent) {
      if(customMessage){
        this.errors.push(customMessage)
      } else {
        this.errors.push(errorMessage)
      }
    }
  }

  public isRequired(options?:ValidationOptions) {
    if (this.required && !this.isPresent) {
      this.addErrorMsg('This field is required', options?.message)
    }
    return this
  }

  public isOptional(options?:ValidationOptions) {
    if (!this.toValidate) {
      this.isPresent = false
    }
    return this
  }

  public notEmpty(options?:ValidationOptions) {
    if (this.isPresent && !this.toValidate) {
      this.addErrorMsg('Cannot be empty', options?.message)
    }
    return this
  }

  public isString(options?:ValidationOptions) {
    if (this.isPresent && typeof this.toValidate !== 'string') {
      this.addErrorMsg('Must be a string', options?.message)
    }
    return this
  }

  public isInt(options?:ValidationOptions) {
    const digitsOnly = /^\d+$/
    if (this.isPresent && !digitsOnly.test(this.toValidate)) {
      this.addErrorMsg('Must be an integer', options?.message)
    }
    return this
  }

  public isFloat(options?: ValidationOptions){
    const floatNumberOnly = /^[+-]?\d+(\.\d+)?$/
    if (this.isPresent && !floatNumberOnly.test(this.toValidate)){
      this.addErrorMsg('Must be a float number', options?.message)
    }
    return this
  }

  public maxLength(maxLength: number, options?:ValidationOptions) {
    if (this.isPresent) {
      const stringified = this.toValidate.toString()
      if (stringified.length > maxLength) {
        this.addErrorMsg(`Cannot be larger than ${maxLength}`, options?.message)
      }
    }
    return this
  }

  public minLength(minLength: number,options?:ValidationOptions) {
    console.error(this.isPresent, this.toValidate)
    if (this.isPresent) {
      const stringified = this.toValidate.toString()
      if (stringified.length < minLength) {
        this.addErrorMsg(`Cannot be shorter than ${minLength}`, options?.message)
      }
    }
    return this
  }

  public matches(regex: RegExp, options?:ValidationOptions) {
    if (this.isPresent && !regex.test(this.toValidate)) {
      this.addErrorMsg(`Not valid format`, options?.message)
    }
    return this
  }

  public isAlphanumeric(options?:ValidationOptions) {
    const regex = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ ]+$/
    if (this.isPresent && !regex.test(this.toValidate)) {
      this.addErrorMsg(`Not valid format, alphanumeric only`, options?.message)
    }
    return this
  }

  public isAlpha(options?:ValidationOptions) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/
    if (this.isPresent && !regex.test(this.toValidate)) {
      this.addErrorMsg(`Not valid format, alpha only`, options?.message)
    }
    return this
  }

  public isAlphanumericExtended(options?:ValidationOptions) {
    const regex = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s!\?.,;:¡¿'"(){}[\]\-–—_]+$/u
    if (this.isPresent && !regex.test(this.toValidate)) {
      this.addErrorMsg(`Not valid format, alpha numeric es-Es only`, options?.message)
    }
    return this
  }

  public isEmail(options?:ValidationOptions) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (this.isPresent && !emailRegex.test(this.toValidate)) {
      this.addErrorMsg(`Email not valid`, options?.message)
    }
    return this
  }

  public isUUIDv4(options?:ValidationOptions){
    const regex = /^[0-9(a-f|A-F)]{8}-[0-9(a-f|A-F)]{4}-4[0-9(a-f|A-F)]{3}-[89ab][0-9(a-f|A-F)]{3}-[0-9(a-f|A-F)]{12}$/
    if (this.isPresent && !regex.test(this.toValidate)) {
      this.addErrorMsg(`UUID v4 not valid`, options?.message)
    }
    return this
  }

  public getErrors() {
    if (this.errors.length > 0) {
      return { [this.fieldName]: this.errors }
    } else undefined
  }
}
