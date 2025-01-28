import { NavLink } from 'react-router-dom'
import './SidebarButton.css'
import { IconContext } from 'react-icons'

export default function SidebarButton(props: any) {
  return (
    <>
        <NavLink to={props.to} className="sidebar-button">
            <IconContext.Provider value={{size:"22px"}}>
              {props.icon}
            </IconContext.Provider>
            <span>{props.title}</span>
        </NavLink>
    </>
  )
}
