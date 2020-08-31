import HomeScreen from '../Containers/HomeScreen/HomeScreen'
import QuanTriScreen from 'App/Containers/Superuser/QuanTriScreen/QuanTriScreen'
import ThongKeScreen from 'App/Containers/Superuser/ThongKeScreen/ThongKeScreen'
import RutTienScreen from 'App/Containers/Superuser/RutTienScreen/RutTienScreen'
import AccountScreen from 'App/Containers/Superuser/AccountScreen/AccountScreen'
import AccountAdminScreen from 'App/Containers/Admin/AccountScreen/AccountAdminScreen'
import QuanTriAdminScreen from 'App/Containers/Admin/QuanTriScreen/QuanTriAdminScreen'
import ThongKeAdminMT4Screen from 'App/Containers/Admin/ThongKeAdminMT4/ThongKeAdminMT4Screen'
import ThongKeTransactionAdminScreen from 'App/Containers/Admin/ThongKeScreen/ThongKeTransactionAdminScreen'

export const TabNavigationDataSupperAdmin = [
  {
    name: 'Quản Trị',
    component: QuanTriScreen,
    icon: 'cog-outline',
  },
  {
    name: 'Thống Kê',
    component: ThongKeScreen,
    icon: 'chart-line-variant',
  },
  {
    name: 'Rút Tiền',
    component: RutTienScreen,
    icon: 'currency-usd',
  },
  {
    name: 'Tài khoản',
    component: AccountScreen,
    icon: 'account',
  },
]

export const TabNavigationDataAdmin = [
  {
    name: 'MT4',
    component: ThongKeAdminMT4Screen,
    icon: 'bitcoin',
  },
  {
    name: 'Giao dịch',
    component: ThongKeTransactionAdminScreen,
    icon: 'chart-line-variant',
  },
  {
    name: 'Quản trị',
    component: QuanTriAdminScreen,
    icon: 'cog-outline',
  },
  {
    name: 'Tài khoản',
    component: AccountAdminScreen,
    icon: 'account',
  },
]
export const TabNavigationDataLead = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Calendar',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Grids',
    component: HomeScreen,
    icon: 'home',
  },
]
export const TabNavigationDataGuest = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Calendar',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Grids',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Pages',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Components',
    component: HomeScreen,
    icon: 'home',
  },
]
