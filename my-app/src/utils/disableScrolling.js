const disableScrolling = () => {
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        var keyCode = evt.keyCode;
        if (keyCode >= 37 && keyCode <= 40) {
            return false;
        }
    };
}
export default disableScrolling;