import { Link } from 'react-router-dom'
import classNames from './Navigation.module.scss'

export const BreadcrumbItem = ({ link, title, active }) => (
  <Link
    className={
      active ? classNames.breadcrumb__active__link : classNames.breadcrumb__link
    }
    to={link}
  >
    <span className={classNames.breadcrumb__inner}>{title}</span>
  </Link>
)
