export function previous() {
    history.back();
}

export function next() {
    history.forward();
}

export function go(url) {
    location.assign(url);
}