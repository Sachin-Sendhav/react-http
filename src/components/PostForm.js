import React, { Component } from 'react'

class PostForm extends Component {


    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler() {
console.log('hmm chALEGGGAAAaa')
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>

                </form>
            </div>
        )
    }
}

export default PostForm
