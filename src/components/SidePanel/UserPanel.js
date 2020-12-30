import React, { Component } from 'react'
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react'
import firebase from '../../firebase'

export class UserPanel extends Component {

    state = {
        user: this.props.currentUser
    }

    componentDidMount() {
        this.setState({ user: this.props.currentUser})
    }

    dropdownOptions = () => [
        {
            key: 'user',
            text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },

        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },

        {
            key: 'signout',
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }

    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('Signed Out');
            })
    }
 

    render() {

        const { user } = this.state

        return (
            <Grid style={{ background: 'light-black' }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2rem', margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>Friends Chat</Header.Content>
                        </Header>

                    </Grid.Row>

                        {/* User Dropdown */}
                        <Header style={{ padding: '0.25rem'}} as="h4" inverted>
                            <Dropdown trigger={
                                <span>
                                    <Image src={user.photoURL} spaced="right" avatar />
                                    {this.state.user.displayName}
                                </span>
                            } options={this.dropdownOptions()} />
                        </Header>

                </Grid.Column>

            
            </Grid>
        )
    }
}



export default UserPanel