const React = require('react');

class WorldRelay extends React.Component {

    state = {
        greeting : 'Hello, Webpack',
    }

    render(){
        return <div>{this.state.greeting}</div>
    }
}

module.exports = WorldRelay;