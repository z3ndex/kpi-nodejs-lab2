function json(data) {
    this.end(JSON.stringify(data));
}

function pageName(data) {
    this.end(`<h1>${data}</h1>`);
}

const helpers = {json, pageName};

export default helpers;
