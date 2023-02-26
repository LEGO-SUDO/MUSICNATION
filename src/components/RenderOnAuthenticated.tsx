import UserService from '../services/UserService'
type Props = {
  children: any
}

const RenderOnAuthenticated = ({ children }: Props) =>
  UserService.isLoggedIn() ? children : null

export default RenderOnAuthenticated
