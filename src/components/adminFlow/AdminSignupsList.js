import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { adminSignupsListFetch } from '../../actions';
import AdminSignupsListItem from './AdminSignupsListItem';
import { Card, CardSection } from '../common';

class AdminSignupsList extends Component {
    componentDidMount() {
        this.props.adminSignupsListFetch(this.props.titleKey);
    }

    renderItem(user) {
        return <AdminSignupsListItem user={user} />;
    }

    displaySignupsTotal() {
        if (!this.props.signups) {
            return 0;
        }
        return this.props.signups.length;
    }

    render() {
        const { signups } = this.props;
        return (
            <Card>
                <CardSection>
                    <Text>{'Total Signups: ' + this.displaySignupsTotal()}</Text>
                </CardSection>
            
                <FlatList 
                    data={signups}
                    renderItem={this.renderItem}
                    keyExtractor={user => user.toString()}
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return { signups: state.adminSignups.signups };
};

export default connect(mapStateToProps, { adminSignupsListFetch })(AdminSignupsList);
