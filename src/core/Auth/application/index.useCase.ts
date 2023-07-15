import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { AuthRepository, LoginCredentialsEntity, LoginCredentialsValue } from '../domain'

export class AuthUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly repository:AuthRepository) {}
  public async login (credentials:LoginCredentialsEntity):Promise<ErrorResponserValue|SuccessResponserValue<any>> {
    try {
      const credentialsValue = new LoginCredentialsValue(credentials)
      const data = await this.repository.login(credentialsValue)
      return data
    } catch (e) {
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }
}