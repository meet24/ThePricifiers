import React, { useState } from 'react';
import Sidebar from '../src/components/Sidebar';
import PricingCard from '../src/components/PricingCard';
import './App.css';

function App() {
  const [customStyles, setCustomStyles] = useState([
    {
      id: '1',
      fontSize: '20px',
      fontColor: '#ffffff',
      templateSize: '300px',
      templateColor: 'linear-gradient(-45deg,#643d56,#643d56)',
      iconClass: 'fa-paper-plane',
      title: 'Template 1',
      price: '25',
      features: ['5 GB Space', '2 Domain Names', '7 Email Address', 'No Live Support']
    },
    {
      id: '2',
      fontSize: '18px',
      fontColor: '#ffffff',
      templateSize: '300px',
      templateColor: 'linear-gradient(-45deg,#9f4f57,#9f4f57)',
      iconClass: 'fa-car',
      title: 'Template 2',
      price: '30',
      features: ['10 GB Space', '3 Domain Names', '15 Email Address', 'Email Support Only']
    },
    {
      id: '3',
      fontSize: '22px',
      fontColor: '#ffffff',
      templateSize: '300px',
      templateColor: 'linear-gradient(-45deg,#68793a,#68793a)',
      iconClass: 'fa-bicycle',
      title: 'Template 3',
      price: '20',
      features: ['15 GB Space', '5 Domain Name', '20 Email Address', ' 24/7 Live Support']
    }
  ]);

  const updateCustomStyle = (updatedIndex, updatedStyle) => {
    setCustomStyles(prevStyles => {
      const newStyles = [...prevStyles];
      newStyles[updatedIndex] = updatedStyle;
      return newStyles;
    });
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className='col-sm-4'>
                <Sidebar updateCustomStyle={updateCustomStyle} customStyles={customStyles} />
              </div>
              <div className='col-sm-7 d-flex justify-content-center'>
                {customStyles.map((style, index) => (
                  <PricingCard
                    key={index}
                    index={index}
                    {...style}
                    id= {style.id}
                    features={style.features} // Pass features as a prop
                    fontColor={style.fontColor}
                    fontSize={style.fontSize}
                    fontFamily={style.fontFamily}
                    fontStyle={style.fontStyle}
                    templateSize={style.templateSize}
                    templateColor={style.templateColor}
                    updateCustomStyle={updateCustomStyle} // Pass update function to PricingCard
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
