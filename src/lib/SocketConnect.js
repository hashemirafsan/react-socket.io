import React from 'react';
import socketContext from './Context';

const socketConnect = (WrapperComponent) => {
    return class extends React.Component {
        
        render() {
            return (
                <socketContext.Consumer>
                    {
                        (props) => {
                            return (
                                <WrapperComponent
                                    io={props}
                                />
                            )
                        }
                    }
                </socketContext.Consumer>
            );
        }
    }
}

export default socketConnect;