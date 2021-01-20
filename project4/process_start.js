self.onmessage = function(event) {
    let start = Date.now();
    let img = event.data;
    let newImg = median(img.imData, img.imData.width, img.imData.height);
    img.imData.data.set(newImg);
    let elapsed = Date.now() - start;
    img.id += ": " + elapsed + " ";
    self.postMessage(img);
};

// Apply the color median filter to the ImageData and replace data.
// @param {Uint8ClampedArray} arr  array holding image data
// @param {number}            w    Width of image to process
// @param {number}            h    Height of image to process
function median(arr, w, h) {
    let r, c, rr, cc, i, j, k;
    let arr2 = new Uint8ClampedArray( new ArrayBuffer(4*w*h) );
    for (r=1; r<h-1; r++) {
        for (c=1; c<w-1; c++) {
            let ared = [];
            let agrn = [];
            let ablu = [];
            for (i=-1; i<2; i++) {
                rr = r + i;
                for (j=-1; j<2; j++) {
                    cc = c + j;
                    k  = 4*(rr*w + cc);
                    ared.push( arr[k] );
                    agrn.push( arr[k+1] );
                    ablu.push( arr[k+2] );
                }
            }
            ared.sort();
            agrn.sort();
            ablu.sort();
            k  = 4*(r*w + c);
            arr2[k]   = ared[4];
            arr2[k+1] = agrn[4];
            arr2[k+2] = ablu[4];
            arr2[k+3] = 255;
        }
    }
    return arr2;
}
