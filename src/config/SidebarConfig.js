import React from "react"
import * as Icon from "react-icons/fc"

const SidebarConfig = [
  {
    id: "home",
    title: "Meus dados",
    type: "item",
    icon: <Icon.FcLibrary size={20}/>,
    color: 'blue',
    permissions: ["admin", "editor"],
    navLink: "/"
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
    title: "Atendimentos",
    type: "item",
    icon: <Icon.FcAbout size={20} />,
    color: 'red',
    permissions: ["admin", "editor"],
    navLink: "/atendimentos"
  }
]

export default SidebarConfig;
