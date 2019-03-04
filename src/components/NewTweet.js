import React, { Component } from 'react';

class NewTweet extends Component {

    state = {
        text: '',
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(()=> ({
            text,
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;

        //todo: add tweet to store.

        console.log('NEW TWEET: ', text);

        this.setState(()=> ({
            text: ''
        }))
    }

    render() {

        const { text } = this.state;

        {/* TODO: redirect to '/' if submitted */}

        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        className='text-area'
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>{tweetLeft}</div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}
                    >
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}

export default NewTweet;