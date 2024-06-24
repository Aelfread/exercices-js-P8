//votre code ici
function pairNumbers(min, max) {
  let result = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result += (i !== min && i !== 2 ? "," : "") + i;
    }
  }
  return result;
}
export default pairNumbers;
