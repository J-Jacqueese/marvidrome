import YRequest from '../../../../service'
import RegisterType from '../type'

export function postRegister(inputs: RegisterType) {
  return YRequest.post({
    url: '/auth/register',
    data: {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
      name: inputs.name
    }
  }).then((res) => res)
}
