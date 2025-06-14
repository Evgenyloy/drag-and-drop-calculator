export function setClassName(runTime: boolean, id: string) {
  let className = "buttons__item";
  if (!runTime && !id) return className;
  if (id === "1") {
    runTime
      ? (className = `buttons__item buttons__item-1 buttons__active`)
      : (className = `buttons__item buttons__item-1`);
  }
  if (id === "2") {
    runTime
      ? (className = `buttons__item buttons__item-2`)
      : (className = `buttons__item buttons__item-2 buttons__active`);
  }

  return className;
}
