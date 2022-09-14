const person = {
    img: "./images/mr-whisekerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

// * to access a value you can just use
console.log(person.phone);

//* but in sometimes it's good destructure this object and pull out the property names for your own use
const {img, name} = person;
// ? in here there are two mew variables (img and name)  
// ? then you can use those new variables
console.log(img, name)


// you can't change the name when you destructuring
// If you do you need to use 
const {img : image} = person;

// * Because of this you can use like below in the prop-example app
export default function Contact({img, name, phone, email}){
    return(
        <div className='contact-card'>
            <img src={img} alt=''/>
            <h3>{name}</h3>
            <div className='info-group'>
                <i className="fa-solid fa-phone"></i>
                <p>{phone}</p>
            </div>
            <div className='info-group'>
                <i className="fa-solid fa-envelope"></i>
                <p>{email}</p>
            </div>
        </div>
    )
}