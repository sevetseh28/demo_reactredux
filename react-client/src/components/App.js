import React from "react";
import TextForm from './TextForm';
import AllTexts from './AllTexts';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Texts React/Redux App</h1>
                <TextForm />
                <AllTexts />
            </div>

        );
    }
}
export default App;
