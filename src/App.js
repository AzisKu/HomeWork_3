import React,{useState,useEffect} from "react";
const styles = {
    fontSize:'30px'
}
// Динамические часы(часы в реальном времени)
export default function (props){
    const [dateNow,setDate] = useState(getTime())

    useEffect(()=> {
        setInterval(()=>{
            setDate(getTime())
        },1000)
    },[])

    function getTime(){
        var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes =(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds =(date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return {hours,minutes,seconds}
    }

    return(
        <div className="progress-bar">
            <p style={styles}>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
        </div>
    )
}

// Пример с использованием State
// class Button extends React.component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//         };
//     }
//
//     updateCount() {
//         this.setState((prevState, props) => {
//             return{count: prevState.count + 1}
//         });
//     }
//
//     render() {
//         return (<button
//             onClick={() => this.updateCount()}
//         >
//             Clicked{this.state.count} times
//         </button>);
//
//
//     }
//
// }


// props Пример
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// }
//
// const element = <Welcome name="Sara" />;

// код из перовго урока (секундомер)
// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { seconds: 0}
//     }
//
//     tick() {
//         this.setState(state =>({seconds: state.seconds + 1}));
//     }
//
//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(),1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }
//
//     render() {
//         return (
//             <div>
//                 Секунды:{this.state.seconds}
//             </div>
//         )
//
//     }
// }

// export default Timer;



