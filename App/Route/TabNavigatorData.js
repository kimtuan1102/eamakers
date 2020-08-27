import HomeScreen from '../Containers/HomeScreen/HomeScreen'
import QuanTriScreen from 'App/Containers/Superuser/QuanTriScreen/QuanTriScreen'
import ThongKeScreen from 'App/Containers/Superuser/ThongKeScreen/ThongKeScreen'
import RutTienScreen from 'App/Containers/Superuser/RutTienScreen/RutTienScreen'
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
]

export const TabNavigationDataAdmin = [
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
