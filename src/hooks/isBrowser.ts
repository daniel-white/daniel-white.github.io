import React from 'react';

export default function isBrowser() {
    const [isBrowser, setIsBrowser] = React.useState(false);

    React.useEffect(() => {
        setIsBrowser(true);

        return () => setIsBrowser(false);
    });

    return isBrowser;
}