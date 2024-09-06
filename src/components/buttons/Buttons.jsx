import PropTypes from 'prop-types';
import './Buttons.style.css';

function Buttons({ setCount }) {
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
        <div className="btnContainer">
            <button onClick={increment} style={{ backgroundColor: "red" }}>+</button>
            <button onClick={decrement} style={{ backgroundColor: "cyan" }}>-</button>
        </div >
    )
}

Buttons.propTypes = {
    setCount: PropTypes.func.isRequired
};

export default Buttons;
