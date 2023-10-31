import React from 'react'
import './style/Dropdown.css'

export const Dropdown = () => {
  return (
    <div className='drp'>
      <div className="row position-absolute ">
        <div className="col-3">
          <ul>
            <li className='fw-semibold list-unstyled'>
              <a href="#">Marketing Platform</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Audience & Segmentation</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Marketing Automation</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Customer Privacy Protection</a>
            </li>
          </ul>
        </div>
        

        <div className="col">
          <ul>
            <li className='fw-semibold list-unstyled'>
              <a href="#">Campaigns</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Retargeting Ads</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Brand Awareness Ads</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className='fw-semibold list-unstyled'>
              <a href="#">Marketing Channels</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Display Advertising</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Video Advertising</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Native Advertising</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Email Marketing</a>
            </li>
          </ul>
        </div>


        <div className="col">
          <ul>
            <li className='fw-semibold list-unstyled'>
              <a href="#">Connected Channels</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Facebook Advertisting</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Instagram Advertisting</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">TikTok Advertisting</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Pinterest Advertisting</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Google Advertising</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className='fw-semibold list-unstyled'>
              <a href="#">Analytics</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Cross-channel Performance</a>
            </li>
            <li className='list-unstyled'>
              <a href="#">Cross-channel Attribution</a>
            </li>
          </ul>
        </div>
      </div>


        <div className='row '>
          <div className="col-12 pinkdots ">
<span className='dot'> 1 <br />2 <br />3 <br />4 
</span>
        {/* <img src="https://www.adroll.com/assets/img/globals/bg-nav-platform.png" alt="" /> */}
          </div>
        </div>

    </div>
  )
}
