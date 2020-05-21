import React from "react"
import * as Icon from "react-icons/fc"

const SidebarConfig = [
  {
    id: "home",
    title: "Dashboard",
    type: "item",
    icon: <Icon.FcLibrary size={20}/>,
    color: 'blue',
    permissions: ["admin", "editor"],
    navLink: "/dashboard"
  },
  {
    id: "profissionais",
    title: "Profissionais",
    type: "item",
    icon: <Icon.FcBusinessContact size={20}/>,
    color: 'orange',
    permissions: ["admin", "editor"],
    navLink: "/staffs"
  },
  {
    id: "servicos",
    title: "Serviços",
    type: "item",
    icon: <Icon.FcSettings size={20} />,
    color: 'green',
    permissions: ["admin", "editor"],
    navLink: "/services"
  },
  {
    id: "atendimentos",
    title: "Agendamentos",
    type: "item",
    icon: <Icon.FcAbout size={20} />,
    color: 'red',
    permissions: ["admin", "editor"],
    navLink: "/appointments"
  }
]

export default SidebarConfig;
