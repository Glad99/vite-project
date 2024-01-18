import PropTypes from 'prop-types';


const Greeting = ({name, username, age})=> {
    return <div>Hey, how are you {name} {username}, I am {age} years old</div>;
};
Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    username: PropTypes.string
}
export default Greeting