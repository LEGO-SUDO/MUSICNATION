import UserService from '../services/UserService'

type Props = {
  children: any
}

const RenderOnAnonymous = ({ children }: Props) =>
  !UserService.isLoggedIn() ? children : null

export default RenderOnAnonymous
