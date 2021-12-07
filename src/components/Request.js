import React, { useRef} from 'react'

function Form() {

    const symbolRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
          Symbol: symbolRef.current.value,
      }
        alert( data.Symbol + " was successfully requested!")
    }

    return (
        <div>
            <h1>Request</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="Symbol" id="nameLabel">Symbol Requested</label>
                    <input type="text" placeholder="ETH, BTC, DOT" />
                </div>

                <label for="email">Email</label>
                <input type="email" placeholder="yourname@email.com" />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Form
