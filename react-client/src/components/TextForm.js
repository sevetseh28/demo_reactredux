import React, {Component} from 'react';
import {connect} from 'react-redux'; // con conect accedo a dispatch en las props de la componente

class TextForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const input_text = this.getTextVal.value;
        const data = {
            str: input_text
        };

        console.log(data);
        this.props.dispatch({ // Esta accion no hace nada en esta demo, pero se podria mostrar un spinner o algo
            type: 'ADD_TEXT',
            data
        });


        fetch('api/texts/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: "str=" + input_text
        }).then((resp) => {
            resp.json().then((body) => {
                this.props.dispatch({ // Esta accion es la que realmente logra el update en
                    type: 'ADD_TEXT_SUCCESS',
                    data: body
                });
            });
        });

        this.getTextVal.value = '';

        // const body = await response.json();

        // if (response.status !== 201) throw Error(body.message);
        // console.log(body);
        // return body;


    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="text_input" className="sr-only">Text</label>
                    <input type="text" ref={(input) => this.getTextVal = input} className="form-control" id="text_input"
                           placeholder="Text"/>
                </div>
                <button type="submit" className="btn btn-success mb-2">Add text</button>
            </form>
        );
    }
}

export default connect()(TextForm);
