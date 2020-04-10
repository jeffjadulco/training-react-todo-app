import React from 'react'

export default function Header() {
    return (
      <div>
        <h1 style={headerStyle}>TODO LIST</h1>
      </div>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
