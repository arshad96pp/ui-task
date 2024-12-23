import React from 'react'

const Button = ({ title,active }: any) => {
    return (
        <button className={`px-8 py-3 rounded-3xl text-white font-medium ${active ? 'bg-gradient-to-r from-[#8C01FA] to-[#000000]':'border'} hover:opacity-90 transition-all`}>
        {title}
      </button>
      

    )
}

export default Button