import React, { Component } from 'react'

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