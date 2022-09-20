import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';



const ItemCategorySelect = () => {
  const options = [
    {value: 'tops', label:'Tops'},
    {value: 'bottoms', label:'Bottoms'},
    {value: 'dresses', label:'Dresses/Jumpsuits/Rompers'},
    {value: 'outerwear', label:'Outerwear'},
    {value: 'shoes', label:'Shoes'},
    {value: 'bags', label:'Bags'},
    {value: 'accessories', label:'Accessories'},
    {value: 'jewelery', label:'Jewelery'},
    {value: 'lingerie', label:'Lingerie'},
    {value: 'need', label:'Need It!'},
  ];

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption)
  };

  // const [selectedOption, setSelectedOption] = useState(null);

  return <Select
    onChange={handleChange}
    options={options} 
  />;
}

export default ItemCategorySelect