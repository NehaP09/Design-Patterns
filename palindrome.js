const isPalindrome = input => {
  return (
    input.toLowerCase() ===
    input
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
};

console.log(isPalindrome("madam"));
