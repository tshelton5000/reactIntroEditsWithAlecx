import React, {Component, useState, useEffect, useRef} from 'react';

// export default class Stopwatch extends Component {
//     constructor(props){
//         super(props);

//         ["lap", "update", "reset", "toggle"].forEach((method) => {
//             this[method] = this[method].bind(this);
//         });

//         this.state = this.initialState = {
//             isRunning: false,
//             lapTimes: [],
//             timeElapsed: 0,
//         };
//     }

//     toggle() {
//         console.log({lapTimes: this.state.lapTimes});
//         console.log({isRunning: this.state.isRunning});
//         this.setState({isRunning: !this.state.isRunning}, () => {
//             this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
//         });
//     }

//     startTimer() {
//         this.startTime = Date.now();
//         console.log(Date.now());
//         this.timer = setInterval(this.update, 10);
//     }

//     update() {
//         const delta = Date.now() - this.startTime;
//         this.setState({timeElapsed: this.state.timeElapsed + delta});
//         this.startTime = Date.now();
//     }

//     lap() {
//         const {lapTimes, timeElapsed} = this.state;
//         console.log(lapTimes);
//         console.log(timeElapsed);
//         this.setState({lapTimes: lapTimes.concat(timeElapsed)});
//     }

//     reset() {
//         clearInterval(this.timer);
//         this.setState(this.initialState);
//     }

//     render() {
//         const {isRunning, lapTimes, timeElapsed} = this.state;
//         return (
//             <div>
//                 <h1> React Stopwatch</h1>
//                 <TimeElapsed id="timer" timeElapsed={timeElapsed}/>
//                 <button onClick={this.toggle}>
//                     {isRunning ? 'Stop' : 'Start'}
//                 </button>
//                 <button onClick={isRunning ? this.lap : this.reset}
//                 disabled={!isRunning && !timeElapsed}>
//                 {isRunning || !timeElapsed ? 'Lap' : 'Reset'}
//                 </button>
//                 {lapTimes.length > 0 && <LapTimes lapTimes={lapTimes}/>}
//             </div>
//         )
//     }
// }

// const LapTimes = (props) => {
//     const rows = props.lapTimes.map((lapTime, index) =>
//         <tr key={++index}>
//             <td>{index}</td>
//             <td><TimeElapsed timeElapsed={lapTime}/></td>
//         </tr>
//     );

//     return (
//         <table id="lap-times">
//             <thead>
//                 <tr>
//                     <th>Lap</th>
//                     <th>Time</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//     );
// }

// const TimeElapsed = (props) => {
//     const getUnits = () => {
//         const seconds = props.timeElapsed / 1000;
//         return {
//             min: Math.floor(seconds / 60).toString(),
//             sec: Math.floor(seconds % 60).toString(),
//             msec: (seconds % 1).toFixed(3).substring(2)
//         };
//     }

//     const leftPad = (width, n) => {
//         if ((n + '').length > width){
//             return n;
//         }
//         const padding = new Array(width).join('0');
//         return (padding + n).slice(-width);
//     }
//     const units = getUnits();
//     return (
//         <div id={props.id}>
//             <span>{leftPad(2, units.min)}:</span>
//             <span>{leftPad(2, units.sec)}.</span>
//             <span>{units.msec}</span>
//         </div>
//     );
// }

const StopWatchApp2 = () => {
    const startTimeRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if (isRunning){
            const interval = setInterval(update, 10);

            return () => {clearInterval(interval)}
        }
    })

    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.now();
    }

    const start = () => {
        setIsRunning(true); 
        startTimeRef.current = Date.now()
    }

    const stop = () => {
        setIsRunning(false);
    }

    const lap = () => {
        setLaps([...laps, time]);
    }

    const reset = () => {
        setTime(0);
        setLaps([]);
    }

    return(
        <div>
            <p>{time}</p>
            {isRunning ? <button onClick={stop}>Stop</button>: <button onClick={start}>Start</button>}
            {isRunning ? <button onClick={lap}>Lap</button> : <button onClick={reset}>Reset</button>}
            {laps.map(time => <span>{time}</span>)}
        </div>
    )
}

export default StopWatchApp2;