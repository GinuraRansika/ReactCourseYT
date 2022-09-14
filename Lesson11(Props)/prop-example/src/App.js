import './App.css'
import React from 'react'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'

function App() {
  return (
    <>
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
        <div className="contacts">
        {/* 
            //* Since this is a custom component We can pass in any property or attribute
            //* So we have pass 4 pieces of data in each one of contacts cards to pass to the 
                //* Contact component through the Contact instance
            // ? In react we don't call these attributes we call them properties(props)
        */}
        <Contact2 
          img={require('./images/cat01.webp')}
          name="Mr. Whiskersons"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact2 
          img= {require('./images/cat02.jpeg')}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />     
        <Contact2 
          img={require('./images/cat03.jpeg')}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />     
        <Contact2 
          img={require('./images/cat04.webp')}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </>
  );
}

export default App;


/*
  ! What do props help us accomplish?
      ? just like parameters past into a functions props 
      ? being passed into a component
      ? Make that component more reusable

  
  ! Can I pass a custom prop to a native DOM element?
      ? Noo
      because the JSX we use to describe native DOM elements will
      be turned into REAL DOM elements by React. 
      And real DOM elements only have the properties/attributes
      specified in the HTML specification.
    
  ! What data type is "props" when the component receives it?
      ? An Object!
*/