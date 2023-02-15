import React, {useEffect, useState} from 'react';

const MainPage = () => {

    const [error, setError] = useState(false);

    const handleError = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <div>
            <h1> Main Page</h1>

            <button onClick={handleError}> Throw on Error </button>
        </div>
    );
};

export default MainPage;
