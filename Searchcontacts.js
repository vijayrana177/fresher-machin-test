import React , { useState,useEffect }  from 'react'
 //forr Search Conatacts
        const SearchConatct = () => {
        const [searchText, setSearchText] = useState('');
       const [searchResults,setSearchResults] = useState([]);
        
       const handleSearch = (event) => {
     const searchText = event.target.value;
       setSearchText(searchText);
 
    const results = contacts.filter(
        (contact) =>
        contact.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchText.toLowerCase());
        
        };
  };
