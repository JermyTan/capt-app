import React from 'react';
import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AdminHome from './components/adminFlow/AdminHome';
import Announcements from './components/mainFlow/Announcements';
import AdminCreate from './components/adminFlow/AdminCreate';
import AdminEdit from './components/adminFlow/AdminEdit';
import AdminSignupsList from './components/adminFlow/AdminSignupsList';
import Profile from './components/mainFlow/Profile';
import Buzz from './components/mainFlow/Buzz';
import MainDetail from './components/mainFlow/MainDetail';
import UserSignupsList from './components/mainFlow/UserSignupsList';
import AdminDownloadSignups from './components/adminFlow/AdminDownloadSignups';
import ChangePasswordForm from './components/mainFlow/ChangePasswordForm';
import Booking from './components/mainFlow/Booking';
import BookingForm from './components/mainFlow/BookingForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='CAPT App' initial />
                </Scene>

                <Scene key='main' hideNavBar>
                    <Tabs>
                        <Scene 
                            key='profile'
                            component={Profile}
                            title='My Profile'
                        />
                        <Scene 
                            key='announcements'
                            component={Announcements}
                            title='Announcements'
                            initial
                        />
                        <Scene 
                            key='buzz'
                            component={Buzz}
                            title='Buzz'
                        />
                        <Scene 
                            key='booking'
                            component={Booking}
                            title='Booking'
                        />
                    </Tabs>
                    <Scene 
                        key='mainDetail'
                        component={MainDetail}
                        title='Announcement Details'
                    />
                    <Scene 
                        key='userSignupsList'
                        component={UserSignupsList}
                        title='My Signups'
                    />
                    <Scene 
                        key='changePasswordForm'
                        component={ChangePasswordForm}
                        title='Change Password'
                    />
                    <Scene 
                        key='bookingForm'
                        component={BookingForm}
                        title='Booking Details'
                    />
                </Scene>

                <Scene key='admin'>
                    <Scene 
                        key='adminHome' 
                        component={AdminHome} 
                        title='Admin Functions' 
                        rightTitle='Add'
                        onRight={() => Actions.adminCreate()}
                        initial 
                    />
                    <Scene 
                        key='adminCreate' 
                        component={AdminCreate}
                        title='Create Announcment'    
                    />
                    <Scene 
                        key='adminEdit'
                        component={AdminEdit}
                        title='Edit Announcement'
                    />
                    <Scene 
                        key='adminSignupsList'
                        component={AdminSignupsList}
                        title='Event Signups'
                    />
                    <Scene 
                        key='adminDownloadSignups'
                        component={AdminDownloadSignups}
                        title='Download Event Signups'
                    />
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;