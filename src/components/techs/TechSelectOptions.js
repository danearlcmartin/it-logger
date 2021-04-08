import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techAction';

const TechSelectOptions = ({
    getTechs,
    tech: { techs,loading }
}) => {
    return (
        <div>
            
        </div>
    )
}

TechSelectOptions.propTypes = {

}

export default connect(mapStateToProps,{getTechs}) TechSelectOptions
