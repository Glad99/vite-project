import PropTypes from 'prop-types';

const Card = ({item}) => {
    return (
        <div className="item" key={item.id}>
            <p>UserName: {item.username}</p>
            <p>FullName: {item.fullName}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>

            <button className="bg-green-400 mt-10 rounded" onClick={item.func} >Click me</button> 
        </div>
    )
};
Card.propTypes = {
    item: PropTypes.shape({
    items: PropTypes.string,
    fullName: PropTypes.string
})
}

export default Card