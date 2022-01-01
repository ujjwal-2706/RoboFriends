import React from 'react';
const SearchBar = ({searchchange}) =>{
    return(
        <div className=  'pa2'>
            <h1> RoboFriends </h1>
            <input type = "search" placeholder = "Search Here " 
            onChange = {searchchange}  
            className = 'pa3 ba b--green bg-lightest-blue'/>
        </div>
    );
}
export default SearchBar;