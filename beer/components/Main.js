import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Search from './Search';
class Main extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() { // 生命周期 onlode
        console.log(this.props.match,"---------")
        const params = this.props.match.params; // /search/:searchTerm
        const searchTerm = params.searchTerm || undefined;
        console.log(searchTerm,'+++++++++');
        this.loadBeers(searchTerm);
    }

    loadBeers(){
        
    }

    render() {
        return(
            <div className="wrapper">
                <Header siteName="Beer me!" />
                <Link to="/about">About</Link>
                <Search />
            </div>
        )
    }
}

export default Main;