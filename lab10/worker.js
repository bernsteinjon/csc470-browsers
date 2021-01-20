//Jon Bernstein
//CSC470
//Lab 10

let m;
self.onmessage = function (m) {
    let data = m.data.data;
    for (let i = 0; i < data.length; i += 4) {
        let grayscale = .299 * data[i] + .587 * data[i + 1] + .114 * data[i + 2];
        data[i] = grayscale;
        data[i + 1] = grayscale;
        data[i + 2] = grayscale;
    }

    self.postMessage(data);
};
