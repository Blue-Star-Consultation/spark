import { Helmet } from 'react-helmet';
import React from 'react';

function EvalOverlook() {
    return (

        <div>
            <Helmet>
                <title>
                    Your evaluation
                </title>
            </Helmet>
            <div>
                <h1>Bob's Rubrics</h1>
            </div>
            <div>
                <h1>Teamwork</h1>
            </div>


            <div>
                <div>
                    <h2>Collaboration</h2>
                </div>
                <div className="title-wrapper">
                    <div className='title'>
                        <p>Text</p>
                    </div>
                    <div className='title'>
                        <p>Text</p>
                    </div>
                    <div className='title'>
                        <p>Text</p>
                    </div>
                    <div className='title'>
                        <p>Text</p>
                    </div>
                    <div className='title'>
                        <p>Text</p>
                    </div>
                </div>
                <div>
                    <p>Comment about Collaboration:</p>
                    <input type="text" className="comment-topic" placeholder="Type your comment..." />
                </div>
            </div>

            <div>
                <p>Comment about Teamwork:</p>
                <input type="text" className="comment-category" placeholder="Type your comment..." />
            </div>
        </div>

    );
}

export default EvalOverlook;
