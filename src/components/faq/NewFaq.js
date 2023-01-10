import React from 'react'
import './NewFaq.css'

function NewFaq() {
    return (
        <section className='New_FaQ'>
            <div id="accordion">
                <img id="img3" src="https://drive.google.com/thumbnail?id=1ELlWmNkO-3Cg9rhphNuS0R07TIyTEoYm" />
                <div id="container">
                    <div className="logo">
                        <img id="img1" src="https://drive.google.com/thumbnail?id=18Beb7vzR8LN5FaJSdoAgJFsokFy55U-A" alt="this is a logo" />
                        <img id="img2" src="https://drive.google.com/thumbnail?id=163GFORy5h1qagZ91rsSt5aWf1y94ENMt" />
                    </div>
                    <div className="text-body">

                        <div id="header">FAQ</div>
                        <div className="faq-section" id="question1">
                            <a className="answer-link" href="#question1"><span>How many team members can I invite?</span>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-up" aria-hidden="true"></i>
                            </a>

                            <div className="answer" id="answer1">
                                You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
                            </div>
                        </div>
                        <div className="faq-section" id="question2">
                            <a className="answer-link" href="#question2"><span>What is the maximum file upload size?</span>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-up" aria-hidden="true"></i>
                            </a>

                            <div className="answer" id="answer2">
                                No more than 2GB. All files in your account must fit your allotted storage space.
                            </div>
                        </div>
                        <div className="faq-section" id="question3">
                            <a className="answer-link" href="#question3"><span>How do I reset my password?</span>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-up" aria-hidden="true"></i>
                            </a>

                            <div className="answer" id="answer3">
                                Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
                            </div>
                        </div>
                        <div className="faq-section" id="question4">
                            <a className="answer-link" href="#question4">
                                <span>Can I cancel my subscription?</span>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-up" aria-hidden="true"></i>

                            </a>

                            <div className="answer" id="answer4">
                                Yes! Send us a message and we’ll process your request no questions asked.
                            </div>
                        </div>
                        <div className="faq-section" id="question5">
                            <a className="answer-link" href="#question5">
                                <span>Do you provide additional support?</span>
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <i className="fa fa-angle-up" aria-hidden="true"></i>
                            </a>

                            <div className="answer" id="answer5">
                                Chat and email support is available 24/7. Phone lines are open during normal business hours.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default NewFaq