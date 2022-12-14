import { Link } from "react-router-dom"

const HeaderSelect = () => {
  return (
    <>
      <div className="flex-none hidden md:flex md:flex-1 ml-2">
        <Link
          to="/fashion"
          className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          패션
        </Link>
        <Link
          to="/accessory"
          className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          악세서리
        </Link>
        <Link
          to="/digital"
          className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          디지털
        </Link>
      </div>
    </>
  )
}

export default HeaderSelect
