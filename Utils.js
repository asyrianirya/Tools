class Utils {
  static emptyElement(element) {
    element.innerHTML = '';
  }
  static getElementAttribute = (element, attribute) => {
    return element.getAttribute(attribute);
  };
  static showElement(element, displaymode = 'block') {
    element.style.display = displaymode;
    element.hidden = false;
    element.visibility = 'show';
  }
  static hideElement(element) {
    element.style.display = 'none';
    element.hidden = true;
    element.visibility = 'hidden';
  }
  static isValidInteger(newValue) {
    return Number.isNaN(newValue) || Number.isFinite(newValue);
  }
  static toggleHideElement(element, displaymode = 'block') {
    if (element.style.display == 'none' && element.hidden) {
      element.style.display = displaymode;
      element.hidden = false;
      element.visibility = 'show';
    } else if (element.style.display == displaymode && !element.hidden) {
      element.style.display = 'none';
      element.hidden = true;
      element.visibility = 'hidden';
    } else {
      element.style.display = displaymode;
      element.hidden = false;
      element.visibility = 'show';
    }
  }
  static debug_msg(messageContent = 'SCRIPT EXECUTED CORRECTLY') {
    console.log(messageContent);
    alert(messageContent);
  }
}
export default Utils;
