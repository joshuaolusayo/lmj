export default function componentLoader(lazyComponent, attemptsLeft = 3) {
    return new Promise((resolve, reject) => {
        lazyComponent()
            .then(resolve)
            .catch((error) => {
                // retry after 1500ms
                setTimeout(() => {
                    if (attemptsLeft === 1) {
                        reject(error);
                        return;
                    }
                    // Call componentLoader again
                    componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
                }, 1500);
            });
    });
}