import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }

    componentDidMount() {
        // axios.post("https://httpbin.org/post", {
        //     name: "lucy",
        //     age: 28
        // }).then(response => {
        //     console.log(response);
        // })(error => {
        //     console.log(error);
        // });

        axios({
            url: "https://httpbin.org/post",
            data: {
                name: "mjk",
                age: 40
            },
            method: "post"
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }
}
