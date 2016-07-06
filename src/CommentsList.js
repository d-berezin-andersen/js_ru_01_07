import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    state = {
        isOpen: false
    }

    render() {

        const {isOpen} = this.state

        if (!isOpen) {
            return (
                <div>
                    <a href="#" onClick={this.toggleOpen}> Show comments </a>
                </div>
            )
        }

        const {comments = []} = this.props

        if (!comments.length) {
            return (
                <div>
                    <a href="#" onClick={this.toggleOpen}> Hide comments </a>
                    <p>There are no comments so far! Be the first one!</p>
                </div>
            )
        }

        const listItems = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
return (
            <div>
                <a href="#" onClick={this.toggleOpen}> Hide comments </a>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    toggleOpen = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentsList