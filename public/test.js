class Clock extends React.Component {

    render() {
        return (
        <div>
        <h1>Hello, {formatName(user)}!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
    );
    };
}

function tick() {
    ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
);
}
setInterval(tick, 1000);

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, {formatName(user)}!</h1>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
// );
//     ReactDOM.render(  //element render 到 root 元素
//         element,
//         document.getElementById('root')
//     );
// }

function formatName(user) {
    return user.firstName+' '+ user.lastName;
}

const user = {
    firstName: 'Chris',
    lastName: 'Wang'
};
