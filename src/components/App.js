import React, { useState, useEffect } from "react";

function App () {
    const [randoDog, setRandoDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => setRandoDog(data.message))
        }, []);

    if (!randoDog) return (
        <div><p>Loading...</p></div>)

    return (
        <img src={randoDog} alt="A Random Dog" />
    )
}

export default App;