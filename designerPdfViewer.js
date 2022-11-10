function designerPdfViewer(h, word) {
  // Write your code here
  let highest = [];
  for (let i = 0; i < word.length; i++) {
    highest.push(h[word.charCodeAt(i) - 97]);
  }
  let result = Math.max(...highest);
  return result * word.length;
}
