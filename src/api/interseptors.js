export const request = (request, next) => {
    request.url = `${request.root.url}${request.url}`;
    return next();
};

export const response = (request, next) => {
    next(() => {
        // console.log(response.status)
    })
};