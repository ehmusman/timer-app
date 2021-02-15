import React from 'react'

interface PropsI {
    title: string;
    getData: () => void;
    classId: string
}
const TimerButton: React.FC<PropsI> = ({ title, getData, classId }) => {
    return (
        <button
            className='btn btn-lg btn-outline-primary mx-2 text-light'
            onClick={() => getData()}
        >
            <i className={`${classId}`}></i>
            &nbsp;
            &nbsp;
            {title}
        </button>
    )
}

export default TimerButton
