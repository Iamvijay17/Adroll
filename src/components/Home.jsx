import React from 'react'
import './style/Home.css'

export const Home = () => {

    return (
        <div className='bg-light '>
            <div className='' style={{ paddingTop: "62px" }}>
                <div className=' text-center text-white topalert' style={{ backgroundColor: "#cc66a0", padding: "1px " }}>
                    <p className='mt-2 buttext'>Learn how to optimize your webpages and ad creative at our upcoming workshop 👀 <a href="#" className='text-decoration-none ' style={{ color: "#9eddf6" }} >Register Now <i class="fa-solid fa-arrow-right"></i> </a></p>
                </div>
            </div>
            <div className='container-fluid '>
                <div className='row bg-pink ' style={{ backgroundColor: "#ffe8e0" }}>

                    <div className='col-12 col-xxl-6 col-xl-6 text-start' style={{ padding: "29px 3% 60px 7%" }} >
                        <p className='fw-semibold font textp' style={{
                            fontSize: "2.375rem",
                            lineHeight: "3.25rem"
                        }}>
                            Smaller budgets need <br className='d-none d-sm-block' /> smarter dollars
                        </p>

                        <p>
                            Create, manage, and analyze your display, Facebook, Instagram, <br className='d-none d-sm-block' /> Pinterest, TikTok, and email campaigns from a single platform. AdRoll <br className='d-none d-sm-block' />helps marketers do more with less.
                        </p>
                        <div className=''>
                            <button class="btn me-3 text-white " type="submit" style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}>
                                <span className='buttext'>GET STARTED</span>
                            </button>
                            <button class="btn btn text-white" type="submit" style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}>
                                <span className='buttext'>GET IN TOUCH</span>
                            </button>
                        </div>
                    </div>


                    <div className='col-6 col-xl-6 d-none d-sm-block' id="bgcol" >
                        <img src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=546" style={{ margin: "-243px 0px 0px", display: "flex", flex: "1", flexBasis: "50%", backgroundRepeat: "no-repeat", padding: "50px 3% 75px 5%" }} alt="" className='bgimg' />
                    </div>
                </div>


                <div className='row py-5 bg-white'>
                    <div className='col-2 col-xl-2 d-none d-sm-block'></div>
                    <div className='col col-md font' >
                        <p className='fs-2 fw-semibold' >AdRoll works for the</p>
                        <p className='fs-2 fw-semibold' style={{ lineHeight: "2.25rem" }}><span id="rotate" className='text-decoration-underline ' > <span>one-person marketing team.</span> <span>scrappy new entrepreneur.</span> <span>ecommerce store owner.</span> <span>marketing newbie.</span> <span>established marketer.</span><span>marketing newbie.</span></span></p>



                        <p className=''>Our industry-first automation builder gives you full control of <br className='d-none d-sm-block' />campaigns across display, social, and email — all from one place.</p>

                        <a href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Explore automation builder
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a>
                    </div>
                    <div className='col col-xs-12'>

                        <img src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=400" alt="" className='d-none d-sm-block' />
                        <img src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=340" alt="" className='d-block d-sm-none' />
                    </div>
                    <div className='col-2 col-xl-1 d-none d-sm-block'></div> </div>
                <div className='p-5 text-center bg-white d-none d-sm-block'>

                    <img src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                    <img src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                    <img src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                    <img src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                    <img src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                    <img src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=109" alt="" className='pe-5' />
                </div>

                <div className='p-5 text-center bg-white d-block d-sm-none'>
                    <div className="row">
                        <div className="col-6"><img src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                        <div className="col-6 pt-2"><img src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                        <div className="col-6 pb-3 pt-3"> <img src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                        <div className="col-6 pb-4 pt-4"><img src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                        <div className="col-6"><img src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                        <div className="col-6"><img src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=129" alt="" className='pe-5' /></div>
                    </div>





                </div>


                {/* ================== 3rd section ================== */}
                <div className="row bg-light py-5">
                    <div className="col col-xl-2"></div>
                    <div className="col">
                        <img src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=398" alt=""className='d-none d-sm-block' />
                        <img src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=340" alt="" className='d-block d-sm-noned-block d-sm-none' />
                    </div>
                    <div className="col col-12 col-lg-4"><p className=' fw-semibold font' style={{ fontSize: "28px" }}>For 15 years, we've been the leader <br className='d-none d-sm-block' /> in helping our customers find their <br className='d-none d-sm-block' />best customers</p> <p>The AdRoll platform is powered by 15+ years of data from <br className='d-none d-sm-block' />  hundreds of thousands of brands and billions of shoppers. Let our <br className='d-none d-sm-block' /> expertise find the right customers for your business.</p>
                        <a className='ms-1' href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Learn more
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a>
                    </div>
                    <div className="col col-xl-2"></div>

                </div>
                {/* ================== 4th section ================== */}
                <div className='row py-5 bg-white' id="" >
                    <div className='col-2 col-xl-2 d-none d-sm-block'></div>
                    <div className='col'><p className='fw-semibold font' style={{ fontSize: "27px" }}>Save time and energy by running all  <br className='d-none d-sm-block' /> your campaigns across millions of <br className='d-none d-sm-block' />websites and mobile apps — from  <br className='d-none d-sm-block' />   one place</p>
                        <p className=''>When we say one-stop shop, we mean one-stop. Launch, pause, <br className='d-none d-sm-block' />and edit ad campaigns across all the places you want to advertise,<br className='d-none d-sm-block' /> plus use that data to see your campaigns holistically and make<br className='d-none d-sm-block' /> improvements.</p>
                        <a href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Explore social ads manager
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a></div>
                    <div className='col'>
                        <img src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398" alt="" className='d-none d-sm-block'/>
                        <img src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=340" alt="" className='d-block d-sm-none'/>
                    </div>
                    <div className='col-2 col-xl-2'></div>

                </div>

                {/* ================== 5th section ================== */}
                <div className='row py-5 bg-white' id="" >
                    <div className='col-2 col-xl-2'></div>
                    <div className='col'>
                        <img src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398" alt="" className='d-none d-sm-block'/>
                        <img src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=340" alt="" className='d-block d-sm-none '/>
                    </div>
                    <div className='col'><p className='font fw-semibold' style={{ fontSize: "28px" }}>Our retargeting and brand <br className='d-none d-sm-block' />awareness ads make billions of<br /> correct choices every day</p>
                        <p className=''>Our AI does what even the most savvy marketer alone cannot. Our<br className='d-none d-sm-block' /> powerful machine learning makes more predictions per second<br className='d-none d-sm-block' /> than the NASDAQ to attract the right customers to your site and<br className='d-none d-sm-block' /> get them buying again and again.</p>

                        <a href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Explore retargeting ads
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a> <br />
                        <a href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Explore brand awareness ads
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a>

                    </div>

                    <div className='col-2 col-xl-2 d-none d-sm-block'></div>

                </div>


                {/* ================== 6th section ================== */}
                <div className='row py-5 bg-white' id="" >
                    <div className='col-2 col-xl-2 d-none d-sm-block'></div>
                    <div className='col'><p className='font fw-semibold' style={{ fontSize: "28px" }}>Experts to manage your advertising</p>
                        <p className=''>Want to run effective campaigns but don’t have the bandwidth to <br className='d-none d-sm-block' />manage different platforms? AdRoll managed services can be an<br className='d-none d-sm-block' /> extension of your marketing team, providing you with a dedicated <br className='d-none d-sm-block' />platform expert to partner with, helping you and your team <br className='d-none d-sm-block' />achieve your marketing goals and maximize return from your<br className='d-none d-sm-block' /> campaigns.</p>

                        <a href="#" style={{ color: "#cc66a0", textDecorationColor: "#ffe8e0", textDecorationThickness: "7px", margin: "-10px" }}>Get the support you deserve
                            <img src="https://www.adroll.com/assets/svg/icon-arrow.svg" className='ms-1' alt="" /></a></div>
                    <div className='col'>
                        <img src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398" alt="" className='d-none d-sm-block'/>
                        <img src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=340" alt="" className='d-block d-sm-none'/>
                    </div>
                    <div className='col-2 col-xl-2 d-none d-sm-block'></div>

                </div>
                {/* ================== 7th section ================== */}
                <div className="position-absolute1 bg-white" id="box">
                    <div id="" className=' position-'></div>


                    <div className="row">
                        <div className="col p-5">
                            <div className="row pb-4">
                                <div className="col">
                                    <img src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png" width="150" height="128" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" >
                                    <b>"</b>
                                    <span>Since last year, <b>our revenue has <br />increased 191%</b>, <b>our attributed <br />conversions 177%</b>, and our <b>engagement <br />33%</b>. We’re reaching and converting <br />customers higher in the funnel.<b>"</b></span>
                                </div>
                            </div>

                        </div>
                        {/* <img src="https://www.adroll.com/assets/img/globals/bkgd-bluedot-sm.png" alt=""id='dot' width="150"/> */}
                        <div className="col textp " id="pinkybg">
                            {/* <span id='bluedots' className=''></span> */}
                            <p className='textright'><b>Adroll customers </b> make<span className='price'> $165B</span> <br />
                                <span> in sales <b>every year</b></span> </p>
                        </div>
                    </div>
                </div>

                {/* ================== 8th section ================== */}
                <div className='text-center pb-5 pt-2'>
                    <a href="#"><img src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg" width="120" alt="" /></a>
                    <a href="#"><img src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg" width="120" alt="" /></a>
                    <a href="#"><img src="https://images.g2crowd.com/uploads/report_medal/image/1004328/medal.svg" width="120" alt="" /></a>
                    <a href="#"><img src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg" width="120" alt="" /></a>
                </div>

                {/* ================== 9th section ================== */}
                <div className='text-center d-none d-sm-block' style={{ backgroundColor: "#ffe8e0", padding: "100px" }}>
                    <p className='fs-2 fw-semibold'>Increase ROI. Learn from your data.<br />Maximize sales. </p>
                    <button class="btn btn me-3 text-white" type="submit" style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}>
                        <span className='buttext'>GET STARTED</span>
                    </button>
                    <button class="btn btn text-white" type="submit" style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}>
                        <span className='buttext'>GET IN TOUCH</span>
                    </button>
                </div>

                <div className='d-block d-sm-none' style={{ backgroundColor: "#ffe8e0", padding: "45px" }}>
                    <p className='fs-2 fw-semibold'>Increase ROI. Learn <br />from your data. <br className='d-none d-sm-block' />Maximize sales. </p>
                    <button class="btn btn me-3 text-white mb-3" type="submit" style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}>
                        <span className='buttext'>GET STARTED</span>
                    </button>
                    <button class="btn btn text-white" type="submit" style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}>
                        <span className='buttext'>GET IN TOUCH</span>
                    </button>
                </div>
                {/* ================== 10th section ================== */}

                <div className='d-none d-sm-block '>
                    <div className='row py-5 bg-white '>
                        <div className="col "></div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Why AdRoll?</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Overview</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Pricing</p></a>
                            </div>

                            <div className='pt-3'>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>For ecommmerce stores</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>AdRoll for ecommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Shopify</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>WooCommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>BigCommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Magento</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Marketing Platform</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>One platform, every need</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Find more customers</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Build profitable relationships</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Track and improve results</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Protect customer data</p></a>
                            </div>

                            <div className='pt-3'>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Marketing Recipes</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>What are marketing recipes?</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Abandoned cart recovery</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Customer loyalty</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Retargeting</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Brand awareness</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Resources</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Resource library</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Blog</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Community</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Events</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Help Center</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Third-Party Cookies</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>AdRoll UTM Link Builder</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Digital Marketing Newsletter</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Partners</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Overview</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Agencies</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Agency</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Directory</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Partner</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Directory</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Referral</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Program</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>API docs</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Company</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>About</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>News</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Careers</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>NextRoll</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Engineering</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div class="d-flex justify-content-between">
                                <a href="#" style={{ color: "#3c4858" }}><i class="fa-brands fa-facebook fs-4"></i></a>
                                <a href="#" style={{ color: "#3c4858" }} ><i class="fa-brands fa-linkedin fs-4"></i></a>
                                <a href="#" style={{ color: "#3c4858" }}><i class="fa-brands fa-instagram fs-4"></i></a>
                                <a href="#" style={{ color: "#3c4858" }}><i class="fa-brands fa-twitter fs-4"></i></a>
                            </div>
                            <img src="https://www.adroll.com/assets/img/member-sprite.png" alt="" />
                            <img src="https://www.g2.com/products/adroll/widgets/stars?color=white&type=read" alt="" width="150" height="75" />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>


                {/* ================== 11th section ================== */}
                <div style={{ backgroundColor: "#f4f6f9" }} className='p-4'>
                    <div class="d-flex justify-content-center">
                        <img src="https://www.adroll.com/assets/svg/logo-nextroll.svg" alt="" width="135" />
                    </div>
                    <div class="d-flex justify-content-center gap-2 pt-3">
                        <img src="https://www.adroll.com/assets/svg/logo-adroll.svg" alt="" width="80" />
                        <img src="https://www.adroll.com/assets/svg/logo-rollworks.svg" alt="" width="110" />
                    </div>
                    <div class="d-flex justify-content-center text-center pt-4" style={{ fontSize: "10.4px" }} >
                        <p>NextRoll is as an equal opportunity employer.<br />
                            <a href="#" className='textp text-decoration-none '>We stand alongside organizations that support our Rollers and Community.</a></p>
                    </div>


                    <div class="d-flex justify-content-evenly fw-semibold d-xxl-none" style={{ fontSize: "10.4px", padding: " 0px 150px  0px 150px" }}>

                        <a href="#" className='text-decoration-none textp'>Careers</a>
                        <a href="#" className='text-decoration-none textp'>Trust Center</a>
                        <a href="#" className='text-decoration-none textp'>Terms of Service</a>
                        <a href="#" className='text-decoration-none textp'>Website Terms of Use</a>
                        <a href="#" className='text-decoration-none textp'>Privacy Notice</a>
                        <a href="#" className='text-decoration-none textp'>Infringement Policy</a>
                        <a href="#" className='text-decoration-none textp'>Ad Opt Out</a>
                        <a href="#" className='text-decoration-none textp'>CCPA Notice at Collection</a>
                        <a href="#" className='text-decoration-none textp'>AdChoices</a>
                    </div>

                    <div className='d-none d-xxl-block'>
                        <div class="d-flex justify-content-evenly fw-semibold  " style={{ fontSize: "10.4px", padding: " 0px 350px  0px 350px" }}>

                            <a href="#" className='text-decoration-none textp'>Careers</a>
                            <a href="#" className='text-decoration-none textp'>Trust Center</a>
                            <a href="#" className='text-decoration-none textp'>Terms of Service</a>
                            <a href="#" className='text-decoration-none textp'>Website Terms of Use</a>
                            <a href="#" className='text-decoration-none textp'>Privacy Notice</a>
                            <a href="#" className='text-decoration-none textp'>Infringement Policy</a>
                            <a href="#" className='text-decoration-none textp'>Ad Opt Out</a>
                            <a href="#" className='text-decoration-none textp'>CCPA Notice at Collection</a>
                            <a href="#" className='text-decoration-none textp'>AdChoices</a>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center pt-3" style={{ fontSize: "10.4px" }}>
                        <a href="#" className='text-decoration-none textp'>Your Privacy Choices <img src="https://www.adroll.com/assets/img/your-privacy-choices.png" alt="" width="25" />
                        </a>
                    </div>

                    <div class="d-flex justify-content-center pt-3" style={{ fontSize: "10.4px" }}>
                        <p>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit <a href="#" className='text-decoration-none' style={{ color: "#20b8f0" }} >nextroll.com.</a></p>

                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#" id='endbut'>Do Not Sell or Share My Personal Information</a>

                    </div>
                </div>
            </div>
        </div>
    )
}


// Stock Images 

// Titile icon url:       https://www.adroll.com/favicon.png
// Nav bg :    https://www.adroll.com/assets/img/globals/bg-nav-platform.png
// Bluedot : https://www.adroll.com/assets/img/globals/bg-nav-resources.png
// Whitedot : https://www.adroll.com/assets/img/globals/bg-nav-resources-inverse.png
// holiday img : https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=393