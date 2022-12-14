import { Outlet } from "react-router-dom"
import HeaderEtc from "../components/header/HeaderEtc"
import HeaderMain from "../components/header/HeaderMain"
import HeaderSelect from "../components/header/HeaderSelect"
import Main from "./Main"

const Header = () => {
  return (
    <>
      <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
        <div className="flex w-full xl:container xl:m-auto">
          <HeaderMain />
          <HeaderSelect />
          <HeaderEtc />
        </div>
      </div>
      <Main />
      <Outlet />
    </>
  )
}

export default Header
