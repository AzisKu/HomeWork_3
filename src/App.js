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

// import React from "react";

// class EssayForm extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: "Please,write essay about your favorite music,my favorite music mostly is rock music,also i like subgenres like:Pop punk,alternative rock,electro rock-Pop"};
            
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     handleSubmit(event){
//         alert("Отправленное имя" + this.state.value);
//         event.preventDefault()
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Эссе:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Отправить"/>
//             </form>
//         );
//     }
// }


export default EssayForm;

// пример №1 Жизненный Цикл Компонента
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    const { date } = this.state;
    return (
      <div>{date.toLocaleTimeString()}</div>
    );
  }
}
// пример №2 с методом componentWillunmout

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    return (
      <div>{date.toLocaleTimeString()}</div>
    );
  }
}






