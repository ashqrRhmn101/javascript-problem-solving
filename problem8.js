function capitalizeWords(str) {
  let words = str.split(" ");

  let result = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));
