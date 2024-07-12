function customText(text: string): string {
  let newText: string[];
  text.includes("-")
    ? (newText = text.split("-"))
    : (newText = new Array(text));

  const resultList: string[] = newText.map((text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });

  let result: string = "";
  for (let i = 0; i < resultList.length; i++) {
    result += resultList[i] + " ";
  }

  return result.trim();
}

export { customText };
