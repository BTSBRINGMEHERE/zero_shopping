import React from "react"
import { Link } from "react-router-dom"

const Product = () => {
  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>디지털</li>
              <li>암거나</li>
            </ul>
          </div>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img src="" alt="" className="object-contain w-full h-72" />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {}
                <span className="badge badge-accent ml-2">NEW</span>
              </h2>
              <p>...</p>
              <div className="flex items-center mt-3">
                <div className="rating rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                  />
                </div>
                <div className="ml-2">"2.9"</div>
              </div>
              <p className="mt-2 mb-4 text-3xl"></p>
              <div className="card-actions">
                <button className="btn btn-primary">장바구니에 담기</button>
                <Link to="/cart" className="btn btn-outline ml-1">
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
