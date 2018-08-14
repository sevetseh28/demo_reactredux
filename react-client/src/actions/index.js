export const FETCH_TEXTS = 'FETCH_TEXTS';
export const FETCH_TEXTS_SUCCESS = 'FETCH_TEXTS_SUCCESS';
export const ADD_TEXT = 'ADD_TEXT';
export const ADD_TEXT_SUCCESS = 'ADD_TEXT_SUCCESS';


function createText(str) {
    const response = fetch('api/texts/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: "str=" + str
    });

    return {
        type: ADD_TEXT,
        payload: response
    };

}


export function createTextSuccess(newText) {
    return {
        type: ADD_TEXT_SUCCESS,
        payload: newText
    };
}