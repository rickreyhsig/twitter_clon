import Greet from './greet';

class Main extends React.Component {
    render() {
        return(
            <Greet />
        );
    }
}

let documentReady = () => {
    React.render(
      <Main/>,
      document.getElementById('react')
    );
};

$(documentReady);
