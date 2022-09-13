import './App.css'
import React from 'react'
import Contact from './components/Contact'

function App() {
  return (
    <div className="contacts">
      {/* 
          //* Since this is a custom component We can pass in any property or attribute
          //* So we have pass 4 pieces of data in each one of contacts cards to pass to the 
              //* Contact component through the Contact instance
          // ? In react we don't call these attributes we call them properties(props)
      */}
      <Contact 
        img={require('./images/cat01.webp')}
        name="Mr. Whiskersons"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img= {require('./images/cat02.jpeg')}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />     
      <Contact 
        img={require('./images/cat03.jpeg')}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />     
      <Contact 
        img={require('./images/cat04.webp')}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
