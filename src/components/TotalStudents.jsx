import React from "react";

const TotalStudents = ({students}) => {
    return (
        <div className="card u-flex u-flex-vertical u-cross-center">
            <div className='u-flex u-cross-center'>
                <p
                    className='icon-user'
                    style={{ marginRight: '15px' }}
                ></p>
                <h5 className='u-bold'>Total students</h5>
            </div>
            <h1
                className='u-bold'
                style={{ fontSize: '80px', color: '#5D5FEF' }}
            >
                {students.length}
            </h1>
        </div>
    )
}

export default TotalStudents;

