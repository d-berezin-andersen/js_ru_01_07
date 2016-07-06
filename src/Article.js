import React, { Component } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {
    state = {
        isOpen: false
    }
    
    render() {
        const article = this.props.article
        const { isOpen } = this.state
        const body = !isOpen ? null :
            <div>
                <section>{ article.text }</section>
                <CommentsList comments = { article.comments} />
            </div>

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article