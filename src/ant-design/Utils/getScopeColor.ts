function getScopeColor(scope: string) {
    if (scope === 'public') {
        return 'green';
    }
    else if (scope === 'private') {
        return 'red';
    }
    else if (scope === 'static') {
        return 'blue';
    }
    else if (scope === 'protected') {
        return 'orange';
    }
    return 'gray';
}

export default getScopeColor;
