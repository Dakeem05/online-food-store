import React, {useState, useCallback} from 'react'
import { Combinations } from './Components-books/Combinations';
import { Shelf } from './Components-books/Shelf';
const fieldStyle = {
 marginTop: "20px",
 float: "left",
 width: "75%",
 fontSize: 20
};

function Book() {
    const [bookCount, setBookCount] = useState("");
    const [shelfName, setShelfName] = useState("");
    const [shelfSpace, setShelfSpace] = useState("");
    
    const handleClick = useCallback((theSpace) => {
        setShelfSpace(theSpace)
    }, [])
    const handleShelfChange = (e) => {
        setShelfName(e.target.value)
    }
    const handleBookCountChange = (e) => {
        setBookCount(e.target.value)
    }
  return (
    <div width="100%">
        <input
        placeholder="Shelf name"
        style={fieldStyle}
        value={shelfName}
        onChange={handleShelfChange}
        />
        <label style={fieldStyle}>
        <Shelf shelfName={shelfName} />
        </label>
        <input
        placeholder="How many books?"
        style={fieldStyle}
        value={bookCount}
        onChange={handleBookCountChange}
        />
        <label style={fieldStyle}>
        {bookCount > 0 && <Combinations checkSpace={handleClick} countBooks={bookCount} />}
        {shelfSpace&&(
            <p style={fieldStyle}> The space st the shelf is - {shelfSpace}</p>
        )}
        </label>
    </div>
  )
}

export default Book