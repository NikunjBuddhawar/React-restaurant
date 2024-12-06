import React, { useState } from 'react';
import "./Reserve.css";

const DateTimeInput = () => {
    const [futureDate, setFutureDate] = useState('');
    const [futureTime, setFutureTime] = useState('13');
    const [people, setPeople] = useState('');
    const [mobile, setMobile] = useState('');
    const [result, setResult] = useState('');
    const [checker, setChecker] = useState(true);

    const handleSubmit = () => {
        setChecker(false);
        console.log(futureDate, futureTime);  // Add a log to confirm the selected date and time
        const interval = setInterval(() => {
            const selectedDate = new Date(futureDate);
            const selectedTime = parseInt(futureTime);
    
            const now = new Date();
            const futureDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime);
    
            const difference = futureDateTime - now;
    
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            const resultString = `${days} : ${hours} : ${minutes} : ${seconds}`;
            console.log(resultString);  // Log result to check value
            setResult(resultString);
        }, 1000);
    };
    

    const hourOptions = [];
    for (let i = 13; i <= 21; i++) {
        hourOptions.push(<option key={i} value={i}>{i}pm</option>);
    }

    return (
        <div className="zero">
            <div className="outbox">
                <div className="box">
                    <div className={checker ? "" : "blue"}>
                        <h1>Reserve a Table now!</h1>
                        <div className="inputs">
                            <div className="room">
                                <label>
                                    <input type="date" value={futureDate} onChange={(e) => setFutureDate(e.target.value)} />
                                </label>

                                <label>
                                    <select value={futureTime} onChange={(e) => setFutureTime(e.target.value)}>
                                        {hourOptions}
                                    </select>
                                </label>
                            </div>

                            <div className="noclassroom">
                                <label>
                                    <input type="number" placeholder="People" value={people} onChange={(e) => setPeople(e.target.value)} />
                                </label>

                                <label>
                                    <input className="eleven" type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                    {result && <div className='inbox'><h1 className='two'>Your table has been booked!</h1>
                        <p className='three'>See You In</p>
                        <p className='four'>{result}</p></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default DateTimeInput;
