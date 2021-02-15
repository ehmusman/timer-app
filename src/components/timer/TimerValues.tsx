import React from 'react'

interface PropsI {
    seconds: number,
    minutes: number,
    hours: number
}
const TimerValues: React.FC<PropsI> = ({ seconds, minutes, hours }) => {
    return (
        <>
            <div className='border'>
                <div className="card-header display-4 ">
                    <span className="col-3">{hours <= 10 ? '0' + hours : hours} :</span>
                    <span className="col-3">{minutes <= 10 ? '0' + minutes : minutes}:</span>
                    <span className="col-3">{seconds <= 10 ? '0' + seconds : seconds}</span>
                </div>
                <div className="card-title row">
                    <small className="col-3 ml-5">Hours</small>
                    <small className="col-3">Minutes</small>
                    <small className="col-3">Seconds</small>
                </div>
            </div>
        </>
    )
}

export default TimerValues
