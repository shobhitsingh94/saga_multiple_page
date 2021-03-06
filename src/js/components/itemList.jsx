import React from 'react';
import Item from './item';
import _ from 'lodash';
import PropTypes from 'prop-types';

class ItemsList extends React.PureComponent {
    render() {
        return (
            <div>{this.props.filterData &&
            <ul className="inline-display">
                {_.map(this.props.filterData, (filterData, index) => <Item filterData={filterData} key={index} index={index}/>
                )}
            </ul>
            }
            </div>
        );
    }
}

ItemsList.propTypes = {
    filterData: PropTypes.array,

};
export default (ItemsList);
