import React, { useState } from 'react'
import TimerButton from './TimerButton'
import TimerValues from './TimerValues'


function Timer() {
    interface TimeI {
        seconds: number,
        minutes: number,
        hours: number
    }
    const [time, setTime] = useState<TimeI>({ seconds: 0, minutes: 0, hours: 0 })
    const [interval, setinterval] = useState<number>(0)
    const [toggle, setToggle] = useState(1)

    const startTimer = () => {
        run();
        setToggle(2)
        setinterval(Number(setInterval(run, 1000)))
    }

    var updatedSeconds = time.seconds, updatedMinutes = time.minutes, updatedHours = time.hours;
    const run = () => {
        if (updatedSeconds === 59) {
            updatedMinutes++;
            updatedSeconds = 0
        }
        if (updatedMinutes === 59) {
            updatedHours++;
            updatedMinutes = 0;
        }
        updatedSeconds++
        return setTime({ seconds: updatedSeconds, minutes: updatedMinutes, hours: updatedHours })
    }

    const pauseTimer = () => {
        setToggle(3)
        clearInterval(interval)
    }
    const resumeTimer = () => startTimer()
    const resetTimer = () => {
        clearInterval(interval)
        setToggle(1);
        setTime({ seconds: 0, minutes: 0, hours: 0 })
    }
    return (
        <div className='app-container'>
            <div className="timer d-flex align-items-center justify-content-center">
                <div className="card bg-transparent text-light">
                    <TimerValues
                        seconds={time.seconds}
                        minutes={time.minutes}
                        hours={time.hours}
                    />
                    <div className="card-body row">
                        {toggle === 1 ? (
                            <TimerButton
                                title='Start'
                                getData={startTimer}
                                classId='fas fa-play'
                            />
                        ) : null}
                        {toggle === 2 ? (
                            <>
                                <TimerButton
                                    title='Pause'
                                    getData={pauseTimer}
                                    classId='fas fa-pause'
                                />
                                <TimerButton
                                    title='Reset'
                                    getData={resetTimer}
                                    classId="fas fa-trash-restore-alt"
                                />
                            </>
                        ) : null}
                        {toggle === 3 ? (
                            <>
                                <TimerButton
                                    title='Resume'
                                    getData={resumeTimer}
                                    classId='fas fa-play'
                                />
                                <TimerButton
                                    title='Reset'
                                    getData={resetTimer}
                                    classId="fas fa-trash-restore-alt"
                                />
                            </>
                        ) : null}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Timer

