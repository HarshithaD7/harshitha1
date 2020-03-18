import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">Wanna Know more about me?</span>
                                            <h2 className="colorlib-heading">Ok then<i class="fas fa-smile-wink"></i>Who Am I?</h2>
                                            <p> Hey, I'm Tilak ! Currently a Senior Representative,Payroll at Convergys. I love exploring new technologies and a huge fan of the American television sitcom <i>"The Big Bang Theory"</i>.</p>
                                            <p>I spend my leisure time playing pubg and often go to native to spend quality time with my family and Geni (my lovely pet &hearts;) </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Wanna know about my Work Experience?</span>
                                <h2 className="colorlib-heading">Here it is <i class="fa fa-briefcase" aria-hidden="true"></i></h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1" style={{ height: '468px' }}>
                                    <span className="icon">
                                        {/* <i className="icon-bulb" /> */}
                                        <img style={{ height: "62px", width: "78px" }} src="/images/concentrix.png" />
                                    </span>
                                    <div className="desc">
                                        <h3>Senior Representative,Payroll </h3>
                                        <p>Sending follow ups, maintaining all documents/decks pertaining to review call for all the related Business Units,creating action deck for each business unit
                     & sharing it with the Portfolio Leads before the review call,maintaining Risk register incorporating RAG status, reason for Schedule / Budget variance, action(s), owner & GTG date follow ups
</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        {/* <i className="icon-phone3" /> */}
                                        <img style={{ height: "52px" }} src="/images/tesco.png" />
                                    </span>
                                    <div className="desc">
                                        <h3>Payroll - ROI / AP Officer</h3>
                                        <p>Processed memos in relation to pension, adjustments and allowances,liaised with HR Team regarding new hires, terminations, remuneration and conditions of service,processed expenses for monthly employees with regards business mileage claims and liaised with management and staff regarding pay enquiries through calls
and emails.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <img style={{ height: "52px" }} src="/images/mphasis.png" />
                                    </span>
                                    <div className="desc">
                                        <h3 style={{ marginBottom: "0px" }}>PM Senior Infrastructure Engineer</h3>
                                        <p>Managed communications from the PMO mailbox including regular reporting cycle requests,assigned RFF’s to particular SDM,prepared consolidated material from project reports for monthly review ,coordinated with project managers to update their project Risk and issues, pulled Risk and Issues report from PPMC Tool and prepared the report for Weekly review.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
