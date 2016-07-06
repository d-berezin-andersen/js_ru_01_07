import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {

    render() {
        const { comments = [] } = this.props
        const listItems = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)
        
        if (!listItems.length) {
            return (
                <div>
                    <h4>Comments list</h4>
                    There are no comments so far! Be the first one!
                </div>
            )
        }
        
        return (
            <div>
                <h4>Comments list</h4>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default CommentsList