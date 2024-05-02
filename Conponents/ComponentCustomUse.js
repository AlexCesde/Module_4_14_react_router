import React, { useState } from 'react';

const useCustom = (initial) => {
    const [number, setNumber] = useState(initial);

    const setCustomNumber = (value) => {
        setNumber(value);
    };

    return [number, setCustomNumber];
};

export { useCustom };
