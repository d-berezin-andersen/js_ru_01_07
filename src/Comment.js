import React, { Component } from 'react'
//стоило сделать stateless-компонентом, в остальном все хорошо
class Comment extends Component {

    render() {
        const { comment } = this.props

        return (
            <div>
                <b>{comment.user}</b>: {comment.text}
            </div>
        )
    }
}

export default Comment
