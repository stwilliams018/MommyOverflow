import React, {Component } from 'react';
import MainNavigation from './components/Navigation/MainNavigation';
import MainNavigation from './components/Profile/profile';

class Profile extends Component {
    render() {
        return (  
            <MainNavigation />
            <Profile />
        );
    }
}

export default ProfilePage;