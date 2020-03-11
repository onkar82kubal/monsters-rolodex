import React, {
    Component
} from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list.component';
import jsonData from './data/monsters.json';
import { SearcBox } from './components/search-box/search-box.component';

class App extends Component {    

    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField: ''
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')    
        // .then(response => response.json())
        //     .then(users => this.setState({ monsters: users}));        
        this.setState({ monsters: jsonData });
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            )
        return ( <div className = "App" >
            {/* <input type="search" 
             placeholder="Search monster" 
             onChange={ e => {
                 this.setState({ searchField: e.target.value }, () => console.log(this.state));                               
             }} /> */}
             <h1>Monsters Rolodex</h1>
            <SearcBox placeholder="Search monster" handleChange={e =>
                this.setState({ searchField: e.target.value })} />
            <CardList monsters={filteredMonsters} />
            </div >
        );
    }
}

export default App;