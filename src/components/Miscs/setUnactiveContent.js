const setUnactiveContent = () => {
    const contentNameComponent = document.querySelectorAll('.content');
    for (var i = 0; i < contentNameComponent.length; i++) {
        contentNameComponent[i].className = contentNameComponent[i].className.replace(' activeContent', '');
    }
}

export default setUnactiveContent;