import React from 'react';
import CardArray1 from '../components/cardArray';
import SearchBar from '../components/searchbar';
import './App.css';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robot: []
            ,
            searchbox: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robot:users})})
    }
    onsearch = (event)=>{
        this.setState({searchbox: event.target.value});
        
    }
    render(){
        const filteredRobots = this.state.robot.filter(robo => {
            
            return robo.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
        });
        
        return(
            <div className = 'tc'>
                <SearchBar searchchange = {this.onsearch}/>
                <div style = {{overflowY : 'scroll', border:'1px solid black', height:'500px'}}>
                <CardArray1 robots=  {filteredRobots}/>
                </div>
            </div>
            );
    }
}
export default App;