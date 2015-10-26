/*class Main extends React.component{
    render() {
        return(
            <h1>Hello from the component</h1>
        );
    }
}*/


let documentReady = () => {
    React.render(<h1>Hello React</h1>, document.getElementById('react'));
};

$(documentReady);
