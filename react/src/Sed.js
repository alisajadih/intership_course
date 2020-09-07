function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}

/***
 * type : 'div'
 * props : {id : 'asia-cup' , class : 'felan-class'}
 * children : []
 * [[fistRow, secondRow ,...]]
 *  */
function createElement(type, props, ...children) {
  if (typeof type === "string") {
    return {
      type: type,
      props: props ? props : {},
      children: flattenArray(children),
      isSedElement: true,
    };
  }
  if (typeof type === "function") {
    return type(props, flattenArray(children));
  } else {
    throw Error("unexpected type");
  }
}

function goForNodeElement(element) {
  const { type, props, children } = element;
  const dom = document.createElement(type);
  Object.keys(props).map((p) => {
    dom.setAttribute(p, props[p]);
  });
  children.forEach((child) => {
    if (child.isSedElement) {
      dom.appendChild(goForNodeElement(child));
    } else if (typeof child === "object") {
      dom.appendChild(child);
    } else {
      dom.appendChild(document.createTextNode(child));
    }
  });
  return dom;
}

function render(SedElement, root) {
    
  root.appendChild(goForNodeElement(SedElement));
}
export default {
  createElement,
  render,
};
