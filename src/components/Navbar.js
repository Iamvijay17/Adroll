import React from "react";
import "./style/Navbar.css";
import { Dropdown } from "./Dropdown";
import { Resources } from "./Resources";

export const Navbar = () => {
  return (
    <div className="extraLarge">
      <div style={{ zIndex: "2", position: "relative" }} className="child">
        <div className="container-fluid position-fixed px-1">
          <nav class="navbar navbar-expand-lg bg-white  border-0 ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="https://www.adroll.com/assets/svg/logo-adroll.svg"
                  alt=""
                  width="90"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                  <li class="nav-item dropdown buttext  ">
                    <a
                      class="nav-link fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Why AdRoll?{" "}
                      <i class="fa-solid fa-chevron-down downarrow"></i>
                    </a>
                    <ul class="dropdown-menu border-0 ">
                      <li>
                        <a class="dropdown-item fw-semibold" href="#" active>
                          Why AdRoll?
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Managed Services
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Case Studies
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown buttext">
                    <a
                      class="nav-link fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Marketing Platform{" "}
                      <i class="fa-solid fa-chevron-down downarrow"></i>
                    </a>
                    <div class="dropdown-menu dmenu fullwidth1 min-vw-100 border-0">
                      {/* ============ Here is type Dropdown start============ */}

                      <Dropdown />

                      {/* ============ Here is type Dropdown end============ */}
                    </div>
                  </li>
                  <li class="nav-item dropdown buttext">
                    <a
                      class="nav-link fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      For Ecommerce{" "}
                      <i class="fa-solid fa-chevron-down downarrow"></i>
                    </a>
                    <ul class="dropdown-menu border-0">
                      <li>
                        <a class="dropdown-item fw-semibold" href="#" active>
                          AdRoll for ecommerce
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Shopify
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Shopify Plus
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          WooCommerce
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Wix
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          BigCommerce
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Magento
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown buttext">
                    <a
                      class="nav-link fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item dropdown buttext">
                    <a
                      class="nav-link fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resources{" "}
                      <i class="fa-solid fa-chevron-down downarrow"></i>
                    </a>
                    <ul class="dropdown-menu dmenu1 fullwidth1 min-vw-100 border-0">
                      {/* ============ Here is type Dropdown start============ */}

                      <Resources />

                      {/* ============ Here is type Dropdown end============ */}
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <a
                    href="#"
                    className="text-black text-decoration-none mt-3 me-3 buttext"
                  >
                    Log in
                  </a>
                  <button
                    class="btn btn text-white"
                    type="submit"
                    style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}
                  >
                    <span className="buttext">GET STARTED</span>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
