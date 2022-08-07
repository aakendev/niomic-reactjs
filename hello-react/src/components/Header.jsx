import React from 'react';

const Header = () => {
  const datalist = [
    {nama: "Anonim", umur: 12,},
    {nama: "Bababa", umur: 10,},
  ];
  return (
    <div>
      <ol>
        {
          datalist.map((value, index) => {
            return <li key={index}>{value.nama}</li>
          })
        }
      </ol>
    </div>
  );
};

export default Header;