export const eventsToDispatch = {
    PRODUCT_ADDED: 'PRODUCT_ADDED'
};

const dispatchEvent = (event, data) => {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
    console.log('dispatched', event);
}

export default dispatchEvent;