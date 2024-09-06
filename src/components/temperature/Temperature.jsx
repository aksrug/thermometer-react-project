import PropTypes from 'prop-types';
import './Temperature.style.css';

function Temperature({ count }) {
    const backgroundColor = count < 0 ? 'cyan' : 'red';
    const height = Math.abs(count) * 2;
    const transformValue = count < 0 ? `translateY(${height}px)` : 'translateY(0)';

    return (
        <div className= "temperatureContainer">
            <div className="temperatureBar">
                <div className="temperature"
                    style={{ height: height, backgroundColor, transform: transformValue }}></div>
                <div className="middleBar"></div>
            </div>
            <div className="countContainer">
                <span>{count}</span>
                <span>C</span>
            </div>
        </div>
    );
}

Temperature.propTypes = {
    count: PropTypes.number.isRequired
};

export default Temperature;
