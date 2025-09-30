function isPalindrome(s: string): boolean {
  let actualString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return actualString === actualString.split("").reverse().join("");
}
