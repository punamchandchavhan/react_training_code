
import React from 'react'


class DateField extends React.Component {
	render() {
		return (
			
			<input type="date" name={this.props.name} value={this.props.selectedDate} 
			onChange={this.props.handleDate} className="form-control"  />
		);
	}
}

export default DateField
