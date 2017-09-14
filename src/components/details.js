import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div id="landing-carousel">
        <div className="scrollable">
            <div className="items">
                <img src="/images/one.jpg" alt="000" />
                <img src="/images/three.jpg" alt="Seven to ten at Leeds & Holbeck" />
                <img src="/images/six.png" alt="Seven to ten at Leeds & Holbeck" />
            </div>
        </div>

        <div className="container ff-overview">
          <div className="" >
            <div className="col-md-12 col-lg-12" >
                 <h4>Projects</h4>
                 <p className="line-height-oneTwo">
                   In contemporary business and science, a project is an individual or collaborative enterprise, possibly involving research or design, that is carefully planned, usually by the project assigned team, to achieve a particular aim.One can also define a project as a set of interrelated tasks to be executed over a fixed period and within certain cost and other limitations.
                 </p>
            </div>
            <div className="col-md-12 col-lg-12">
              <h4>Budget</h4>
              <p className="line-height-oneTwo">
                We know as a small business owner, you don’t have much time to spare, even for your business needs. So we have streamlined our application process to make it quick and easy to enter the details specific to your business. With all your documentation at hand, you can complete your application in one sitting and be off running your business in no time.
              </p>
            </div>
            <div className="col-md-12 col-lg-12">
              <h4>Maintenance</h4>
              <p className="line-height-oneTwo">
                Apply today and receive funds as soon as tomorrow. We consider your existing business checking history — not just your credit score — so you can secure a financing solution with the bank you know and trust. The FastFlex Small Business Loan is an easy new financing solution that can help you move quickly on business growth opportunities when they arise.
              </p>
            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default Details;
