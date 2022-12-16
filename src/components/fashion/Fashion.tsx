import React from "react"
import styled from "@emotion/styled"

const Fashion = () => {
  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto mt-[48px]">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>패션</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            패션
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/1"
            >
              <figure className="flex h-80 bg-white overflow-hidden">
                <img
                  src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                  alt="상품 이미지"
                  className="transition-transform duration-300"
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </p>
                <p className="text-base">$110</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/2"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  Mens Casual Premium Slim Fit T-Shirts{" "}
                </p>
                <p className="text-base">$22</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/3"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">Mens Cotton Jacket</p>
                <p className="text-base">$56</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/4"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">Mens Casual Slim Fit</p>
                <p className="text-base">$16</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/15"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
                </p>
                <p className="text-base">$57</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/16"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  Lock and Love Women's Removable Hooded Faux Leather Moto Biker
                  Jacket
                </p>
                <p className="text-base">$30</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/17"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  Rain Jacket Women Windbreaker Striped Climbing Raincoats
                </p>
                <p className="text-base">$40</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/18"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  MBJ Women's Solid Short Sleeve Boat Neck V{" "}
                </p>
                <p className="text-base">$10</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/19"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  Opna Women's Short Sleeve Moisture
                </p>
                <p className="text-base">$8</p>
              </div>
            </a>
            <a
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              href="/product/20"
            >
              <figure className="flex h-80 bg-white overflow-hidden"></figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">
                  DANVOUY Womens T Shirt Casual Cotton Short
                </p>
                <p className="text-base">$13</p>
              </div>
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default Fashion
